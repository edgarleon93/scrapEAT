import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";

import MyRecipe from "./pages/MyRecipe";
import MyHistory from "./pages/MyHistory";
import HomePage from "./pages/HomePage";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/recipe" element={<MyRecipe />} />
      <Route path="/history" element={<MyHistory />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
