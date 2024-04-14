import React, { useState, useEffect, useRef } from "react";
import { useUser } from "../../context/UserContext";
import { Formik, Form } from "formik";
import { generateClient } from "aws-amplify/api";
import {
  getCurrentUser,
  updateUserAttributes,
  resetPassword,
  deleteUser,
  signOut,
} from "aws-amplify/auth";
import { uploadData, remove } from "@aws-amplify/storage";
import * as queries from "../../graphql/queries.js";
import * as mutations from "../../graphql/mutations.js";
import * as Yup from "yup";
import { useNavigate, Link } from "react-router-dom";
import IconButton from "@mui/material/IconButton";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import "../../sharedStyles/SharedStyles.css";
import "./MyAccount.css";
import Button from "@mui/material/Button";
import CustomTextField from "../../components/TextField/TextField";
import ConfirmDialog from "../../components/ConfirmDialog/ConfirmDialog";
import ImageEditorDialog from "../../components/ImageEditorDialog/ImageEditorDialog";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import ImageUploadOnly from "../../components/ImageUploadOnly/ImageUploadOnly";
import PhoneField from "../../components/PhoneField/PhoneField";

const MyAccount = () => {
  const imageUploadRef = useRef();

  const { currentUser, currentProfilePictureImageData, updateUserContext } =
    useUser();
  const navigate = useNavigate();

  const client = generateClient({ authMode: "userPool" });

  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");

  const [currentUsername, setCurrentUsername] = useState("");
  const [currentEmail, setCurrentEmail] = useState("");
  const [currentPhone, setCurrentPhone] = useState("");
  const [currentProfilePicture, setCurrentProfilePicture] = useState("");

  const [openEditorDialog, setOpenEditorDialog] = useState(false);
  const [imageToEdit, setImageToEdit] = useState(null);

  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);

  const initialValues = {
    username: currentUsername,
    email: currentEmail,
    phoneNumber: currentPhone,
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phoneNumber: Yup.string().optional(),
  });

  const getUserInfo = async () => {
    setCurrentUsername(currentUser?.username ?? "");
    setCurrentEmail(currentUser?.email ?? "");
    setCurrentPhone(currentUser?.phone ?? "");
    if (currentProfilePictureImageData.body instanceof Blob) {
      setCurrentProfilePicture(
        URL.createObjectURL(currentProfilePictureImageData.body)
      );
    } else {
      setCurrentProfilePicture("");
    }
  };

  useEffect(() => {
    getUserInfo();
  }, [currentUser, currentProfilePictureImageData]);

  //For updating account
  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    //Update database
    try {
      const user = await getCurrentUser();
      const result = await client.graphql({
        query: mutations.updateUser.replaceAll("__typename", ""),
        variables: {
          input: {
            id: user.userId,
            username: values.username,
            email: values.email,
            phone: values.phoneNumber,
          },
        },
      });
      await updateUserContext();
      if (values.email == currentEmail) {
        //not updating email so don't need to do the verification toast
        handleToastOpen("success", `Updated account`);
        setTimeout(() => {
          setIsSubmitting(false);
          setToastOpen(false);
        }, 2000);
      }
    } catch (error) {
      console.log("error updating database:", error);
      handleToastOpen("error", "Error updating database.");
      setTimeout(() => {
        if (values.email == currentEmail) {
          setIsSubmitting(false);
        }
        setToastOpen(false);
      }, 2000);
    }

    //Update cognito email if needed
    if (values.email != currentEmail) {
      try {
        const output = await updateUserAttributes({
          //Signed up with username as email but that does not matter here, just need to update the email attribute, or maybe something liek verification will break and this will be the issue
          userAttributes: {
            email: values.email,
          },
        });
        const { nextStep } = output.email;
        switch (nextStep.updateAttributeStep) {
          case "CONFIRM_ATTRIBUTE_WITH_CODE":
            const codeDeliveryDetails = nextStep.codeDeliveryDetails;
            console.log(
              `Confirmation code was sent to ${codeDeliveryDetails?.deliveryMedium}.`
            );
            handleToastOpen(
              "success",
              `Verification code was sent to ${codeDeliveryDetails.deliveryMedium}`
            );

            setTimeout(() => {
              setIsSubmitting(false);
              navigate("/VerifyUpdateEmail");
            }, 2000);
            break;
          case "DONE":
            console.log(`attribute was successfully updated.`);
            handleToastOpen("success", "Successfully verified password.");
            setTimeout(() => {
              setIsSubmitting(false);
              setToastOpen(false);
            }, 2000);
            break;
        }
      } catch (error) {
        console.log(
          "Error updating email cognito, email in database and cognito may be out of sync now:",
          error
        );
        handleToastOpen(
          "error",
          "Error updating email cognito, email in database and cognito may be out of sync now"
        );
        setTimeout(() => {
          setIsSubmitting(false);
          setToastOpen(false);
        }, 2000);
      }
    }
  };

  const handleUpdatePassword = async () => {
    setIsSubmitting(true);
    try {
      const output = await resetPassword({ username: currentEmail });
      const { nextStep } = output;
      switch (nextStep.resetPasswordStep) {
        case "CONFIRM_RESET_PASSWORD_WITH_CODE":
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          console.log(
            `Confirmation code was sent to ${codeDeliveryDetails.deliveryMedium}`
          );
          handleToastOpen(
            "success",
            `Verification code was sent to ${codeDeliveryDetails.deliveryMedium}`
          );

          setTimeout(() => {
            setIsSubmitting(false);
            navigate("/VerifyUpdatePassword", {
              state: { email: currentEmail },
            });
          }, 2000);
          break;
        case "DONE":
          setIsSubmitting(false);
          console.log("Successfully reset password.");
          break;
      }
    } catch (error) {
      console.log("Error updating password cognito", error);
      handleToastOpen("error", "Error updating password cognito.");
      setTimeout(() => {
        setIsSubmitting(false);
        setToastOpen(false);
      }, 2000);
    }
  };

  const handleDeleteConfirmed = async () => {
    setIsSubmitting(true);
    setOpenConfirmDelete(false);
    try {
      const user = await getCurrentUser();

      //Delete profile pic from S3
      const imageKey = currentUser.profilePicture;
      if (imageKey) {
        await remove({ key: imageKey });
      }

      //Delete user from database
      const result = await client.graphql({
        query: mutations.deleteUser,
        variables: {
          input: {
            id: user.userId,
          },
        },
      });
    } catch (error) {
      console.log("error deleting database/S3:", error);
      handleToastOpen("error", "Error deleting database/s3.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    try {
      //Delete use from amplify user list
      await deleteUser();
      console.log(`Deleted user`);
      handleToastOpen("success", `Deleted user`);
      setIsSubmitting(false);

      setTimeout(() => {
        try {
          logoutUser();
        } catch (error) {
          console.log("Error signing out: ", error);
          handleToastOpen("error", "Error signing out.");
          setTimeout(() => {
            setToastOpen(false);
          }, 2000);
        }
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(
        "Error deleting cognito user, user in database and cognito may be out of sync now:",
        error
      );
      handleToastOpen(
        "error",
        "Error deleting cognito user, user in database and cognito may be out of sync now"
      );
      setTimeout(() => {
        setIsSubmitting(false);
        setToastOpen(false);
      }, 2000);
    }
  };

  const logoutUser = async () => {
    try {
      await signOut();
      await updateUserContext();
    } catch (error) {
      console.log("error signing out: ", error);
    }
  };

  //This happens after a image is selected from file explorer
  const handleImageUploadSuccess = async (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      setImageToEdit(e.target.result);
      setOpenEditorDialog(true);
    };
    reader.readAsDataURL(file);
  };

  //This happens after a error occurs when selecting an image from file explorer
  const handleImageUploadError = (error) => {
    console.log("Error selecting image:", error);
  };

  //This uploads an image after the image is edited (using ImageEditorDiologue) to make it a circle
  const handleFinalImageUpload = async (blob) => {
    setOpenEditorDialog(false);
    setImageToEdit(null);

    try {
      const user = await getCurrentUser();
      const imageKey = `images/${Date.now()}_${user.username}_profile_pic.png`;
      const oldImageKey = currentUser.profilePicture;

      await uploadData({
        key: imageKey,
        data: blob,
        options: {
          accessLevel: "guest",
        },
      });

      const userInput = {
        id: user.userId,
        profilePicture: imageKey,
      };

      await client.graphql({
        query: mutations.updateUser,
        variables: { input: userInput },
      });

      await updateUserContext();

      //Delete old image since replacing it with new image, done down here so only happens on success
      if (oldImageKey) {
        await remove({ key: oldImageKey });
      }

      handleToastOpen("success", "Profile picture updated.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      console.log("Error uploading cropped image: ", error);
      handleToastOpen("error", "Error uploading cropped image.");
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
    <div className={"my-account-wrapper"}>
      <div className={"my-account-container"}>
        <div className="account-header">
          <h1>My Account</h1>
          <div className="divider"></div>
        </div>
        <div>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              position: "relative",
            }}
          >
            {currentProfilePicture === "" ? (
              <AccountCircleIcon
                onClick={() => imageUploadRef.current.click()}
                sx={{ fontSize: 200, "&:hover": { cursor: "pointer" } }}
              />
            ) : (
              <img
                src={currentProfilePicture}
                alt="Profile"
                style={{
                  width: 166.67,
                  height: 166.67,
                  borderRadius: "50%",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
                onClick={() => imageUploadRef.current.click()}
              />
            )}
            <Box
              sx={{
                position: "absolute",
                transform: "translate(175%, 175%)",
                borderRadius: "50%",
                backgroundColor: "#f5f5f5",
              }}
            >
              <IconButton
                onClick={() => imageUploadRef.current.click()}
                size="small"
              >
                <EditIcon sx={{ fontSize: 24 }} />
              </IconButton>
            </Box>
            <ImageUploadOnly
              ref={imageUploadRef}
              onFileSelectSuccess={handleImageUploadSuccess}
              onFileSelectError={handleImageUploadError}
            />
          </Box>
        </div>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
          enableReinitialize={true} //To reload when fetch initial values from api
        >
          {({ errors, touched, handleSubmit, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="account-form-component">
                <CustomTextField
                  name="username"
                  label="Username"
                  variant="outlined"
                  error={errors.username && touched.username}
                  helperText={touched.username ? errors.username : ""}
                  value={values.username}
                  onChange={(event) => {
                    setFieldValue("username", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  error={errors.email && touched.email}
                  helperText={touched.email ? errors.email : ""}
                  value={values.email}
                  onChange={(event) => {
                    setFieldValue("email", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <PhoneField
                  value={values.phoneNumber}
                  onChange={(value) => {
                    setFieldValue("phoneNumber", value);
                  }}
                  label="Phone Number (Optional)"
                />
              </div>
              <div className="account-form-component">
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Update Account
                </Button>
                <span style={{ paddingTop: "2px" }}>
                  {" "}
                  {/*should be in css file for consistancy */}
                  Updated email but didn't verify?{" "}
                  <Link to="/verifyUpdateEmail" className="account-link">
                    Verify Now
                  </Link>
                </span>
              </div>
              <div className="account-form-component">
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleUpdatePassword()}
                  disabled={isSubmitting}
                >
                  Update Password
                </Button>
                <span style={{ paddingTop: "2px" }}>
                  {" "}
                  {/*should be in css file for consistancy */}
                  Updated password but didn't verify?{" "}
                  <Link to="/verifyUpdatePassword" className="account-link">
                    Verify Now
                  </Link>
                </span>
              </div>
              <div className="account-form-component">
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => setOpenConfirmDelete(true)}
                  disabled={isSubmitting}
                >
                  Delete Account
                </Button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={handleToastClose}
      />
      <ConfirmDialog
        open={openConfirmDelete}
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={handleDeleteConfirmed}
        title="Are you sure you want to delete this account?"
        isDelete={true}
      />
      <ImageEditorDialog
        open={openEditorDialog}
        onClose={() => setOpenEditorDialog(false)}
        onSave={handleFinalImageUpload}
        image={imageToEdit}
      />
    </div>
  );
};

export default MyAccount;
