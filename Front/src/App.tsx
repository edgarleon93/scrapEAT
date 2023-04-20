import "./Style.css";
import { Routes, Route } from "react-router-dom";
import { Index } from "./pages/Index";
import { Menu } from "./components/menu";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/menu" element={<Menu />} />
    </Routes>
  );
}

export default App;
