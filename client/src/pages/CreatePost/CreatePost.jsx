import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData } from "@aws-amplify/storage";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import * as mutations from '../../graphql/mutations';

const CreatePost = () => {
  const navigate = useNavigate();
  const client = generateClient({ authMode: "userPool" }); //May need to update to apiKey since poster accounts are not authorized
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values) => {
    try {
      const user = await getCurrentUser();
      setIsSubmitting(true);

      const uploadTasks = values.images.map(async (image) => {
        const imageKey = `images/${Date.now()}_${image.name}`;
        await uploadData({
          key: imageKey,
          data: image,
          options: {
            accessLevel: "guest", // Guests should be able to view the images
          },
        }).result;
        return imageKey;
      });

      const imageKeys = await Promise.all(uploadTasks);

      // Store the data in the database
      const postInput = {
        name: values.name,
        status: values.type.toUpperCase(),
        gender: values.gender,
        summary: values.summary,
        description: values.description,
        resolved: false,
        lastKnownLocation: {
          latitude: values.location.latitude,
          longitude: values.location.longitude,
          address: values.location.address,
        },
        species: values.species,
        userID: user.userId,
        images: imageKeys
      };

      await client.graphql({
        query: mutations.createPost,
        variables: { input: postInput },
      });

      handleToastOpen("success", "Post created successfully.");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/", { state: { selectedType: values.type } });
      }, 2000);
    } catch (error) {
      console.error("Error creating post: ", error);
      handleToastOpen("error", "Error creating post.");
      setIsSubmitting(false);
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

  const handleToastClose = (event, reason) => {
    setToastOpen(false);
  };

  return (
    <div>
      <CreatePostForm isEdit={false} handleSubmit={handleSubmit} isSubmitting={isSubmitting}/>
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={handleToastClose}
      />
    </div>
  );
};

export default CreatePost;
