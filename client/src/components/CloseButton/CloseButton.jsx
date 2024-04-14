import React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from "@mui/icons-material/Close";

const CloseButton = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="close"
      style={{ backgroundColor: '#D9D9D9', padding: 5 }}
      size="large"
    >
      <CloseIcon style={{ color: 'black' }} />
    </IconButton>
  );
};

export default CloseButton;
