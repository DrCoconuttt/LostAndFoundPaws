import React from "react";
import TextField from "@mui/material/TextField";

const CustomTextField = ({ name, InputProps, customInputProps, ...otherProps }) => {
  const mergedInputProps = {
    ...InputProps,
    ...customInputProps,
    style: {
      ...(InputProps ? InputProps.style : {}),
      ...(customInputProps ? customInputProps.style : {}),
      backgroundColor: "#F5F5F5",
      color: "#979797",
      borderRadius: "10px",
    },
  };

  return (
    <TextField
      name={name}
      variant="outlined"
      className="textField"
      InputProps={mergedInputProps}
      {...otherProps}
      InputLabelProps={{ shrink: true }}
    />
  );
};

export default CustomTextField;
