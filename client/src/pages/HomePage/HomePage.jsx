import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import theme from "../../theme/theme";
import { Box, Button, Grid, Typography } from "@mui/material";
import Toggle from "../../components/Toggle/Toggle";
import MapView from "../MapView/MapView";
import ListView from "../ListView/ListView";
import MapIcon from "@mui/icons-material/Map";
import ListIcon from "@mui/icons-material/List";
import { useMobile } from "../../context/MobileContext";
import TuneIcon from "@mui/icons-material/Tune";
import SideBar from "../../components/SideBar/SideBar";
import "./HomePage.css";
import AddressAutocompleteField from "../../components/AddressAutocompleteField/AddressAutocompleteField";

const mapPostTypeOptions = [
  { label: "All", color: theme.palette.custom.selectedCategory.view },
  { label: "Lost", color: theme.palette.custom.selectedCategory.lost.light },
  { label: "Found", color: theme.palette.custom.selectedCategory.found.light },
  {
    label: "Sighting",
    color: theme.palette.custom.selectedCategory.sighting.light,
  },
];

const listPostTypeOptions = [
  { label: "Lost", color: theme.palette.custom.selectedCategory.lost.light },
  { label: "Found", color: theme.palette.custom.selectedCategory.found.light },
  {
    label: "Sighting",
    color: theme.palette.custom.selectedCategory.sighting.light,
  },
];

const viewOptions = [
  {
    label: "List View",
    icon: <ListIcon />,
    color: theme.palette.custom.selectedCategory.view,
  },
  {
    label: "Map View",
    icon: <MapIcon />,
    color: theme.palette.custom.selectedCategory.view,
  },
];

const HomePageTemp = () => {
  const { isMobile } = useMobile();
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [filterPosts, setFilterPosts] = useState(null);
  const [filterSightings, setFilterSightings] = useState(null);
  const [searchTerm, setSearchTerm] = useState({});
  const [tempSearchTerm, setTempSearchTerm] = useState({});
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

  const location = useLocation();
  const initialSelectedType = location.state?.selectedType || "Lost";

  const [selectedView, setSelectedView] = useState("List View");
  const [selectedType, setSelectedType] = useState(
    selectedView === "List View" ? initialSelectedType : "All"
  );
  const initialIndex =
    initialSelectedType === "Found"
      ? 1
      : initialSelectedType === "Sighting"
      ? 2
      : 0;

  const [postTypeOptions, setPostTypeOptions] = useState(
    selectedView === "List View" ? listPostTypeOptions : mapPostTypeOptions
  );

  const handlePostTypeToggle = (index) => {
    setSelectedType(postTypeOptions[index].label);
  };

  const handleViewToggle = (index) => {
    setSelectedView(viewOptions[index].label);
    setPostTypeOptions(
      viewOptions[index].label === "List View"
        ? listPostTypeOptions
        : mapPostTypeOptions
    );
    setSelectedType(viewOptions[index].label === "List View" ? "Lost" : "All");
  };

  return (
    <div>
      {selectedView === "List View" ? (
        <Grid
          container
          item
          xs={12}
          justifyContent={isSideBarOpen ? "flex-start" : "space-between"}
          width={"95%"}
          margin={"1rem"}
        >
          <Grid item xs={4} md={3} marginLeft={1}>
            <Toggle
              options={
                isMobile
                  ? viewOptions.map((option) => ({
                      ...option,
                      label: null,
                    }))
                  : viewOptions
              }
              onToggleCallback={handleViewToggle}
              containerWidth={"100%"}
            />
          </Grid>
          {isMobile &&
            (!isSideBarOpen ? (
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
            ) : (
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
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            ))}
          {isMobile && (
            <Grid width={"95%"} sx={{ margin: "1rem auto" }}>
              <AddressAutocompleteField
                placeholder={"Enter city, neighborhood, address"}
                value={tempSearchTerm}
                onChange={setTempSearchTerm}
              />
            </Grid>
          )}
          <Grid
            item
            xs={isMobile ? 10 : 5}
            md={isMobile ? 6 : 4}
            margin={isMobile && "auto"}
            marginLeft={isSideBarOpen ? "10vw" : ""}
          >
            <Toggle
              options={postTypeOptions}
              onToggleCallback={handlePostTypeToggle}
              containerWidth={"100%"}
              initialIndex={initialIndex}
            />
          </Grid>
          {!isMobile &&
            (!isSideBarOpen ? (
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
            ) : (
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
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            ))}
        </Grid>
      ) : selectedView === "Map View" ? (
        <Grid
          container
          item
          xs={12}
          justifyContent="space-between"
          style={{ position: "absolute" }}
          width={"95%"}
          margin={"1rem"}
        >
          <Grid
            item
            xs={4}
            md={3}
            marginLeft={1}
            marginBottom={1}
            style={{ zIndex: 2 }}
          >
            <Toggle
              options={
                isMobile
                  ? viewOptions.map((option) => ({
                      ...option,
                      label: null,
                    }))
                  : viewOptions
              }
              onToggleCallback={handleViewToggle}
              containerWidth={"100%"}
            />
          </Grid>
          {isMobile &&
            (!isSideBarOpen ? (
              <Grid style={{ zIndex: 2 }}>
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
              </Grid>
            ) : (
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
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            ))}
          <Grid
            item
            xs={isMobile ? 10 : 5}
            md={isMobile ? 6 : 4}
            margin={isMobile && "auto"}
            marginTop={isMobile && 14}
            marginRight={isMobile ? 0 : 50}
            style={{
              zIndex: 2,
              position: isMobile && "fixed",
              marginLeft: isMobile && "25px",
              width: "100%",
            }}
          >
            <Toggle
              options={postTypeOptions}
              onToggleCallback={handlePostTypeToggle}
              containerWidth={"100%"}
            />
          </Grid>
          {!isMobile &&
            (!isSideBarOpen ? (
              <Grid
                item
                container
                xs={12}
                justifyContent="flex-end"
                style={{
                  zIndex: 2,
                  position: "fixed",
                  right: 0,
                  marginTop: 40,
                  width: "auto",
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
                    marginRight: "1rem",
                  }}
                  onClick={() => setIsSideBarOpen(true)}
                >
                  <TuneIcon />
                  <Typography>All Filters</Typography>
                </Button>
              </Grid>
            ) : (
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
                applyClicked={applyClicked}
                setApplyClicked={setApplyClicked}
              />
            ))}
        </Grid>
      ) : null}
      {selectedView === "List View" ? (
        <Box
          className="list-view"
          style={{
            width: isSideBarOpen && !isMobile ? "calc(100vw - 420px)" : "auto",
          }}
        >
          <ListView
            selectedType={selectedType}
            filterPosts={filterPosts}
            filterSightings={filterSightings}
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

export default HomePageTemp;
