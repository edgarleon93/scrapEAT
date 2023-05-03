import { LikeButton } from "./components/buttons.tsx/likeButton";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MyHistory from "./pages/MyHistory";
import MyRecipe from "./pages/MyRecipe";
import "./style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/recipe" element={<MyRecipe />} />
      <Route path="/history" element={<MyHistory />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/Like" element={<LikeButton />} />
    </Routes>
  );
}

export default App;
