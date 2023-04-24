import "./style.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Menu } from "./components/Menu";
import MyRecipe from "./pages/MyRecipe";
import MyHistory from "./pages/MyHistory";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/menu" element={<Menu />} />
      <Route path="/recipe" element={<MyRecipe />} />
      <Route path="/history" element={<MyHistory />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/HomePage" element={<HomePage />} />
    </Routes>
  );
}

export default App;
