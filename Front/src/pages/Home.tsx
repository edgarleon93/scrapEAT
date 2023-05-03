import React from "react";

import { useState } from "react";

import TextInput from "../components/TextInput";

import { Container } from "@mui/material";
import Navbar from "../components/navbar/Navbar";
import TextHome from "../components/TextHome";

function Home() {
  return (
    <>
      <Navbar />
      <Container>
        <TextHome />
        <TextInput />
      </Container>
    </>
  );
}

export default Home;
