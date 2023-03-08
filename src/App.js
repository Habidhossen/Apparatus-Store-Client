import { Route, Routes } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import AllBlogs from "./pages/AllBlogs/AllBlogs";
import AllProducts from "./pages/AllProducts/AllProducts";
import AllReviews from "./pages/AllReviews/AllReviews";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AddProduct from "./pages/Dashboard/AddProduct/AddProduct";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageAllOrders from "./pages/Dashboard/ManageAllOrders/ManageAllOrders";
import ManageBlogs from "./pages/Dashboard/ManageBlogs/ManageBlogs";
import ManageProducts from "./pages/Dashboard/ManageProducts/ManageProducts";
import MyOrder from "./pages/Dashboard/MyOrder/MyOrder";
import MyProfile from "./pages/Dashboard/MyProfile/MyProfile";
import Payment from "./pages/Dashboard/Payment/Payment";
import BlogDetails from "./pages/Home/BlogDetails/BlogDetails";
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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/all-products" element={<AllProducts />} />
        <Route path="/all-reviews" element={<AllReviews />} />
        <Route path="/all-blogs" element={<AllBlogs />} />
        <Route path="/blog/:blogID" element={<BlogDetails />} />
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
          <Route path="add-blog" element={<AddBlog />} />
          <Route path="manage-product" element={<ManageProducts />} />
          <Route path="manage-blog" element={<ManageBlogs />} />
          <Route path="manage-order" element={<ManageAllOrders />} />
          <Route path="make-admin" element={<MakeAdmin />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
