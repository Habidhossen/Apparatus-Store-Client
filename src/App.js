import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
