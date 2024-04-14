import React, { useState, useEffect } from "react";
import { Box, CircularProgress, Typography } from "@mui/material";
import PetCard from "../../components/PetCard/PetCard";
import SightingCard from "../../components/SightingCard/SightingCard";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import { useMobile } from "../../context/MobileContext";
import { generateClient } from "aws-amplify/api";
import { downloadData } from "@aws-amplify/storage";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { useUser } from "../../context/UserContext";
import { getSightingPhoneNumber, getSightingEmail } from "../../utils/utils";

const ListView = ({
  selectedType,
  filterPosts,
  filterSightings,
  applyClicked,
}) => {
  const { userState } = useUser();
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }
  const [toastOpen, setToastOpen] = useState(false);
  const [toastSeverity, setToastSeverity] = useState("success");
  const [toastMessage, setToastMessage] = useState("");
  const [posts, setPosts] = useState([]);
  const [sightings, setSightings] = useState([]);
  const [postsData, setPostsData] = useState([]);
  const [sightingsData, setSightingsData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let didCancel = false;
    const fetchPostsData = async () => {
      if (didCancel) {
        return;
      }
      try {
        let posts = filterPosts || [];
        if (filterPosts === null) {
          const listResponse = await client.graphql({
            query: queries.listPosts,
          });
          posts = listResponse.data.listPosts.items;
          posts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        }
        setPosts(posts);
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
        let sightings = filterSightings || [];
        if (filterSightings === null) {
          const listResponse = await client.graphql({
            query: queries.listSightings,
          });
          sightings = listResponse.data.listSightings.items;
          sightings.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
        }
        setSightings(sightings);
        const sightingsWithImages = await Promise.all(
          sightings.map(async (sighting) => {
            try {
              const firstImageData = await downloadData({ key: sighting.image })
                .result;
              const firstImageSrc = URL.createObjectURL(firstImageData.body);

              sighting.firstImg = firstImageSrc;
              return sighting;
            } catch (error) {
              console.error("Error fetching image for sighting:", error);
              return sighting;
            }
          })
        );
        setSightingsData(sightingsWithImages);
      } catch (error) {
        handleToastOpen("error", "Error fetching sighting posts.");
        console.error("Error fetching sighting posts: ", error);
        setTimeout(() => {
          setToastOpen(false);
        }, 2000);
      }
    };

    fetchPostsData();
    fetchSightingsData();
    return () => {
      didCancel = true;
    };
  }, [applyClicked, filterPosts, filterSightings]);

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
      const newpostsData = postsData.filter((post) => post.id !== id);
      setPostsData(newpostsData);
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

  const resolvePost = async (id) => {
    setLoading(true);
    const updatePostInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deletePost,
        variables: { input: updatePostInput },
      });
      const newpostsData = postsData.filter((post) => post.id !== id);
      setPostsData(newpostsData);
      handleToastOpen("success", "Successfully marked post as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error marking post as resolved.");
      console.error("Error marking post as resolved: ", error);
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
      handleToastOpen("error", "Error marking sighting as resolved..");
      console.error("Error marking sighting as resolved.: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
  };

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const { isMobile } = useMobile();
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
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: isMobile ? "center" : "flex-start",
          }}
        >
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
            <>
              {selectedType !== "Sighting" ? (
                filteredPosts.length === 0 ? (
                  <Typography variant="h1" margin={"1rem"} display={"flex"}>
                    No {selectedType} posts found.
                  </Typography>
                ) : (
                  filteredPosts.map((post, index) => (
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
                      updatedAt={post.updatedAt}
                      resolved={post.resolved}
                      onDelete={deletePost}
                      onResolve={resolvePost}
                    />
                  ))
                )
              ) : sightingsData.length === 0 ? (
                <Typography variant="h1" margin={"1rem"} display={"flex"}>
                  No {selectedType} posts found.
                </Typography>
              ) : (
                sightingsData.map((sighting, index) => (
                  <SightingCard
                    key={index}
                    id={sighting.id}
                    userId={sighting.userID}
                    img={sighting.firstImg}
                    location={sighting.location.address}
                    email={getSightingEmail(sighting)}
                    phoneNumber={getSightingPhoneNumber(sighting)}
                    createdAt={sighting.createdAt}
                    resolved={sighting.resolved}
                    onDelete={deleteSighting}
                    onResolve={resolveSighting}
                  />
                ))
              )}
            </>
          )}
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

export default ListView;
