import theme from "../theme/theme";

export const getSightingPhoneNumber = (sightingData) => {
  if (sightingData.user?.phone) {
    return sightingData.user.phone;
  } else if (sightingData.contactInfo?.phone) {
    return sightingData.contactInfo.phone;
  } else {
    return null;
  }
};

export const getSightingEmail = (sightingData) => {
  if (sightingData.user?.email) {
    return sightingData.user.email;
  } else if (sightingData.contactInfo?.email) {
    return sightingData.contactInfo.email;
  } else {
    return null;
  }
};

export const getStatusColor = (status) => {
  switch (status) {
    case "LOST":
      return theme.palette.custom.selectedCategory.lost.dark;
    case "FOUND":
      return theme.palette.custom.selectedCategory.found.dark;
    case "SIGHTING":
      return theme.palette.custom.selectedCategory.sighting.dark;
    default:
      return theme.palette.custom.greyBkg.tag;
  }
};
