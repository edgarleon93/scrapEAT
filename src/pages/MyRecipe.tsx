import React from "react";
import Navbar from "../components/navbar/Navbar";
import SimpleAccordion from "../components/accordion";
import { Box, Typography } from "@mui/material";

export default function MyRecipe() {
  return (
    <>
      <Navbar />
      <Box textAlign="center">
        <Typography variant="h3" sx={{ marginTop: 6, marginBottom: 8 }}>
          My Recipes
        </Typography>
      </Box>
      <SimpleAccordion />
    </>
  );
}
