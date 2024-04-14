import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme/theme.js";
import { MobileProvider } from "./context/MobileContext.jsx";
import { UserProvider } from "./context/UserContext.jsx";
import App from "./App.js";
import reportWebVitals from "./reportWebVitals.js";
import awsmobile from "./aws-exports.js";
import { Amplify } from "aws-amplify";

Amplify.configure(awsmobile);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MobileProvider>
        <UserProvider>
          <App />
        </UserProvider>
      </MobileProvider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
