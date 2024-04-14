import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import SightingCard from "../SightingCard/SightingCard";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import NotInterestedIcon from "@mui/icons-material/NotInterested";
import { getSightingEmail, getSightingPhoneNumber } from "../../utils/utils";
import { useMobile } from "../../context/MobileContext";

const ReportedSightingCard = ({
  sightingData,
  report,
  onDelete,
  onIgnore,
  onResolve,
}) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmIgnore, setOpenConfirmIgnore] = useState(false);
  const { isMobile } = useMobile();

  const handleDeleteConfirmed = () => {
    onDelete(sightingData.id, report.id);
    setOpenConfirmDelete(false); // Close the dialog
  };

  const handleIgnoreConfirmed = () => {
    onIgnore(report.id);
    setOpenConfirmIgnore(false); // Close the dialog
  };

  return (
    <Box
      sx={{
        margin: "16px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9",
        width: "auto",
      }}
    >
      <Box sx={{ marginBottom: "10px" }}>
        {sightingData == null ? (
          <h3>Sighting Deleted</h3>
        ) : (
          <SightingCard
            owner={false}
            id={sightingData.id}
            userId={sightingData.userId}
            img={sightingData.img}
            location={sightingData.location.address}
            email={getSightingEmail(sightingData)}
            phoneNumber={getSightingPhoneNumber(sightingData)}
            createdAt={sightingData.createdAt}
            resolved={sightingData.resolved}
            onDelete={onDelete}
            onResolve={onResolve}
          />
        )}
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

      {/* Use the ConfirmDialog for delete confirmation */}
      <ConfirmDialog
        open={openConfirmDelete}
        onClose={() => setOpenConfirmDelete(false)}
        onConfirm={handleDeleteConfirmed}
        title="Are you sure you want to delete this sighting post and report?"
      />

      {/* Use the ConfirmDialog for ignore confirmation */}
      <ConfirmDialog
        open={openConfirmIgnore}
        onClose={() => setOpenConfirmIgnore(false)}
        onConfirm={handleIgnoreConfirmed}
        title="Are you sure you want to mark this report as ignored?"
      />
    </Box>
  );
};

export default ReportedSightingCard;
