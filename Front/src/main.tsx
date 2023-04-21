import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme } from "@mui/material";

const theme = createTheme({
  typography: {
    h1: {
      fontFamily: "Jost, sans-serif",
      fontSize: "2.5rem",
      "@media (min-width: 640px)": {
        fontSize: "3.5rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "4.9rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "5.5rem",
      },
    },
    h2: {
      fontFamily: "Jost, sans-serif",
      fontSize: "2.1rem",
      "@media (min-width: 640px)": {
        fontSize: "2.9rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "4rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "5rem",
      },
    },
    h3: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.7rem",
      "@media (min-width: 640px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.9rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "4rem",
      },
    },
    body1: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.4rem",
      "@media (min-width: 640px)": {
        fontSize: "1.7rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.9rem",
      },
    },
    body2: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.2rem",
      "@media (min-width: 640px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.7rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.4rem",
      },
    },
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
