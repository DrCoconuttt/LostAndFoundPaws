import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#3DA9FC",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#B50300",
    },
    text: {
      primary: "#000000",
    },
    custom: {
      primaryBkg: "#FFFFFF",
      greyBkg: {
        input: "#F5F5F5",
        tag: "#D9D9D9",
        category: "#E6E7EC",
        comment: {
          button: "#979797",
          bkg: "#F5F5F5",
          content: "#585858",
        },
      },
      selectedCategory: {
        lost: {
          light: "#FDC0C0",
          dark: "#EB442C",
        },
        found: {
          light: "#8DFD8D",
          dark: "#5A9F68",
        },
        sighting: {
          light: "#FDFD8D",
          dark: "#F8B324",
        },
        petType: "#DADADA",
        view: "#C0E7FD",
      },
    },
  },
  typography: {
    fontFamily: ["Inter", "Arial", "sans-serif"].join(","),
    h1: {
      fontSize: "24px",
      fontWeight: 600,
      letterSpacing: "0.75px",
    },
    h2: {
      fontSize: "18px",
      fontWeight: 600,
      letterSpacing: "0.75px",
    },
    h3: {
      fontSize: "16px",
      fontWeight: 600,
      letterSpacing: "0.75px",
    },
    h4: {
      fontSize: "15px",
      fontWeight: "bold",
      letterSpacing: "0.75px",
    },
    h7: {
      fontSize: "14px",
      letterSpacing: "0.75px",
      fontWeight: "bold",
    },
    h8: {
      fontSize: "11px",
      letterSpacing: "0.75px",
      fontWeight: "bold",
    },
    h9: {
      fontSize: "10px",
      letterSpacing: "0.75px",
    },
    body2: {
      color: "#585858",
      fontSize: "0.95rem",
    },
  },
});

export default theme;
