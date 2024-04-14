import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import { uploadData } from "@aws-amplify/storage";
import { useParams } from "react-router-dom";
import CreatePostForm from "../../components/CreatePostForm/CreatePostForm";
import CircularProgress from "@mui/material/CircularProgress";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import { downloadData, remove } from "@aws-amplify/storage";

const EditPost = () => {
  const navigate = useNavigate();
  const client = generateClient({ authMode: "userPool" });
  const { id } = useParams();
  const [toastOpen, setToastOpen] = React.useState(false);
  const [loading, setLoading] = useState(true);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");
  const [post, setPost] = useState(null);

  const fetchPost = async () => {
    try {
      const postData = await client.graphql({
        query: queries.getPost,
        variables: { id },
      });

      const downloadedImages = await fetchImages(postData.data.getPost.images);

      setPost({ ...postData.data.getPost, images: downloadedImages });

      setLoading(false);
    } catch (error) {
      setLoading(false);
      handleToastOpen("error", "Error fetching post.");
      console.error("Error fetching post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
  };

  const fetchImages = async (imageUrls) => {
    const images = await Promise.all(
      imageUrls.map(async (imageUrl) => {
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
      })
    );
    return images;
  };

  useEffect(() => {
    fetchPost();
  }, []);

  const handleSubmit = async (values) => {
    const deletedImages = post.images.filter(
      (postImage) =>
        !values.images.some((valueImage) => valueImage.name === postImage.name)
    );

    const addedImages = values.images.filter(
      (valueImage) =>
        !post.images.some((postImage) => postImage.name === valueImage.name)
    );
    
    try {
      const user = await getCurrentUser();

      const uploadTasks = addedImages.map(async (image) => {
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

      const uploadedImageKeys = await Promise.all(uploadTasks);
      const existingImageKeys = post.images
        .filter(
          (image) =>
            !deletedImages.some(
              (deletedImage) => deletedImage.name === image.name
            )
        )
        .map((image) => image.name);

      const imageKeys = [...existingImageKeys, ...uploadedImageKeys];

      const deletionTasks = deletedImages.map(async (image) => {
        await remove({
          key: image.name,
        }).result;
      });

      await Promise.all(deletionTasks);

      // Store the data in the database
      const postInput = {
        id: post.id,
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
        images: imageKeys,
      };

      await client.graphql({
        query: mutations.updatePost,
        variables: { input: postInput },
      });

      handleToastOpen("success", "Post updated successfully.");
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (error) {
      console.error("Error updating post: ", error);
      handleToastOpen("error", "Error updating post.");
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
      {post ? (
        <CreatePostForm
          isEdit={true}
          postData={post}
          handleSubmit={handleSubmit}
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

export default EditPost;
