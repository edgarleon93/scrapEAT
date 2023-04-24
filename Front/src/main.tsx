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
      fontSize: "2rem",
      "@media (min-width: 640px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "3rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "3.5rem",
      },
    },
    h2: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.5rem",
      "@media (min-width: 640px)": {
        fontSize: "2rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.5rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "3rem",
      },
    },
    h3: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.3rem",
      "@media (min-width: 640px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "2.4rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.9rem",
      },
    },
    body1: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1.1rem",
      "@media (min-width: 640px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.8rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "2.4rem",
      },
    },
    body2: {
      fontFamily: "Jost, sans-serif",
      fontSize: "1rem",
      "@media (min-width: 640px)": {
        fontSize: "1.2rem",
      },
      "@media (min-width: 768px)": {
        fontSize: "1.4rem",
      },
      "@media (min-width: 1200px)": {
        fontSize: "1.8rem",
      },
    },
  },

  palette: {
    primary: { main: "#e7e7e7" },
    secondary: { main: "#be7736" },
    mode: "dark",
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
