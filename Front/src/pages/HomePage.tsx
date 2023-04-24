import React from "react";
import TextHomePage from "../components/TextHomePage";
import { useState } from "react";

import TextInput from "../components/TextInput";

import { Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";


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
