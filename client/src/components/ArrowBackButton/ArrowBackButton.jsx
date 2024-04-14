import React from 'react';
import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const ArrowBackButton = ({ onClick }) => {
  return (
    <IconButton
      onClick={onClick}
      aria-label="back"
      style={{ backgroundColor: '#D9D9D9', padding: 5 }}
      size="large"
    >
      <ArrowBackIcon style={{ color: 'black' }} />
    </IconButton>
  );
};

export default ArrowBackButton;
