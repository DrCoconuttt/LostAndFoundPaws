import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData } from "@aws-amplify/storage";
import * as mutations from "../../graphql/mutations";
import { useUser } from "../../context/UserContext";
import CreateSightingForm from "../../components/CreateSightingForm/CreateSightingForm";

const CreateSighting = () => {
  const navigate = useNavigate();
  const { userState, currentUser } = useUser();
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      let imageKey = "";
      setIsSubmitting(true);
      if (values.image) {
        imageKey = `images/${Date.now()}_${values.image.name}`;
        await uploadData({
          key: imageKey,
          data: values.image,
          options: {
            accessLevel: "guest",
          },
        }).result;
      }

      // Determine the reporter type
      let currentUser = null;
      try {
        currentUser = await getCurrentUser();
      } catch (error) {
        console.log("No current user. User is a guest.");
      }
      const reporterType = currentUser ? "POSTER" : "GUEST";

      // Store the data in the database
      const sightingInput = {
        location: {
          latitude: values.location.latitude,
          longitude: values.location.longitude,
          address: values.location.address,
        },
        image: imageKey || "",
        userID: currentUser ? currentUser.userId : null,
        contactInfo: !currentUser ? {
          email: values.email || "",
          phone: values.phoneNumber || "",
        } : null,
        reporterType: reporterType,
      };

      await client.graphql({
        query: mutations.createSighting,
        variables: { input: sightingInput },
      });

      handleToastOpen("success", "Sighting post created successfully.");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/", { state: { selectedType: "Sighting" } });
      }, 2000);
    } catch (error) {
      console.error("Error creating sighting post: ", error);
      handleToastOpen(
        "error",
        "Error creating sighting post. Please try again later."
      );
      setIsSubmitting(false);
    }
  };

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = (event, reason) => {
    setToastOpen(false);
  };

  const handleCancel = () => {
    navigate(-1);
  };

  return (
    <div>
      <CreateSightingForm isEdit={false} handleSubmit={handleSubmit} isSubmitting={isSubmitting} />
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={handleToastClose}
      />
    </div>
  );
};

export default CreateSighting;
