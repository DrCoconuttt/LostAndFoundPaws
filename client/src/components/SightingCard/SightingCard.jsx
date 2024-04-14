import React, { useState } from "react";
import {
  Typography,
  Card,
  CardMedia,
  Box,
  ButtonBase,
  useMediaQuery,
} from "@mui/material";
import { useMobile } from "../../context/MobileContext";
import SightingDialog from "../SightingDialog/SightingDialog";
import theme from "../../theme/theme";

const SightingCard = ({
  id,
  userId,
  img,
  location,
  email,
  phoneNumber,
  createdAt,
  resolved,
  onDelete,
  onResolve
}) => {
  const { isMobile } = useMobile();
  const [isCardOpen, setIsCardOpen] = useState(false);
  const small = useMediaQuery(theme.breakpoints.down("sm"));

  const handleClickOpen = () => {
    setIsCardOpen(true);
  };

  return (
    <div>
      <ButtonBase onClick={handleClickOpen}>
        <Card
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: isMobile ? "1rem" : "1rem 2rem",
            width: isMobile ? "300px" : "350px",
            height: "350px",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "100%", height: "250px" }}
            image={img}
            alt="sighting-picture"
          />
          <Box sx={{ padding: "1rem", marginTop: "10px" }}>
            <Typography
              variant={small ? "h7" : "h6"}
              fontWeight={"bold"}
              component="div"
              sx={{
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {location}
            </Typography>
            <Typography variant="subtitle2" color="#979797">
              Posted: {createdAt.split("T")[0]}
            </Typography>
          </Box>
        </Card>
      </ButtonBase>

      <SightingDialog
        id={id}
        userId={userId}
        img={img}
        location={location}
        resolved={resolved}
        email={email}
        phoneNumber={phoneNumber}
        createdAt={createdAt}
        onDelete={onDelete}
        onResolve={onResolve}
        isCardOpen={isCardOpen}
        setIsCardOpen={setIsCardOpen}
      />
    </div>
  );
};

export default SightingCard;
