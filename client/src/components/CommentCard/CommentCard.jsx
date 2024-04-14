import { PersonOutline } from "@mui/icons-material";
import {
  Avatar,
  Box,
  IconButton,
  Typography,
  Button,
  TextField,
  useMediaQuery,
} from "@mui/material";
import React, { useState, useEffect } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import theme from "../../theme/theme";
import EditIcon from "@mui/icons-material/Edit";
import ReplyIcon from "@mui/icons-material/Reply";
import FlagIcon from "@mui/icons-material/Flag";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import CheckIcon from "@mui/icons-material/Check";
import "./CommentCard.css";
import ReportEntity from "../ReportPopup/ReportPopup";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import ToastNotification from "../ToastNotification/ToastNotificaiton";
import { useUser } from "../../context/UserContext";
import { downloadData } from "@aws-amplify/storage";
import { useLocation } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const CommentCard = ({
  id,
  userId,
  userProfilePicture,
  username,
  createdAt,
  updatedAt,
  content,
  parentCommentId,
  setReply,
  onDelete,
}) => {
  const { userState, currentUser } = useUser();
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }

  const [commentProfilePicture, setCommentProfilePicture] = useState("");

  const [commentContent, setCommentContent] = useState(content);
  const [updatedDateContent, setUpdatedDateContent] = useState(updatedAt);
  const [expandedComment, setExpandedComment] = useState(false);
  const [editing, setEditing] = useState(false);
  const [editedContent, setEditedContent] = useState(content);
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const [openDelete, setOpenDelete] = useState(false);
  const handleOpenDelete = () => setOpenDelete(true);
  const handleCloseDelete = () => setOpenDelete(false);
  const [isReportModalOpen, setIsReportModalOpen] = useState(false);

  const [openSave, setOpenSave] = useState(false);
  const handleOpenSave = () => setOpenSave(true);
  const handleCloseSave = () => setOpenSave(false);

  const [parentCommentUsername, setParentCommentUsername] = useState("");
  const [parentCommentContent, setParentCommentContent] = useState("");

  const [toastOpen, setToastOpen] = React.useState(false);
  const [toastSeverity, setToastSeverity] = React.useState("success");
  const [toastMessage, setToastMessage] = React.useState("");

  const { pathname } = useLocation();

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = (event, reason) => {
    setToastOpen(false);
  };

  const handleEdit = (e) => {
    setEditedContent(e.target.value);
  };

  const handleReportSubmitted = () => {
    handleToastOpen("success", "Report submitted successfully.");
    setTimeout(() => {
      setToastOpen(false);
    }, 2000);
  };

  useEffect(() => {
    const fetchProfilePicture = async () => {
      try {
        const imageData = await downloadData({ key: userProfilePicture })
          .result;
        const imageSrc = URL.createObjectURL(imageData.body);
        setCommentProfilePicture(imageSrc);
      } catch (error) {
        console.error("Error fetching comment profile picture ", error);
      }
    };
    const fetchParentComment = async () => {
      try {
        const commentResponse = await client.graphql({
          query: queries.getComment,
          variables: { id: parentCommentId },
        });
        const parentComment = commentResponse.data.getComment;
        if (parentComment) {
          setParentCommentContent(parentComment.content);
          setParentCommentUsername(parentComment.user.username);
        }
      } catch (error) {
        console.error(
          "Error fetching parent comment, parent comment might have been deleted: ",
          error
        );
      }
    };
    if (userProfilePicture) {
      fetchProfilePicture();
    }
    if (parentCommentId) {
      fetchParentComment();
    }
  }, []);

  const handleConfirmDelete = async () => {
    onDelete(id);
    handleCloseDelete();
  };

  const handleConfirmSave = async () => {
    const updateCommentInput = {
      id: id,
      content: editedContent,
    };
    try {
      const updatedComment = await client.graphql({
        query: mutations.updateComment,
        variables: { input: updateCommentInput },
      });
      handleToastOpen("success", "Successfully updated comment.");
      setCommentContent(updatedComment.data.updateComment.content);
      setEditedContent(updatedComment.data.updateComment.content);
      const now = new Date();
      setUpdatedDateContent(now.toISOString());
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error updating comment.");
      console.error("Error Updating comment: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setEditing(false);
    handleCloseSave();
  };

  return (
    <Box
      sx={{
        backgroundColor: `${theme.palette.custom.greyBkg.comment.bkg}`,
        padding: "7px",
        width: "95%",
        margin: "1rem auto",
        gridTemplateColumns: small ? "30% 70%" : "15% 85%",
        borderRadius: "1rem",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100px",
        display: "grid",
        gap: "1rem",
      }}
    >
      <IconButton disabled>
        {commentProfilePicture !== "" ? (
          <Avatar
            sx={{
              width: "50px",
              height: "50px",
            }}
            src={commentProfilePicture}
          ></Avatar>
        ) : (
          <AccountCircleIcon
            sx={{
              width: "50px",
              height: "50px",
              color: "black",
            }}
          />
        )}
      </IconButton>
      <Box className="comment-info">
        <Box className="comment-topbar">
          <Typography variant="h7" noWrap>
            {username ? username : "Unavailable"}
          </Typography>
          <Typography variant="subtitle2" color="#979797">
            Posted: {createdAt ? createdAt.split("T")[0] : "Unavailable"} -
            Updated:{" "}
            {updatedDateContent
              ? updatedDateContent.split("T")[0]
              : "Unavailable"}
          </Typography>
        </Box>
        <Box
          className="comment-content"
          style={{ color: `${theme.palette.custom.greyBkg.comment.content}` }}
        >
          {parentCommentContent && parentCommentUsername && (
            <Typography color={`${theme.palette.primary.main}`} noWrap>
              {`@${parentCommentUsername} ${parentCommentContent}`}
            </Typography>
          )}
          {editing ? (
            <TextField
              multiline
              placeholder="Write your comment here"
              rows={3}
              sx={{
                width: "100%",
                margin: "1rem",
              }}
              value={editedContent}
              onChange={handleEdit}
            />
          ) : (
            <Typography variant="subtitle2">
              {expandedComment
                ? commentContent
                : commentContent.length > 150
                ? commentContent.slice(0, 75) + "..."
                : commentContent}
              {commentContent.length > 150 && (
                <Button
                  variant="text"
                  sx={{ color: `${theme.palette.text.primary}` }}
                  onClick={() => setExpandedComment(!expandedComment)}
                  size="small"
                >
                  {expandedComment ? "Show less" : "Show more"}
                </Button>
              )}
            </Typography>
          )}
        </Box>
        <Box className="comment-actions">
          {(userState === "Admin" || currentUser?.id === userId) &&
          pathname !== "/viewReportings" ? (
            <>
              <Button
                variant="text"
                sx={{ color: `${theme.palette.text.primary}` }}
                onClick={() => {
                  setEditedContent(commentContent); // Reset editedContent to original content
                  setEditing(!editing);
                }}
                size="small"
              >
                {editing ? (
                  <>
                    <HighlightOffIcon />
                    <Typography variant="h9">Cancel</Typography>
                  </>
                ) : (
                  <>
                    <EditIcon />
                    <Typography variant="h9">Edit</Typography>
                  </>
                )}
              </Button>
              {editing && (
                <Button
                  variant="text"
                  sx={{ color: `${theme.palette.text.primary}` }}
                  onClick={handleOpenSave}
                >
                  <CheckIcon />
                  <Typography variant="h9">Save</Typography>
                </Button>
              )}
              <Button
                variant="text"
                sx={{ color: `${theme.palette.secondary.main}` }}
                onClick={handleOpenDelete}
              >
                <DeleteIcon />
                <Typography variant="h9">Delete</Typography>
              </Button>
              {pathname !== "/myPostsAndComments" && (
                <Button
                  variant="text"
                  sx={{
                    color: `${theme.palette.text.primary}`,
                    display: "flex",
                    alignItems: "center",
                  }}
                  onClick={() => {
                    if (username) {
                      setReply(id);
                    } else {
                      handleToastOpen("error", "Can't reply to a deleted user");
                      setTimeout(() => {
                        setToastOpen(false);
                      }, 2000);
                    }
                  }}
                  size="small"
                >
                  <ReplyIcon />
                  <Typography variant="h9">Reply</Typography>
                </Button>
              )}
            </>
          ) : (
            userState !== "Guest" &&
            pathname !== "/viewReportings" && (
              <>
                <Button
                  variant="text"
                  sx={{ color: `${theme.palette.text.primary}` }}
                  onClick={() => {
                    if (username) {
                      setReply(id);
                    } else {
                      handleToastOpen("error", "Can't reply to a deleted user");
                      setTimeout(() => {
                        setToastOpen(false);
                      }, 2000);
                    }
                  }}
                  size="small"
                >
                  <ReplyIcon />
                  <Typography variant="h9">Reply</Typography>
                </Button>
              </>
            )
          )}
              {(userState !== "Admin" && currentUser?.id !== userId) &&
                <Button
                  variant="text"
                  sx={{ color: `${theme.palette.text.primary}` }}
                  onClick={() => setIsReportModalOpen(true)}
                  size="small"
                >
                  <FlagIcon />
                  <Typography variant="h9">Report</Typography>
                </Button>
              }
        </Box>
      </Box>
      <ConfirmDialog
        open={openDelete}
        onClose={handleCloseDelete}
        onConfirm={handleConfirmDelete}
        title="Are you sure you want to delete this comment?"
      />
      <ConfirmDialog
        open={openSave}
        onClose={handleCloseSave}
        onConfirm={handleConfirmSave}
        title="Are you sure you want to save this comment change?"
      />
      {isReportModalOpen && (
        <ReportEntity
          contentType="comment"
          itemId={id}
          userId={currentUser?.id}
          onClose={() => setIsReportModalOpen(false)}
          onReport={handleReportSubmitted}
        />
      )}
      <ToastNotification
        open={toastOpen}
        severity={toastSeverity}
        message={toastMessage}
        handleClose={handleToastClose}
      />
    </Box>
  );
};

export default CommentCard;
