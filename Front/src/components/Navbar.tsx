import { AppBar, Box, Hidden, Toolbar, Typography } from "@mui/material";
import React from "react";
import { NavbarButton } from "./buttons.tsx/NavbarButton";

export default function () {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        id="nav"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          height: "90px",
          py: "10px",
        }}
      >
        <Toolbar>
          <img src="/scrapEAT.svg" alt="logo" />
          <Hidden smDown>
            <Typography
              variant="h2"
              sx={{
                flexGrow: 1,
              }}
            >
              scrapEAT
            </Typography>
          </Hidden>
          <NavbarButton
            variant="menu"
            sx={{
              backgroundColor: "primary.main",
              px: 2,
              py: 1,
              borderRadius: "4px",
              position: "absolute",
              right: "0",
              marginRight: "20px",
              ":hover ": {
                transform: "scale(1.2)",
                transition: "all 0.3s ease",
                backgroundColor: "primary.main",
              },
            }}
          >
            <Typography variant="body2">Login</Typography>
          </NavbarButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
