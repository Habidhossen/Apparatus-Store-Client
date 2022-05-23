import { Route, Routes } from "react-router-dom";
import "./App.css";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MyOrder from "./pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
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
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<MyProfile />} />
          <Route path="order" element={<MyOrder />} />
          <Route path="review" element={<AddReview />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
