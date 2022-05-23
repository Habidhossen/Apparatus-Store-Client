import React from "react";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
    </div>
  );
};

export default Home;
