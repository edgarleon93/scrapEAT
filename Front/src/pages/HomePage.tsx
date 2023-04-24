import React from "react";

import TextHomePage from "../components/TextHomePage";
// import TextInput from "../components/TextInput";
import { useState } from "react";
import Navbar from "../components/navbar/Navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <TextHomePage />
      {/* <TextInput /> */}
    </>
  );
}

export default HomePage;
