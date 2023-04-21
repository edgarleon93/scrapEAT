import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontSize: "3rem",
      fontFamily: "Jost, sans-serif",
    },
    h2: {
      fontSize: "2.5rem",
      fontFamily: "Jost, sans-serif",
    },
    h3: {
      fontSize: "2rem",
      fontFamily: "Jost, sans-serif",
    },
    body1: {
      fontSize: "1.5rem",
      fontFamily: "Jost, sans-serif",
    },
    body2: {
      fontSize: "1rem",
      fontFamily: "Jost, sans-serif",
    },
  },
  palette: {
    primary: { main: "#e7e7e7" },
    secondary: { main: "#be7736" },
  },
});
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
