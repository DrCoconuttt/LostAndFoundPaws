import React from "react";
import { useMobile } from "../../context/MobileContext";
import { useUser } from "../../context/UserContext";
import { signUp } from "aws-amplify/auth";
import { Link } from "react-router-dom";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import { generateClient } from "aws-amplify/api";
import * as Yup from "yup";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "../../sharedStyles/SharedStyles.css";
import PawLogo from "../../sharedStyles/PawLogo.png";
import Button from "@mui/material/Button";
import CustomTextField from "../../components/TextField/TextField";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";
import PhoneField from "../../components/PhoneField/PhoneField";
import CloseButton from "../../components/CloseButton/CloseButton";

//Unauthorized do not have access to report or related fields
//Living here since mutations are auto generated and will be overwritten, probably a better place to put it
const createUserNoAuth = /* GraphQL */ `
  mutation CreateUserNoAuth(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      role
      profilePicture
      email
      phone
      createdAt
      updatedAt
      posts {
        nextToken
        __typename
      }
      sightings {
        nextToken
        __typename
      }
      comments {
        nextToken
        __typename
      }
      owner
      __typename
    }
  }
`;

const Signup = () => {
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  const { updateUserContext } = useUser();

  const client = generateClient({ authMode: "apiKey" });

  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
    role: "POSTER",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string()
      .required("Password is required")
      .min(8, "Password must be at least 8 characters long"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
    phoneNumber: Yup.string().optional(),
    role: Yup.string().required("Role is required"),
  });

  const handleSubmit = async (values) => {
    setIsSubmitting(true);
    const username = values.username;
    const password = values.password;
    const email = values.email;
    const phoneNumber = values.phoneNumber;
    const role = values.role;

    //Could seperate into two try catches for better error handling
    try {
      const signUpResponse = await signUp({
        username: email, // AWS calls email username because its dumb
        password: password,
        options: {
          userAttributes: {
            email: email,
            "custom:role": role, // This is used for the post confirmation trigger to add the user to a cognito group
          },
        },
      });

      await updateUserContext();

      const result = await client.graphql({
        query: createUserNoAuth.replaceAll("__typename", ""),
        variables: {
          input: {
            id: signUpResponse.userId,
            username: username,
            email: email,
            phone: phoneNumber,
            role: role,
          },
        },
      });

      const { nextStep } = signUpResponse;
      switch (nextStep.signUpStep) {
        case "CONFIRM_SIGN_UP":
          const codeDeliveryDetails = nextStep.codeDeliveryDetails;
          console.log(
            `Verification code was sent to ${codeDeliveryDetails.deliveryMedium}`
          );

          handleToastOpen(
            "success",
            `Verification code was sent to ${codeDeliveryDetails.deliveryMedium}`
          );
          setTimeout(() => {
            setToastOpen(false);
          }, 2000);

          setTimeout(() => {
            setIsSubmitting(false);
            navigate("/verifyAccount", { state: { email: email } });
          }, 2000);
          break;
        case "DONE":
          setIsSubmitting(false);
          handleToastOpen("success", "Successfully verified password.");
          setTimeout(() => {
            setToastOpen(false);
          }, 2000);
          break;
      }
    } catch (error) {
      console.log("error signing up:", error);
      handleToastOpen("error", "Error signing up.");
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
          <CloseButton onClick={() => navigate('/')} />
        </div>
        <div className="account-header">
          <div className="logo">
            <img src={PawLogo} alt="Logo" />
            <span>LostAndFoundPaws</span>
          </div>
          <h1>Sign Up</h1>
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
                <CustomTextField
                  name="password"
                  label="Password"
                  variant="outlined"
                  type="password"
                  error={errors.password && touched.password}
                  helperText={touched.password ? errors.password : ""}
                  value={values.password}
                  onChange={(event) => {
                    setFieldValue("password", event.target.value);
                  }}
                  fullWidth
                />
              </div>
              <div className="account-form-component">
                <CustomTextField
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="outlined"
                  type="password"
                  error={errors.confirmPassword && touched.confirmPassword}
                  helperText={
                    touched.confirmPassword ? errors.confirmPassword : ""
                  }
                  value={values.confirmPassword}
                  onChange={(event) => {
                    setFieldValue("confirmPassword", event.target.value);
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
              <div className="account-form-component-with-optional-text">
                <FormControl component="fieldset">
                  <FormLabel component="legend" sx={{ color: "#000000" }}>
                    Role
                  </FormLabel>
                  <RadioGroup
                    row
                    aria-label="role"
                    name="role"
                    value={values.role}
                    onChange={(event) => {
                      setFieldValue("role", event.target.value);
                    }}
                    sx={{ marginBottom: "-16px", marginTop: "-8px" }}
                  >
                    <FormControlLabel
                      value="POSTER"
                      control={<Radio />}
                      label="Poster"
                    />
                    <FormControlLabel
                      value="ADMIN"
                      control={<Radio />}
                      label="Admin"
                    />
                  </RadioGroup>
                </FormControl>
              </div>
              <div className="account-form-component">
                <Button type="submit" variant="contained" color="primary" disabled={isSubmitting}>
                    Sign up
                </Button>
              </div>
            </Form>
          )}
        </Formik>
        <div className="account-link-container">
          <span>
            Already have an account?{" "}
            <Link to="/login" className="account-link">
              Log In
            </Link>
          </span>
          <span>
            Have an unverified account?{" "}
            <Link to="/verifyAccount" className="account-link">
              Verify Now
            </Link>
          </span>
        </div>
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

export default Signup;
