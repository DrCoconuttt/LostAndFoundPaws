import React, { useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import CommentCard from "../CommentCard/CommentCard";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import DeleteIcon from "@mui/icons-material/Delete";
import NotInterestedIcon from "@mui/icons-material/NotInterested";

const ReportedCommentCard = ({ commentData, report, onDelete, onIgnore }) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmIgnore, setOpenConfirmIgnore] = useState(false);

  const handleDeleteConfirmed = () => {
    onDelete(commentData.id, report.id);
    setOpenConfirmDelete(false);
  };

  const handleIgnoreConfirmed = () => {
    onIgnore(report.id);
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
        {commentData == null ? (
          <h3>Comment Deleted</h3>
        ) : (
          <CommentCard {...commentData} isReportView={true} />
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
          Report Description: {report.description}
        </Typography>
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
        title="Are you sure you want to delete this comment and report?"
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

export default ReportedCommentCard;
