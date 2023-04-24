import React from "react";
import Navbar from "../components/Navbar";
import TextHomePage from "../components/TextHomePage";
import TextInput from "../components/TextInput";
import { useState } from "react";
import { Container } from "@mui/material";

function HomePage() {
  return (
    <>
      <Navbar />
      <Container>
        <TextHomePage />
        <TextInput />
      </Container>
    </>
  );
}

export default HomePage;
