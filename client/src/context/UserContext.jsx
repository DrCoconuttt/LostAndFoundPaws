import React, { createContext, useContext, useState, useEffect } from "react";
import { generateClient } from "aws-amplify/api";
import { getCurrentUser } from "aws-amplify/auth";
import * as queries from "../graphql/queries.js";
import { downloadData } from "@aws-amplify/storage";

const UserContext = createContext();

const client = generateClient({ authMode: "userPool" });

export const UserProvider = ({ children }) => {
  const [userState, setUserState] = useState("Guest");
  const [currentUser, setCurrentUser] = useState("");
  const [currentProfilePictureImageData, setCurrentProfilePictureImageData] =
    useState("");
  const [userStateLoading, setUserStateLoading] = useState(true);

  const updateUserContext = async () => {
    try {
      setUserStateLoading(true);
      const user = await getCurrentUser();
      const result = await client.graphql({
        query: queries.getUser,
        variables: { id: user.userId },
      });
      setCurrentUser(result.data.getUser);

      //Find if poster or admin
      if (result.data.getUser.role == "ADMIN") {
        setUserState("Admin");
        setUserStateLoading(false);
      } else {
        setUserState("Poster");
        setUserStateLoading(false);
      }

      //Find all results for currently logged in user
      setCurrentUser(result.data.getUser);

      //Find profile picture
      const imageUrl = result.data.getUser.profilePicture;
      if (imageUrl) {
        try {
          const imageData = await downloadData({ key: imageUrl }).result;
          setCurrentProfilePictureImageData(imageData);
        } catch (error) {
          console.error("Error fetching image for post:", error);
          setCurrentProfilePictureImageData("");
        }
      } else {
        setCurrentProfilePictureImageData("");
      }
    } catch (error) {
      //Case user is not logged in
      setUserState("Guest");
      setCurrentUser("");
      setCurrentProfilePictureImageData("");
      setUserStateLoading(false);
    }
  };

  useEffect(() => {
    updateUserContext();
  }, []);

  return (
    <UserContext.Provider
      value={{
        userState,
        currentUser,
        currentProfilePictureImageData,
        updateUserContext,
        userStateLoading
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
