import { Box, CircularProgress, Typography } from "@mui/material";
import React, { useState, useEffect } from "react";
import Toggle from "../../components/Toggle/Toggle";
import theme from "../../theme/theme";
import "./MyPostsAndComments.css";
import PetCard from "../../components/PetCard/PetCard";
import CommentCard from "../../components/CommentCard/CommentCard";
import { useMobile } from "../../context/MobileContext";
import { generateClient } from "aws-amplify/api";
import { downloadData } from "@aws-amplify/storage";
import * as queries from "../../graphql/queries";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import * as mutations from "../../graphql/mutations";
import SightingCard from "../../components/SightingCard/SightingCard";
import { useUser } from "../../context/UserContext";
import { getSightingPhoneNumber, getSightingEmail } from "../../utils/utils";

let contentTypeOptions = [
  { label: "Lost", color: theme.palette.custom.selectedCategory.lost.light },
  { label: "Found", color: theme.palette.custom.selectedCategory.found.light },
  {
    label: "Sighting",
    color: theme.palette.custom.selectedCategory.sighting.light,
  },
  { label: "Comments", color: theme.palette.custom.selectedCategory.view },
];

const MyPostsAndComments = () => {
  const { userState, currentUser, currentProfilePictureImageData } = useUser();
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }

  const { isMobile } = useMobile();
  const [selectedType, setSelectedType] = useState("Lost");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastSeverity, setToastSeverity] = useState("success");
  const [toastMessage, setToastMessage] = useState("");
  const [commentData, setCommentData] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [sightingsData, setSightingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };
  const handleToastClose = () => {
    setToastOpen(false);
  };

  const handleContentTypeToggle = (index) => {
    setSelectedType(contentTypeOptions[index].label);
    setSelectedIndex(index);
  };

  useEffect(() => {
    if (userState === "Admin") {
      contentTypeOptions = [
        {
          label: "Comments",
          color: theme.palette.custom.selectedCategory.view,
        },
      ];
      setSelectedType("Comments");
    }

    const fetchPostsData = async () => {
      try {
        const listResponse = await client.graphql({
          query: queries.postsByUser,
          variables: { userID: currentUser?.id },
        });
        const posts = listResponse.data.postsByUser.items;
        const postsWithImages = await Promise.all(
          posts.map(async (post) => {
            try {
              const firstImageUrl = post.images[0];
              const firstImageData = await downloadData({ key: firstImageUrl })
                .result;
              const firstImageSrc = URL.createObjectURL(firstImageData.body);

              post.firstImg = firstImageSrc;
              return post;
            } catch (error) {
              console.error("Error fetching image for post:", error);
              return post;
            }
          })
        );
        setPostsData(postsWithImages);
        setLoading(false);
      } catch (error) {
        handleToastOpen("error", "Error fetching posts.");
        console.error("Error fetching posts: ", error);
        setTimeout(() => {
          setToastOpen(false);
        }, 2000);
      }
    };

    const fetchSightingsData = async () => {
      try {
        const listResponse = await client.graphql({
          query: queries.sightingsByUser,
          variables: { userID: currentUser?.id },
        });
        const sightings = listResponse.data.sightingsByUser.items;
        const sightingsWithImages = await Promise.all(
          sightings.map(async (sighting) => {
            try {
              const firstImageData = await downloadData({ key: sighting.image })
                .result;
              const firstImageSrc = URL.createObjectURL(firstImageData.body);

              sighting.firstImg = firstImageSrc;
              return sighting;
            } catch (error) {
              console.error("Error fetching image for sighting post:", error);
              return sighting;
            }
          })
        );
        setSightingsData(sightingsWithImages);
        setLoading(false);
      } catch (error) {
        handleToastOpen("error", "Error fetching sighting posts.");
        console.error("Error fetching sighting posts: ", error);
        setTimeout(() => {
          setToastOpen(false);
        }, 2000);
      }
    };

    const fetchComments = async () => {
      try {
        const commentsResponse = await client.graphql({
          query: queries.commentsByUser,
          variables: { userID: currentUser?.id },
        });
        const comments = commentsResponse.data.commentsByUser.items;
        setCommentData(comments);
        setLoading(false);
      } catch (error) {
        handleToastOpen("error", "Error fetching comments for user.");
        console.error("Error fetching comments for user: ", error);
        setTimeout(() => {
          setToastOpen(false);
        }, 2000);
      }
    };
    if (currentUser) {
      fetchPostsData();
      fetchSightingsData();
      fetchComments();
    }
  }, [currentUser]);

  const deletePost = async (id) => {
    setLoading(true);
    const deletePostInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deletePost,
        variables: { input: deletePostInput },
      });
      const newPostData = postsData.filter((post) => post.id !== id);
      setPostsData(newPostData);
      handleToastOpen("success", "Successfully deleted post.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error deleting post.");
      console.error("Error deleting post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const deleteSighting = async (id) => {
    setLoading(true);
    const deleteSightingInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deleteSighting,
        variables: { input: deleteSightingInput },
      });
      const newSightingsData = sightingsData.filter(
        (sighting) => sighting.id !== id
      );
      setSightingsData(newSightingsData);
      handleToastOpen("success", "Successfully deleted sighting post.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error deleting sighting post.");
      console.error("Error deleting sighting post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const deleteComment = async (id) => {
    setLoading(true);
    const deleteCommentInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deleteComment,
        variables: { input: deleteCommentInput },
      });
      const newCommentData = commentData.filter((comment) => comment.id !== id);
      setCommentData(newCommentData);
      handleToastOpen("success", "Successfully deleted comment.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error deleting comment.");
      console.error("Error deleting comment: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const resolveSighting = async (id) => {
    setLoading(true);
    const updateSightingInput = {
      id: id,
    };

    try {
      await client.graphql({
        query: mutations.deleteSighting,
        variables: { input: updateSightingInput },
      });
      const newSightingsData = sightingsData.filter(
        (sighting) => sighting.id !== id
      );
      setSightingsData(newSightingsData);
      handleToastOpen("success", "Successfully marked sighting as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error resolving sighting post.");
      console.error("Error resolving sighting post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const resolvePost = async (id) => {
    setLoading(true);
    const deletePostInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deletePost,
        variables: { input: deletePostInput },
      });
      const newPostData = postsData.filter((post) => post.id !== id);
      setPostsData(newPostData);
      handleToastOpen("success", "Successfully marked post as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error resolving post.");
      console.error("Error resolving post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const filteredPosts = postsData.filter(
    (post) => post.status.toLowerCase() === selectedType.toLowerCase()
  );

  return (
    <>
      {loading ? (
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
      ) : (
        <Box className="my-content">
          <Box width={"95%"} margin={"auto"}>
            <Toggle
              options={contentTypeOptions}
              onToggleCallback={handleContentTypeToggle}
              containerWidth={"100%"}
              initialIndex={selectedIndex}
            />
          </Box>
          <Box
            className={
              selectedType.toLowerCase() === "sighting" && "my-sigthing-content"
            }
            sx={{ justifyContent: isMobile ? "center" : "flex-start" }}
          >
            {selectedType.toLowerCase() === "comments" ? (
              commentData.length === 0 ? (
                <Typography variant="h1" margin={"1rem"} display={"flex"}>
                  No {selectedType} posts found
                </Typography>
              ) : (
                commentData
                  .slice()
                  .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                  .map((comment, index) => (
                    <CommentCard
                      key={index}
                      userId={currentUser?.id}
                      id={comment.id}
                      userProfilePicture={currentProfilePictureImageData.key}
                      content={comment.content}
                      parentCommentId={comment.parentCommentID}
                      username={currentUser?.username}
                      createdAt={comment.createdAt}
                      updatedAt={comment.updatedAt}
                      onDelete={deleteComment}
                    />
                  ))
              )
            ) : selectedType.toLowerCase() === "sighting" ? (
              sightingsData.length === 0 ? (
                <Typography variant="h1" margin={"1rem"} display={"flex"}>
                  No {selectedType} posts found
                </Typography>
              ) : (
                sightingsData
                  .slice()
                  .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
                  .map((sighting, index) => (
                    <SightingCard
                      key={index}
                      id={sighting.id}
                      userId={sighting.userID}
                      img={sighting.firstImg}
                      location={sighting.location.address}
                      resolved={sighting.resolved}
                      email={getSightingEmail(sighting)}
                      phoneNumber={getSightingPhoneNumber(sighting)}
                      createdAt={sighting.createdAt}
                      onDelete={deleteSighting}
                      onResolve={resolveSighting}
                    />
                  ))
              )
            ) : filteredPosts.length === 0 ? (
              <Typography variant="h1" margin={"1rem"} display={"flex"}>
                No {selectedType} posts found
              </Typography>
            ) : (
              filteredPosts
                .slice()
                .sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt))
                .map((post, index) => (
                  <PetCard
                    key={index}
                    id={post.id}
                    userId={post.userID}
                    img={post.firstImg}
                    name={post.name}
                    status={post.status}
                    petType={post.species}
                    summary={post.summary}
                    location={post.lastKnownLocation.address}
                    createdAt={post.createdAt}
                    resolved={post.resolved}
                    updatedAt={post.updatedAt}
                    onDelete={deletePost}
                    onResolve={resolvePost}
                  />
                ))
            )}
          </Box>
          <ToastNotification
            open={toastOpen}
            severity={toastSeverity}
            message={toastMessage}
            handleClose={handleToastClose}
          />
        </Box>
      )}
    </>
  );
};

export default MyPostsAndComments;
