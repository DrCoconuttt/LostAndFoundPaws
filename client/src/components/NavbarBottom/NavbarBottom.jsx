import React from 'react';
import Button from '@mui/material/Button';
import { useMobile } from '../../context/MobileContext';
import { useUser } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';
import './NavbarBottom.css';

const NavbarBottom = () => {
  const navigate = useNavigate();
  const { userState } = useUser();
  const { isMobile } = useMobile();

  if (!isMobile) {
    return null;
  }
  
  return (
    <div>
      {userState === "Admin" ? (
        <div className="navbarBottom">
          <Button variant="contained" onClick={() => navigate("/viewReportings")}>View Reportings</Button> 
        </div>
      ) : userState === "Guest" ? (
        <div className="navbarBottom">
          <Button variant="outlined" onClick={() => navigate("/createSighting")}>Report Sighting</Button>
        </div>
      ) : (
        <div className="navbarBottom">
          <Button variant="outlined" onClick={() => navigate("/createSighting")}>Report Sighting</Button>
          <Button variant="contained" onClick={() => navigate("/createPost")}>Report Pet</Button>
        </div>
      )}
    </div>
  );
};

export default NavbarBottom;