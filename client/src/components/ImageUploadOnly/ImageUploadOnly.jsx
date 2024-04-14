import React, { forwardRef, useImperativeHandle, useRef } from 'react';

//UploadImageOnly only uploads images, without anything else
const ImageUploadOnly = forwardRef(({ onFileSelectSuccess, onFileSelectError }, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    click: () => {
      inputRef.current.click();
    },
  }));

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (!file) {
      if (onFileSelectError) {
        onFileSelectError("No file selected");
      }
    } else {
      if (onFileSelectSuccess) {
        onFileSelectSuccess(file);
      }
    }
  };

  return (
    <input
      type="file"
      onChange={handleFileInput}
      accept="image/*"
      style={{ display: 'none' }}
      ref={inputRef}
    />
  );
});

export default ImageUploadOnly;