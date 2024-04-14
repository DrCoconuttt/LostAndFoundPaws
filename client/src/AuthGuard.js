import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { useUser } from "./context/UserContext";
import { useNavigate } from "react-router-dom";
import * as queries from "./graphql/queries";
import { generateClient } from "aws-amplify/api";

const AuthGuard = ({ children }) => {
  const client = generateClient({ authMode: "apiKey" });
  const navigate = useNavigate();
  const location = useLocation();
  const { userState, currentUser, userStateLoading } = useUser();
  const [finishedFetch, setFinishedFetech] = useState(false);
  const unAllowedGuestPaths = [
    "/myAccount",
    "/createPost",
    "/myPostsAndComments",
    "/viewReportings",
  ];

  useEffect(() => {
    const fetchGuard = async () => {
      setFinishedFetech(false);
      switch (userState) {
        case "Guest":
          if (unAllowedGuestPaths.includes(location.pathname)) {
            navigate("/login");
          } else if (
            location.pathname.startsWith("/posts/") &&
            location.pathname.endsWith("/edit")
          ) {
            navigate(-1);
          }
          break;
        case "Poster":
          if (location.pathname === "/viewReportings") {
            navigate("/");
          } else if (
            location.pathname.startsWith("/posts/") &&
            location.pathname.endsWith("/edit")
          ) {
            //check if poster has permission to edit a post
            const postId = location.pathname.split("/")[2];
            try {
              const response = await client.graphql({
                query: queries.getPost,
                variables: { id: postId },
              });
              const postOwner = response.data.getPost.user?.id;
              if (postOwner !== currentUser?.id) {
                navigate(-1);
              }
            } catch (error) {
              console.error("Error fetching post: ", error);
            }
          }
          break;
        case "Admin":
          if (
            location.pathname === "/createPost" ||
            location.pathname === "/createSighting"
          ) {
            navigate("/");
          }
          break;
        default:
          break;
      }
      setFinishedFetech(true);
    };
    if (!userStateLoading) {
      fetchGuard();
    }
  }, [location, userState, currentUser, userStateLoading]);

  return userStateLoading || !finishedFetch ? <div /> : <>{children}</>;
};

export default AuthGuard;
