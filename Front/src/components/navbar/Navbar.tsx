import React, { useState, useEffect } from "react";
import { AppBar, Box, Hidden, Toolbar, Typography } from "@mui/material";
import { NavbarButton } from "./NavbarButton";

export default function Navbar() {
  const [isConnected, setIsConnected] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsConnected(true);
    } else {
      setIsConnected(false);
    }
  }, []);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
  };

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
                pl: 2,
              }}
            >
              scrapEAT
            </Typography>
          </Hidden>
          <NavbarButton
            variant={isConnected ? "menu" : "login"}
            sx={{
              backgroundColor: "primary.main",
              px: 2,
              py: 1,
              borderRadius: "4px",
              position: "absolute",
              right: "0",
              marginRight: "20px",
              filter: "drop-shadow(5px 5px 5px rgba(0,0,0,0.3))",
              ":hover ": {
                transform: "scale(1.1)",
                transition: "all 0.3s ease",
                backgroundColor: "primary.main",
              },
            }}
            open={open}
            onOpen={handleOpen}
            onClose={handleClose}
          >
            <Typography variant="body2">
              {isConnected ? "menu" : "login"}
            </Typography>
          </NavbarButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
