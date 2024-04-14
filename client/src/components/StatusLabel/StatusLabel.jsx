import React from "react";
import { Grid, Typography, Chip } from "@mui/material";
import theme from '../../theme/theme';

const StatusLabel = ({ status }) => {
  let backgroundColor;

  switch (status) {
    case "LOST":
      backgroundColor = theme.palette.custom.selectedCategory.lost.dark;
      break;
    case "FOUND":
      backgroundColor = theme.palette.custom.selectedCategory.found.dark;
      break;
    default:
      backgroundColor = theme.palette.custom.greyBkg.tag;
  }

  return (
    <Chip
      label={status}
      sx={{
        width: "fit-content",
        backgroundColor: backgroundColor,
        borderRadius: 2,
        padding: '0px 3px'
      }}
    />
  );
};

export default StatusLabel;
