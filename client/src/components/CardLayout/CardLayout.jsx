import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import PawLogo from "../../sharedStyles/PawLogo.png";
import ArrowBackButton from "../ArrowBackButton/ArrowBackButton";
import "./CardLayout.css";

const CardLayout = ({ title, children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const renderCardContent = () => (
    <div style={{ height: "100%", width: "100%" }}>
      <div className="back-button-container">
        <ArrowBackButton />
      </div>
      <div className="content">
        <div className="header">
          <Link to="/" className="logo">
            <img src={PawLogo} alt="Logo" />
            <span>LostAndFoundPaws</span>
          </Link>
        </div>
        <div className="card-content">
          <div className="title-with-line">
            <Typography
              variant="h5"
              align="center"
              fontWeight="bold"
              gutterBottom
              className="title"
            >
              {title}
            </Typography>
            <div className="line" />
          </div>
          {children}
        </div>
      </div>
    </div>
  );

  return (
    <div className="card-container">
      {isSmallScreen ? (
        renderCardContent()
      ) : (
        <Card
          sx={{
            display: "flex",
            justifyContent: "center",
            maxHeight: "90vh",
            height: "fit-content",
            maxWidth: 600,
            padding: 5,
          }}
        >
          {renderCardContent()}
        </Card>
      )}
    </div>
  );
};

export default CardLayout;
