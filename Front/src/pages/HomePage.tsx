import React from "react";
import Navbar from "../components/Navbar";
import TextHomePage from "../components/TextHomePage";
import TextInput from "../components/TextInput";
import { useState } from "react";

function HomePage() {
  return (
    <>
      <Navbar />
      <TextHomePage />
      <TextInput />
    </>
  );
}

export default HomePage;
