import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AllProducts from "./pages/AllProducts/AllProducts";
import Blogs from "./pages/Blogs/Blogs";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import MyOrder from "./pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Payment from "./pages/Dashboard/Payment/Payment";
import Home from "./pages/Home/Home/Home";
import Purchase from "./pages/Home/Purchase/Purchase";
import Login from "./pages/Login/Login/Login";
import RequireAuth from "./pages/Login/RequireAuth/RequireAuth";
import Signup from "./pages/Login/Signup/Signup";
import Navbar from "./pages/Shared/Navbar/Navbar";
import NotFound from "./pages/Shared/NotFound/NotFound";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/all-products" element={<AllProducts />} />

        <Route path="/signup" element={<Signup />} />
        <Route
          path="/purchase/:productID"
          element={
            <RequireAuth>
              <Purchase />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <Dashboard />
            </RequireAuth>
          }
        >
          <Route index element={<MyProfile />} />
          <Route path="order" element={<MyOrder />} />
          <Route path="payment/:id" element={<Payment />} />
          <Route path="review" element={<AddReview />} />
          <Route path="add-product" element={<AddProduct />} />
          <Route path="manage-product" element={<ManageProducts />} />
          <Route path="manage-order" element={<ManageAllOrders />} />
          <Route path="make-admin" element={<MakeAdmin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
