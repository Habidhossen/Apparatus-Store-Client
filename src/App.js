import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home/Home";
import Purchase from "./pages/Home/Purchase/Purchase";
import Login from "./pages/Login/Login/Login";
import Signup from "./pages/Login/Signup/Signup";
import Navbar from "./pages/Shared/Navbar/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/purchase/:Id" element={<Purchase />} />
      </Routes>
    </div>
  );
}

export default App;
