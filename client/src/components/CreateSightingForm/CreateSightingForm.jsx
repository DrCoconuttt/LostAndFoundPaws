import React, { useEffect, useState } from "react";
import { Container, Grid, Typography, Button, useTheme } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import ImageUpload from "../ImageUpload/ImageUpload";
import CustomTextField from "../TextField/TextField";
import { useMobile } from "../../context/MobileContext";
import AddressAutocompleteField from "../AddressAutocompleteField/AddressAutocompleteField";
import ArrowBackButton from "../../components/ArrowBackButton/ArrowBackButton";
import PhoneField from "../PhoneField/PhoneField";
import { useUser } from "../../context/UserContext";
import "./CreateSightingForm.css";

const FieldTitle = ({ title }) => {
  return (
    <Typography variant="subtitle1" fontWeight="bold">
      {title}
    </Typography>
  );
};


const CreateSightingForm = ({ isEdit, sightingData, handleSubmit, isSubmitting }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  const { userState, currentUser } = useUser();

  const getPhoneNumber = () => {
    if (isEdit && sightingData.user?.phone) {
      return sightingData.user.phone;
    } else if (isEdit && sightingData.contactInfo?.phone) {
      return sightingData.contactInfo.phone;
    } else {
      return currentUser?.phone || "";
    }
  };

  const getEmail = () => {
    if (isEdit && sightingData.user?.email) {
      return sightingData.user.email;
    } else if (isEdit && sightingData.contactInfo?.email) {
      return sightingData.contactInfo.email;
    } else {
      return currentUser?.email || "";
    }
  };

  const [initialValues, setInitialValues] = useState({
    location: isEdit ? sightingData.location : "",
    phoneNumber: getPhoneNumber(),
    email: getEmail(),
    image: isEdit ? sightingData.image : "",
  });

  useEffect(() => {
    setInitialValues((prevValues) => ({
      ...prevValues,
      phoneNumber: getPhoneNumber(),
      email: getEmail(),
    }));
  }, [currentUser]);

  const validationSchema = Yup.object().shape({
    location: Yup.object().required("Sighting location is required"),
    phoneNumber: Yup.string().optional(),
    email: Yup.string().email("Invalid email").optional(),
    image: Yup.string().required("Image is required"),
  });

  return (
    <Container
      style={{ overflowY: isMobile ? "scroll" : "hidden", marginBottom: 50 }}
    >
      <Grid
        container
        justifyContent="space-between"
        className="create-sighting-header"
      >
        <Grid item xs={12}>
          <div style={{ marginBottom: "10px" }}>
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
          <div>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              {isEdit ? "Edit Sighting Post" : "Create Sighting Post"}
            </Typography>
            <Typography variant="subtitle1">
              {isEdit
                ? "Please modify the sighting information below."
                : "Please enter the sighting information below."}
            </Typography>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ values, errors, touched, setFieldValue, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={theme.breakpoints.down("md") ? 4 : 6}>
                  <Grid item container xs={12} md={6} spacing={4}>
                    <Grid item xs={12}>
                      <FieldTitle title="Sighting Location" />
                      <AddressAutocompleteField
                        name="location"
                        variant="outlined"
                        className="textField"
                        error={errors.location && touched.location}
                        helperText={touched.location ? errors.location : ""}
                        value={values.location}
                        onChange={(value) => {
                          setFieldValue("location", value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Phone Number (Optional)" />
                      <PhoneField
                        value={values.phoneNumber}
                        onChange={(value) => {
                          setFieldValue("phoneNumber", value);
                        }}
                        disabled={userState != "Guest"}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} md={6} spacing={4}>
                    <Grid item xs={12}>
                      <FieldTitle title="Insert Picture" />
                      <ImageUpload
                        images={values.image ? [values.image] : []}
                        handleImageChange={(e) => {
                          const newImage = e.target.files[0];
                          setFieldValue("image", newImage);
                          e.target.value = null;
                        }}
                        handleRemoveImage={() => {
                          setFieldValue("image", null);
                        }}
                        error={errors.image && touched.image}
                        helperText={touched.image ? errors.image : ""}
                        isSingle={true}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Email (Optional)" />
                      <CustomTextField
                        name="email"
                        variant="outlined"
                        className="textField"
                        error={errors.email && touched.email}
                        helperText={touched.email ? errors.email : ""}
                        value={values.email}
                        onChange={(event) => {
                          setFieldValue("email", event.target.value);
                        }}
                        disabled={userState != "Guest"}
                      />
                    </Grid>
                  </Grid>
                  <Grid
                    item
                    container
                    xs={12}
                    spacing={theme.breakpoints.down("md") ? 2 : 10}
                    marginTop={isMobile ? 0 : 3}
                  >
                    <Grid item xs={6} md={6}>
                      <Button
                        variant="outlined"
                        color="primary"
                        className="formButton"
                        onClick={() => navigate(-1)}
                      >
                        Cancel
                      </Button>
                    </Grid>
                    <Grid item xs={6} md={6}>
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        className="formButton"
                        disabled={isSubmitting}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              </Form>
            )}
          </Formik>
        </Grid>
      </Grid>
    </Container>
  );
};

export default CreateSightingForm;
