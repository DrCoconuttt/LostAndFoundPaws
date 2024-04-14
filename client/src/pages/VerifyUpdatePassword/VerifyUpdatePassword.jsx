import React from "react";
import { useMobile } from "../../context/MobileContext";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import "../../sharedStyles/SharedStyles.css";
import PawLogo from "../../sharedStyles/PawLogo.png";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import CustomTextField from "../../components/TextField/TextField";
import { useLocation, useNavigate } from "react-router-dom";
import { confirmResetPassword } from "aws-amplify/auth";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import CloseButton from "../../components/CloseButton/CloseButton";

const VerifyUpdatePassword = () => {
  const { isMobile } = useMobile();
  const { updateUserContext } = useUser();

  const location = useLocation();
  const navigate = useNavigate();
  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");

  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const { email } = location.state || {};

  const initialValues = {
    email: email,
    newPassword: "",
    confirmNewPassword: "",
    confirmationCode: "",
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Email is required"),
    newPassword: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    newConfirmPassword: Yup.string()
      .required("Confirm Password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
    confirmationCode: Yup.string().required("Confirmation code is required"),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    try {
      await confirmResetPassword({
        username: values.email,
        confirmationCode: values.confirmationCode,
        newPassword: values.newPassword,
      });
      handleToastOpen("success", "Account information updated.");
      setTimeout(() => {
        setIsSubmitting(false);
        navigate("/MyAccount");
      }, 2000);
    } catch (error) {
      console.error("Error updating account information: ", error);
      handleToastOpen("error", "Error verifying account.");
      setTimeout(() => {
        setIsSubmitting(false);
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
    <div
      className={`${isMobile ? "account-wrapper-mobile" : "account-wrapper"}`}
    >
      <div
        className={`${
          isMobile ? "account-container-mobile" : "account-container"
        }`}
      >
        <div className="close-button">
          <CloseButton onClick={() => navigate("/")} />
        </div>
        <div className="account-header">
          <div className="logo">
            <img src={PawLogo} alt="Logo" />
            <span>LostAndFoundPaws</span>
          </div>
          <h1>Update Password</h1>
          <div className="divider"></div>
        </div>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, handleSubmit, setFieldValue, values }) => (
            <Form onSubmit={handleSubmit}>
              <div className="account-form-component">
                Enter the confirmation code emailed to you
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="email"
                  label="Email"
                  variant="outlined"
                  value={email}
                  error={errors.email && touched.email}
                  helperText={touched.email ? errors.email : ""}
                  onChange={(event) => {
                    setFieldValue("email", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="newPassword"
                  label="New Password"
                  variant="outlined"
                  type="password"
                  error={errors.newPassword && touched.newPassword}
                  helperText={touched.newPassword ? errors.newPassword : ""}
                  value={values.newPassword}
                  onChange={(event) => {
                    setFieldValue("newPassword", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="newConfirmPassword"
                  label="Confirm New Password"
                  variant="outlined"
                  type="password"
                  error={
                    errors.newConfirmPassword && touched.newConfirmPassword
                  }
                  helperText={
                    touched.newConfirmPassword ? errors.newConfirmPassword : ""
                  }
                  value={values.newConfirmPassword}
                  onChange={(event) => {
                    setFieldValue("newConfirmPassword", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="confirmationCode"
                  label="Confirmation Code"
                  variant="outlined"
                  error={errors.confirmationCode && touched.confirmationCode}
                  helperText={
                    touched.confirmationCode ? errors.confirmationCode : ""
                  }
                  value={values.confirmationCode}
                  onChange={(event) => {
                    setFieldValue("confirmationCode", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                  Update Password
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
    </div>
  );
};

export default VerifyUpdatePassword;
