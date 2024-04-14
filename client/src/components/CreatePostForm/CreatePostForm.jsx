import React, {useEffect, useState} from "react";
import { Container, Grid, Typography, Button, useTheme } from "@mui/material";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { rgba } from "polished";
import Toggle from "../../components/Toggle/Toggle";
import ImageUpload from "../../components/ImageUpload/ImageUpload";
import CustomTextField from "../../components/TextField/TextField";
import CustomDropdown from "../../components/DropDown/DropDown";
import AddressAutocompleteField from "../../components/AddressAutocompleteField/AddressAutocompleteField";
import { useMobile } from "../../context/MobileContext";
import ArrowBackButton from "../../components/ArrowBackButton/ArrowBackButton";
import PhoneField from "../PhoneField/PhoneField";
import { useUser } from "../../context/UserContext";
import "./CreatePostForm.css";

const postTypeOptions = [
  { label: "Lost", color: rgba("#FDC0C0", 0.5) },
  { label: "Found", color: rgba("#8DFD8D", 0.5) },
];

const genderOptions = [
  { label: "Male", value: "MALE" },
  { label: "Female", value: "FEMALE" },
  { label: "Unknown", value: "UNKNOWN" },
];

const speciesOptions = [
  { label: "Dog", value: "DOG" },
  { label: "Cat", value: "CAT" },
  { label: "Other", value: "OTHER" },
];

const FieldTitle = ({ title }) => {
  return (
    <Typography variant="subtitle1" fontWeight="bold">
      {title}
    </Typography>
  );
};

const CreatePostForm = ({ isEdit, postData, handleSubmit, isSubmitting  }) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { isMobile } = useMobile();
  const { userState, currentUser } = useUser();
  const [initialValues, setInitialValues] = useState({
    type: isEdit ? postData.status : "Lost",
    name: isEdit ? postData.name : "",
    gender: isEdit ? postData.gender : "",
    summary: isEdit ? postData.summary : "",
    description: isEdit ? postData.description : "",
    location: isEdit ? postData.lastKnownLocation : "",
    species: isEdit ? postData.species : "",
    phoneNumber: isEdit
      ? postData.user?.phone
      : currentUser?.phones
      ? currentUser.phone
      : "",
    email: isEdit
      ? postData.user?.email
      : currentUser?.email
      ? currentUser.email
      : "",
    images: isEdit ? postData.images : [],
  });

  useEffect(() => {
    setInitialValues(prevValues => ({
      ...prevValues,
      phoneNumber: isEdit
        ? postData.user?.phone
        : currentUser?.phone
        ? currentUser.phone
        : "",
      email: isEdit
        ? postData.user?.email
        : currentUser?.email
        ? currentUser.email
        : "",
    }));
  }, [currentUser]);

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    gender: Yup.string().required("Gender is required"),
    summary: Yup.string().required("Summary is required"),
    description: Yup.string().required("Description is required"),
    location: Yup.object().required("Last known location is required"),
    species: Yup.string().required("Species is required"),
    phoneNumber: Yup.string().optional(),
    email: Yup.string().email("Invalid email").optional(),
    images: Yup.array()
      .min(1, "At least one image is required")
      .required("Images are required"),
  });

  return (
    <Container
      className="create-post-container"
      style={{
        overflowY: isMobile ? "scroll" : "hidden",
        marginBottom: 50,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        className="create-post-header"
      >
        <Grid item xs={12}>
          <div style={{ marginBottom: "10px" }}>
            <ArrowBackButton onClick={() => navigate(-1)} />
          </div>
          <div>
            <Typography variant="h2" fontWeight="bold" gutterBottom>
              {isEdit ? "Edit Post" : "Create Post"}
            </Typography>
            <Typography variant="subtitle1">
              {isEdit
                ? "Please modify the pet information below."
                : "Please enter the pet information below."}
            </Typography>
          </div>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
            enableReinitialize
          >
            {({ errors, touched, handleSubmit, setFieldValue, values }) => (
              <Form onSubmit={handleSubmit}>
                <Grid container spacing={theme.breakpoints.down("md") ? 4 : 6}>
                  <Grid item container xs={12} md={6} spacing={4}>
                    <Grid item xs={12}>
                      <FieldTitle title="Status" />
                      <Toggle
                        options={postTypeOptions}
                        onToggleCallback={(index) => {
                          setFieldValue("type", postTypeOptions[index].label)
                          if(index == 0 && values.name == "" || values.name == "Unknown") {
                            setFieldValue("name", "")
                          } else if(index == 1 && values.name == "" || values.name == "Unknown") {
                            setFieldValue("name", "Unknown")
                          }
                        }
                        }
                        containerWidth={"100%"}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Name" />
                      <CustomTextField
                        name="name"
                        variant="outlined"
                        className="textField"
                        error={errors.name && touched.name}
                        helperText={touched.name ? errors.name : ""}
                        value={values.name}
                        onChange={(event) => {
                          setFieldValue("name", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Gender" />
                      <CustomDropdown
                        options={genderOptions}
                        className="formControl"
                        error={errors.gender && touched.gender}
                        helperText={touched.gender ? errors.gender : ""}
                        value={values.gender}
                        onChange={(event) => {
                          setFieldValue("gender", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Summary" />
                      <CustomTextField
                        name="summary"
                        variant="outlined"
                        className="textField"
                        error={errors.summary && touched.summary}
                        helperText={touched.summary ? errors.summary : ""}
                        value={values.summary}
                        onChange={(event) => {
                          setFieldValue("summary", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Description" />
                      <CustomTextField
                        name="description"
                        variant="outlined"
                        multiline
                        rows={4}
                        className="textField"
                        error={errors.description && touched.description}
                        helperText={
                          touched.description ? errors.description : ""
                        }
                        value={values.description}
                        onChange={(event) => {
                          setFieldValue("description", event.target.value);
                        }}
                      />
                    </Grid>
                  </Grid>
                  <Grid item container xs={12} md={6} spacing={4}>
                    <Grid item xs={12}>
                      <FieldTitle title="Last Known Location" />
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
                      <FieldTitle title="Species" />
                      <CustomDropdown
                        options={speciesOptions}
                        className="formControl"
                        error={errors.species && touched.species}
                        helperText={touched.species ? errors.species : ""}
                        value={values.species}
                        onChange={(event) => {
                          setFieldValue("species", event.target.value);
                        }}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <FieldTitle title="Insert Picture(s)" />
                      <ImageUpload
                        images={values.images}
                        handleImageChange={(e) => {
                          const newImages = [
                            ...values.images,
                            ...e.target.files,
                          ];
                          setFieldValue("images", newImages);
                          e.target.value = null;
                        }}
                        handleRemoveImage={(index) => {
                          const updatedImages = [...values.images];
                          updatedImages.splice(index, 1);
                          setFieldValue("images", updatedImages);
                        }}
                        isSingle = {false}
                        error={errors.images && touched.images}
                        helperText={touched.images ? errors.images : ""}
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
                    <Grid item xs={12}>
                      <FieldTitle title="Email" />
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

export default CreatePostForm;
