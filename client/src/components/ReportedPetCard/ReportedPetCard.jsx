import React, { useState } from "react";
import { Box, Typography, Button, useTheme } from "@mui/material";
import PetCard from "../PetCard/PetCard";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

const ReportedPetCard = ({ petData, report, onDelete, onIgnore }) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmIgnore, setOpenConfirmIgnore] = useState(false);
  const theme = useTheme();

  const handleDeleteConfirmed = () => {
    onDelete(petData.id);
    setOpenConfirmDelete(false);
  };

  const handleIgnoreConfirmed = () => {
    onIgnore(petData.id);
    setOpenConfirmIgnore(false);
  };

  return (
    <Box
      sx={{
        margin: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        padding: "10px",
        backgroundColor: "#f9f9f9",
        width: "95%",
      }}
    >
      <Box sx={{ marginBottom: "10px" }}>
        <PetCard
          id={petData.id}
          userId={petData.userID}
          owner={false}
          img={petData.firstImg}
          name={petData.name}
          status={petData.status}
          petType={petData.species}
          summary={petData.summary}
          location={petData.lastKnownLocation.address}
          createdAt={petData.createdAt}
          updatedAt={petData.updatedAt}
        />
      </Box>
      <Box sx={{ borderTop: "1px solid #eee", padding: "16px" }}>
        <Typography variant="h2" fontWeight="bold" sx={{ marginBottom: "8px" }}>
          Report Description
        </Typography>
        <Typography sx={{ marginBottom: "10px" }}>
          Report Reason: {report.reason}
        </Typography>
        <Typography sx={{ marginBottom: "16px" }}>
          Report Descriptions: {report.description}
        </Typography>

        {/* Button container */}
        <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="contained"
            color="error"
            onClick={() => setOpenConfirmDelete(true)}
            startIcon={<DeleteIcon />}
            sx={{ marginRight: "8px" }}
          >
            Delete
          </Button>
          <Button
            variant="contained"
            startIcon={<NotInterestedIcon />}
            onClick={() => setOpenConfirmIgnore(true)}
          >
            Ignore
          </Button>
        </Box>
      </Box>

      <ConfirmDialog
        open={openConfirmDelete}
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={handleDeleteConfirmed}
        title="Are you sure you want to delete this post?"
      />

      <ConfirmDialog
        open={openConfirmIgnore}
        onClose={() => setOpenConfirmIgnore(false)}
        onConfirm={handleIgnoreConfirmed}
        title="Are you sure you want to mark this report as ignored?"
      />
    </Box>
  );
};

export default ReportedPetCard;
