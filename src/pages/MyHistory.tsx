import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, Typography } from "@mui/material";
import SimpleAccordion from "../components/accordion";

export default function MyHistory() {
  return (
    <>
      <Navbar />
      <Box textAlign="center">
        <Typography variant="h3" sx={{ marginTop: 6, marginBottom: 8 }}>
          My History
        </Typography>
      </Box>
      <SimpleAccordion />
    </>
  );
}
