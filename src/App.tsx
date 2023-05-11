import GoogleAuth from "./components/google";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import MyHistory from "./pages/MyHistory";
import MyRecipe from "./pages/MyRecipe";
import "./Style.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/recipe" element={<MyRecipe />} />
      <Route path="/history" element={<MyHistory />} />
      <Route path="/navbar" element={<Navbar />} />
      <Route path="/" element={<Home />} />
      <Route path="/google" element={<GoogleAuth />} />
    </Routes>
  );
}

export default App;
