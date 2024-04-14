import React, { useState } from "react";
import theme from "../../theme/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import Toggle from "../../components/Toggle/Toggle";
import MapView from "../MapView/MapView";
import ReportView from "../ReportView/ReportView";
import { useMobile } from "../../context/MobileContext";
import TuneIcon from "@mui/icons-material/Tune";
import SideBar from "../../components/SideBar/SideBar";

const postTypeOptions = [
  { label: "Lost", color: theme.palette.custom.selectedCategory.lost.light },
  { label: "Found", color: theme.palette.custom.selectedCategory.found.light },
  {
    label: "Sighting",
    color: theme.palette.custom.selectedCategory.sighting.light,
  },
  { label: "Comments", color: theme.palette.custom.selectedCategory.view },
];

const ViewReportsPage = () => {
  const { isMobile } = useMobile();
  const [selectedType, setSelectedType] = useState("Lost");
  const [selectedView, setSelectedView] = useState("List View");
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [filterPosts, setFilterPosts] = useState(null);
  const [filterSightings, setFilterSightings] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [tempSearchTerm, setTempSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("Newest Updated");
  const [species, setSpecies] = useState({
    dog: false,
    cat: false,
    other: false,
  });
  const [gender, setGender] = useState({
    male: false,
    female: false,
    unknown: false,
  });
  const [locationAway, setLocationAway] = useState(1);
  const [disableLocationFilter, setDisableLocationFilter] = useState(true);
  const [reportReason, setReportReason] = useState({
    inappropriate: false,
    spam: false,
    other: false,
  });
  const [applyClicked, setApplyClicked] = useState(false);
  const [isReporting, setIsReporting] = useState(true);

  const toggleSideBar = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  const handlePostTypeToggle = (index) => {
    setSelectedType(postTypeOptions[index].label);
  };

  return (
    <div>
      {isMobile && selectedView === "List View" ? (
        <Grid
          container
          item
          xs={12}
          flexDirection={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          spacing={2}
        >
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{
              order: { xs: 2, sm: 1 },
              marginLeft: "30px",
              marginRight: "30px",
            }}
          >
            <Toggle
              options={postTypeOptions}
              onToggleCallback={handlePostTypeToggle}
            />
          </Grid>
          <Grid
            item
            xs={12}
            sm="auto"
            sx={{
              order: { xs: 1, sm: 2 },
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: `${theme.palette.custom.greyBkg.tag}`,
                color: `${theme.palette.text.primary}`,
                "&:hover": {
                  backgroundColor: `${theme.palette.primary.main}`,
                },
                height: "30px",
                marginRight: "30px",
                marginTop: { xs: "1rem", sm: "0" },
              }}
              onClick={toggleSideBar}
            >
              <TuneIcon />
              <Typography>
                {isSideBarOpen ? "Close Filters" : "All Filters"}
              </Typography>
            </Button>
            {isSideBarOpen && (
              <SideBar
                selectedView={selectedView}
                selectedType={selectedType}
                onClose={() => setIsSideBarOpen(false)}
                filterPosts={filterPosts}
                setFilterPosts={setFilterPosts}
                filterSightings={filterSightings}
                setFilterSightings={setFilterSightings}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                tempSearchTerm={tempSearchTerm}
                setTempSearchTerm={setTempSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                species={species}
                setSpecies={setSpecies}
                gender={gender}
                setGender={setGender}
                locationAway={locationAway}
                setLocationAway={setLocationAway}
                disableLocationFilter={disableLocationFilter}
                setDisableLocationFilter={setDisableLocationFilter}
                reportReason={reportReason}
                setReportReason={setReportReason}
                isReporting={isReporting}
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            )}
          </Grid>
        </Grid>
      ) : !isMobile && selectedView === "List View" ? (
        <Grid container item xs={12} justifyContent="space-between" marginTop={2}>
          <Grid item xs={5} md={4} marginRight={3} marginLeft={"16px"}>
            <Toggle
              options={postTypeOptions}
              onToggleCallback={handlePostTypeToggle}
              containerWidth={"100%"}
            />
          </Grid>
          <Grid marginRight={4}>
            {!isSideBarOpen && (
              <Button
                variant="contained"
                sx={{
                  backgroundColor: `${theme.palette.custom.greyBkg.tag}`,
                  color: `${theme.palette.text.primary}`,
                  "&:hover": {
                    backgroundColor: `${theme.palette.primary.main}`,
                  },
                  height: "30px",
                  marginRight: "1rem",
                }}
                onClick={() => setIsSideBarOpen(true)}
              >
                <TuneIcon />
                <Typography>All Filters</Typography>
              </Button>
            )}
            {isSideBarOpen && (
              <SideBar
                selectedView={selectedView}
                selectedType={selectedType}
                onClose={() => setIsSideBarOpen(false)}
                filterPosts={filterPosts}
                setFilterPosts={setFilterPosts}
                filterSightings={filterSightings}
                setFilterSightings={setFilterSightings}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
                tempSearchTerm={tempSearchTerm}
                setTempSearchTerm={setTempSearchTerm}
                sortBy={sortBy}
                setSortBy={setSortBy}
                species={species}
                setSpecies={setSpecies}
                gender={gender}
                setGender={setGender}
                locationAway={locationAway}
                setLocationAway={setLocationAway}
                disableLocationFilter={disableLocationFilter}
                setDisableLocationFilter={setDisableLocationFilter}
                reportReason={reportReason}
                setReportReason={setReportReason}
                isReporting={isReporting}
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            )}
          </Grid>
        </Grid>
      ) : null}
      {selectedView === "List View" ? (
        <Box
          className="list-view"
          style={{
            margin: "1rem",
            width: isSideBarOpen && !isMobile ? "calc(100vw - 440px)" : "auto",
          }}
        >
          <ReportView
            selectedType={selectedType}
            reportReason={reportReason}
            sortBy={sortBy}
            applyClicked={applyClicked}
          />
        </Box>
      ) : (
        <MapView
          selectedType={selectedType}
          filterPosts={filterPosts}
          filterSightings={filterSightings}
          applyClicked={applyClicked}
        />
      )}
    </div>
  );
};

export default ViewReportsPage;
