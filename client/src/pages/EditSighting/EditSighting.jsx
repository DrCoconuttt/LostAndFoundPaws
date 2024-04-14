import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData } from "@aws-amplify/storage";
import { useParams } from "react-router-dom";
import CircularProgress from "@mui/material/CircularProgress";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { downloadData, remove } from "@aws-amplify/storage";
import { useUser } from "../../context/UserContext";
import CreateSightingForm from "../../components/CreateSightingForm/CreateSightingForm";

const EditSighting = () => {
  const [sighting, setSighting] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const { userState, currentUser } = useUser();
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }
  const { id } = useParams();
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");

  const fetchImage = async (imageUrl) => {
    try {
      const imageData = await downloadData({ key: imageUrl }).result;
      const file = new File([imageData.body], imageUrl, {
        type: imageData.contentType,
      });
      return file;
    } catch (error) {
      console.error("Error downloading image:", error);
      return null;
    }
  };

  const fetchSightingData = async () => {
    try {
      const response = await client.graphql({
        query: queries.getSighting,
        variables: { id },
      });
      const downloadedImage = await fetchImage(response.data.getSighting.image);

      setSighting({ ...response.data.getSighting, image: downloadedImage });
      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleToastOpen("error", "Error fetching sighting data.");
      console.error("Error fetching sighting data: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
  };

  useEffect(() => {
    fetchSightingData();
  }, []);

  const handleUpdate = async (values) => {
    const deletedImage =
      sighting.image !== values.image ? sighting.image : null;
    const addedImage = sighting.image !== values.image ? values.image : null;

    try {
      const user = await getCurrentUser();

      let uploadedImageKey = null;
      if (addedImage) {
        const imageKey = `images/${Date.now()}_${addedImage.name}`;
        await uploadData({
          key: imageKey,
          data: addedImage,
          options: {
            accessLevel: "guest", // Guests should be able to view the images
          },
        }).result;
        uploadedImageKey = imageKey;
      }

      if (deletedImage) {
        await remove({
          key: deletedImage.name,
        }).result;
      }

      // Store the data in the database
      const sightingInput = {
        id: sighting.id,
        location: {
          latitude: values.location.latitude,
          longitude: values.location.longitude,
          address: values.location.address,
        },
        userID: user.userId,
        image: uploadedImageKey,
        contactInfo: {
          email: values.email || "",
          phone: values.phoneNumber || "",
        },
      };

      await client.graphql({
        query: mutations.updateSighting,
        variables: { input: sightingInput },
      });

      handleToastOpen("success", "Sighting post updated successfully.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error updating sighting post: ", error);
      handleToastOpen(
        "error",
        "Error updating sighting post. Please try again later."
      );
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
  };

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div>
      {sighting ? (
        <CreateSightingForm
          isEdit={true}
          sightingData={sighting}
          handleSubmit={handleUpdate}
        />
      ) : null}
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={handleToastClose}
      />
    </div>
  );
};

export default EditSighting;
