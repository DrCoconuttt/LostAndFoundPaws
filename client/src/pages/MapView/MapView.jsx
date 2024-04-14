import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from "@mapbox/mapbox-gl-geocoder";
import "mapbox-gl/dist/mapbox-gl.css";
import "@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css";
import "./MapView.css";

import SightingDialog from "../../components/SightingDialog/SightingDialog";
import ToastNotification from "../../components/ToastNotification/ToastNotificaiton";

import { generateClient } from "aws-amplify/api";
import * as queries from "../../graphql/queries";
import * as mutations from "../../graphql/mutations";
import { CircularProgress } from "@mui/material";
import { downloadData } from "@aws-amplify/storage";
import { useUser } from "../../context/UserContext";
import {
  getSightingEmail,
  getSightingPhoneNumber,
  getStatusColor,
} from "../../utils/utils";

const MapView = ({
  selectedType,
  filterPosts,
  filterSightings,
  applyClicked,
}) => {
  const [, setMarkers] = useState([]);
  const [markersData, setMarkersData] = useState([]);
  const [toastOpen, setToastOpen] = useState(false);
  const [toastSeverity, setToastSeverity] = useState("success");
  const [toastMessage, setToastMessage] = useState("");
  const [postsData, setPostsData] = useState([]);
  const [sightingsData, setSightingsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);
  const [, setSelectedId] = useState(null);
  const [selectedSighting, setSelectedSighting] = useState(null);
  const calgaryCoords = [-114.0719, 51.0447];
  const { userState, currentUser } = useUser();
  const [currentLocation, setCurrentLocation] = useState(null);
  let client = generateClient({ authMode: "apiKey" });
  if (userState !== "Guest") {
    client = generateClient({ authMode: "userPool" });
  }

  const openDialog = (id) => {
    setOpen(true);
    setSelectedId(id);
  };

  let didCancel = false;
  const fetchData = async () => {
    if (didCancel) {
      return;
    }
    try {
      let posts = filterPosts || [];
      if (filterPosts === null) {
        const listPostsResponse = await client.graphql({
          query: queries.listPosts,
        });
        posts = listPostsResponse.data.listPosts.items;
      }
      const postsInfo = await Promise.all(
        posts.map(async (post) => {
          const imageData = await downloadData({ key: post.images[0] }).result;
          const imageSrc = URL.createObjectURL(imageData.body);
          return {
            id: post.id,
            userId: post.userID,
            name: post.name,
            species: post.species,
            image: imageSrc,
            status: post.status,
            lastKnownLocation: post.lastKnownLocation,
            resolved: post.resolved,
            email: "",
            phoneNumber: "",
            createdAt: post.createdAt,
          };
        })
      );

      let sightings = filterSightings || [];
      if (filterSightings === null) {
        const listSightingsResponse = await client.graphql({
          query: queries.listSightings,
        });
        sightings = listSightingsResponse.data.listSightings.items;
      }
      const sightingsInfo = await Promise.all(
        sightings.map(async (sighting) => {
          const imageData = await downloadData({ key: sighting.image }).result;
          const imageSrc = URL.createObjectURL(imageData.body);
          return {
            id: sighting.id,
            userId: sighting.userID || "",
            name: "",
            species: "",
            image: imageSrc,
            status: "SIGHTING",
            lastKnownLocation: sighting.location,
            resolved: sighting.resolved,
            email: getSightingEmail(sighting),
            phoneNumber: getSightingPhoneNumber(sighting),
            createdAt: sighting.createdAt,
          };
        })
      );

      const newMarkersData = [...postsInfo, ...sightingsInfo];
      setMarkersData(newMarkersData);
      setPostsData(posts);
      setSightingsData(sightings);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    return () => {
      didCancel = true;
    };
  }, [
    selectedType,
    JSON.stringify(filterPosts),
    JSON.stringify(filterSightings),
    applyClicked,
  ]);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCurrentLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        });
      });
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  }, []);

  const deleteSighting = async (id) => {
    setLoading(true);
    const deleteInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deleteSighting,
        variables: { input: deleteInput },
      });
      fetchData();
      handleToastOpen("success", "Successfully deleted sighting post.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error deleting sighting post.");
      console.error("Error deleting sighting post: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
    setOpen(false);
  };

  const resolveSighting = async (id) => {
    setLoading(true);
    const updateSightingInput = {
      id: id,
    };
    try {
      await client.graphql({
        query: mutations.deleteSighting,
        variables: { input: updateSightingInput },
      });
      fetchData();
      handleToastOpen("success", "Successfully marked sighting as resolved.");
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    } catch (error) {
      handleToastOpen("error", "Error marking sighting as resolved.");
      console.error("Error marking sighting as resolved.: ", error);
      setTimeout(() => {
        setToastOpen(false);
      }, 2000);
    }
    setLoading(false);
    setOpen(false);
  };

  const handleToastOpen = (severity, message) => {
    setToastSeverity(severity);
    setToastMessage(message);
    setToastOpen(true);
  };

  const handleToastClose = () => {
    setToastOpen(false);
  };

  const getStatusLabelHTML = (status) => {
    const backgroundColor = getStatusColor(status);

    return `
      <div style="
        display: inline-flex;
        align-items: center;
        justify-content: center;
        padding: 0 16px;
        height: 32px;
        width: fit-content;
        font-size: 0.875rem;
        font-weight: 500;
        line-height: 1.75;
        letter-spacing: 0.02857em;
        text-transform: uppercase;
        border-radius: 5px;
        background-color: ${backgroundColor};
      ">
        ${status}
      </div>
    `;
  };

  mapboxgl.accessToken = process.env.REACT_APP_MAPBOX_API_KEY;

  // Initialize the map
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/light-v10",
      center: calgaryCoords,
      zoom: 10.5,
    });

    map.on("load", () => {
      // Add geocoder (search bar)
      map.addControl(
        new MapboxGeocoder({
          accessToken: mapboxgl.accessToken,
          mapboxgl: mapboxgl,
          placeholder: "Enter city, neighborhood, or address",
        }),
        "top-right"
      );

      // Add navigation controls
      map.addControl(new mapboxgl.NavigationControl(), "bottom-right");

      // Add current location marker
      if (currentLocation) {
        new mapboxgl.Marker({
          color: "gray",
        })
          .setLngLat([currentLocation.lng, currentLocation.lat])
          .addTo(map);
      }

      // Add markers
      const newMarkers = [];
      for (const markerData of markersData) {
        if (
          selectedType !== "All" &&
          markerData.status.toLowerCase() !== selectedType.toLowerCase()
        ) {
          continue;
        }

        const popup = new mapboxgl.Popup({
          maxWidth: "400px",
          closeButton: false,
        }).setHTML(`
          <div id="popup-${markerData.id}" class="popup-card">
            <img src="${
              markerData.image
            }" alt="pet-picture" class="popup-image" />
            <div class="popup-content">
              ${`<h2 style="margin: 0px">${markerData.name}</h2>`}
              <div class="labels">
                <div class="label">
                  ${getStatusLabelHTML(markerData.status)}
                </div>
                ${
                  markerData.species
                    ? getStatusLabelHTML(markerData.species)
                    : ""
                }
              </div>
              <Typography style="margin: 0px; font-size: 14px; color: #979797;">
                Posted: ${markerData.createdAt.split("T")[0]}
              </Typography>
            </div>
          </div>
      `);

        const marker = new mapboxgl.Marker({
          color: getStatusColor(markerData.status),
        })
          .setLngLat([
            markerData.lastKnownLocation.longitude,
            markerData.lastKnownLocation.latitude,
          ])
          .setPopup(popup)
          .addTo(map);

        newMarkers.push(marker);

        popup.on("open", () => {
          const popupElement = document.getElementById(
            `popup-${markerData.id}`
          );
          popupElement.addEventListener("click", (e) => {
            e.preventDefault();
            if (markerData.status === "SIGHTING") {
              setSelectedSighting(markerData);
              openDialog(markerData.id);
            } else {
              window.location.href = `/posts/${markerData.id}`;
            }
          });
        });
      }
      setMarkers(newMarkers);
    });
    return () => map.remove();
  }, [selectedType, markersData]);

  return (
    <>
      <div id="map">
        {loading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              zIndex: 1,
            }}
          >
            <CircularProgress />
          </div>
        )}
      </div>
      {!loading && (
        <>
          <SightingDialog
            key={selectedSighting?.id}
            id={selectedSighting?.id}
            userId={selectedSighting?.userId}
            img={selectedSighting?.image}
            location={selectedSighting?.lastKnownLocation.address}
            email={selectedSighting?.email}
            phoneNumber={selectedSighting?.phoneNumber}
            createdAt={selectedSighting?.createdAt}
            resolved={selectedSighting?.resolved}
            onDelete={deleteSighting}
            onResolve={resolveSighting}
            isCardOpen={open}
            setIsCardOpen={setOpen}
          />
          <ToastNotification
            open={toastOpen}
            severity={toastSeverity}
            message={toastMessage}
            handleClose={handleToastClose}
          />
        </>
      )}
    </>
  );
};

export default MapView;
