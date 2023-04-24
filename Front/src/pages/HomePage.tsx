import React from "react";
import TextHomePage from "../components/TextHomePage";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import TextInput from "../components/TextInput";

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
