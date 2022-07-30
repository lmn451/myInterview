import "./App.css";
import "react-loading-skeleton/dist/skeleton.css";
import { Route, Routes } from "react-router-dom";
import Index from "./components/Index";
import GifInfo from "./components/GifInfo";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path=":gifID" element={<GifInfo />} />
    </Routes>
  );
}

export default App;
