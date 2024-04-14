import React from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import FormHelperText from "@mui/material/FormHelperText";
import "./ImageUpload.css";

const ImageUpload = ({
  images,
  handleImageChange,
  handleRemoveImage,
  isSingle = false,
  ...otherProps
}) => {
  return (
    <>
      <div className="images-container">
        <div className="images-wrapper">
          {images.map((image, index) => (
            <div key={index} className="image-container">
              <img
                src={image instanceof File ? URL.createObjectURL(image) : image}
                className="image-preview"
                alt={`Preview ${index}`}
              />
              <button
                className="delete-button"
                onClick={() => handleRemoveImage(index)}
              >
                <RemoveCircleIcon sx={{ stroke: "#ffffff", strokeWidth: 1 }} />
              </button>
            </div>
          ))}
        </div>
        <label
          htmlFor="file-upload"
          className="choose-files-button"
          style={images.length != 0 ? { marginLeft: "auto" } : {}}
        >
          {isSingle ? 'Select Photo' : 'Select Photo(s)'}
          <input
            id="file-upload"
            type="file"
            accept="image/*"
            multiple="multiple"
            onChange={handleImageChange}
            className="input-hidden"
          />
        </label>
      </div>
      {otherProps.error && (
        <FormHelperText htmlFor="render-select" error>
          {otherProps.helperText}
        </FormHelperText>
      )}
    </>
  );
};

export default ImageUpload;
