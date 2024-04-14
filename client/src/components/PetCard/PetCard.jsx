import React, { useState } from "react";
import {
  Typography,
  Stack,
  Grid,
  Card,
  CardMedia,
  Box,
  Button,
  useMediaQuery,
} from "@mui/material";
import theme from "../../theme/theme";
import { useMobile } from "../../context/MobileContext";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useLocation, useNavigate } from "react-router-dom";
import ConfirmDialog from "../ConfirmDialog/ConfirmDialog";
import StatusLabel from "../StatusLabel/StatusLabel";
import { useUser } from "../../context/UserContext";
import "./PetCard.css";

const PetCard = ({
  id,
  userId,
  img,
  name,
  summary,
  status,
  petType,
  location,
  createdAt,
  updatedAt,
  resolved,
  onDelete,
  onResolve,
}) => {
  const { isMobile } = useMobile();
  const { userState, currentUser } = useUser();
  const navigate = useNavigate();
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [openConfirmResolve, setOpenConfirmResolve] = useState(false);
  const { pathname } = useLocation();

  const handleClickOpen = () => {
    navigate(`/posts/${id}`);
  };

  const handleDeleteConfirmed = (event, id) => {
    event.stopPropagation();
    onDelete(id);
    setOpenConfirmDelete(false);
  };

  const handleResolveConfirmed = (event, id) => {
    event.stopPropagation();
    onResolve(id);
    setOpenConfirmResolve(false);
  };

  return (
    <Card
      sx={{
        display: "flex",
        width: "95%",
        margin: "1rem auto",
        "&:hover": {
          cursor: "pointer",
        },
      }}
      onClick={handleClickOpen}
    >
      <CardMedia
        component="img"
        sx={{ width: isMobile ? 100 : 150 }}
        image={img}
        alt="pet-picture"
      />
      <Grid
        container
        sx={{ flexDirection: "column", margin: "1rem" }}
        item
        zeroMinWidth
        gap={1}
      >
        <Grid item xs zeroMinWidth>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "1rem",
            }}
          >
            <Typography
              variant={small ? "h7" : "h6"}
              fontWeight={"bold"}
              noWrap
            >
              {name}
            </Typography>
            {(userId === currentUser?.id || userState === "Admin") &&
              pathname !== "/viewReportings" && (
                <Grid>
                  <Button
                    size={small ? "small" : "medium"}
                    variant="contained"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenConfirmResolve(true);
                    }}
                    sx={{
                      backgroundColor: theme.palette.custom.greyBkg.tag,
                      borderRadius: 2,
                      color: "#000",
                      marginRight: "8px",
                    }}
                    startIcon={<CheckIcon />}
                    disabled={resolved === "true"}
                  >
                    {isMobile ? "" : "Mark as resolved"}
                  </Button>
                  <Button
                    size={small ? "small" : "medium"}
                    variant="contained"
                    color="error"
                    onClick={(event) => {
                      event.stopPropagation();
                      setOpenConfirmDelete(true);
                    }}
                    sx={{
                      borderRadius: 2,
                    }}
                    startIcon={<DeleteIcon />}
                  >
                    {isMobile ? "" : "Delete"}
                  </Button>
                </Grid>
              )}
          </Box>
          <Stack
            direction="row"
            sx={{
              overflow: "auto",
              gap: 1,
              width: "90%",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <StatusLabel status={status} />
            <StatusLabel status={petType} />
          </Stack>
          <Typography noWrap variant="subtitle1">
            {summary}
          </Typography>
        </Grid>
        <Grid item xs zeroMinWidth>
          <Typography fontWeight={"bold"} noWrap variant="subtitle2">
            {location}
          </Typography>
        </Grid>
        <Grid
          item
          xs
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            marginRight: "1rem",
          }}
        >
          <Typography variant="subtitle2" color="#979797">
            {`Posted: ${createdAt.split("T")[0]} - Updated: ${
              updatedAt.split("T")[0]
            }`}
          </Typography>
        </Grid>
      </Grid>
      {/* Use the ConfirmDialog for delete confirmation */}
      <ConfirmDialog
        open={openConfirmDelete}
        onClose={(event) => {
          event.stopPropagation();
          setOpenConfirmDelete(false);
        }}
        onConfirm={(event) => handleDeleteConfirmed(event, id)}
        title="Are you sure you want to delete this post?"
        isDelete={true}
      />

      {/* Use the ConfirmDialog for ignore confirmation */}
      <ConfirmDialog
        open={openConfirmResolve}
        onClose={(event) => {
          event.stopPropagation();
          setOpenConfirmResolve(false);
        }}
        onConfirm={(event) => handleResolveConfirmed(event, id)}
        title="Are you sure you want to mark this post as resolved?"
        isDelete={false}
      />
    </Card>
  );
};

export default PetCard;
