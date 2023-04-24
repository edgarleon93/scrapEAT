import { LikeButton } from "./components/buttons.tsx/LikeButton";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/HomePage";
import { Index } from "./pages/Index";
import MyHistory from "./pages/MyHistory";
import MyRecipe from "./pages/MyRecipe";
import "./style.css";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/recipe" element={<MyRecipe />} />
      <Route path="/history" element={<MyHistory />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/HomePage" element={<HomePage />} />
      <Route path="/Like" element={<LikeButton />} />
    </Routes>
  );
}

export default App;
