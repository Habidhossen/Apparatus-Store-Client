import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ContactDetails from "../ContactDetails/ContactDetails";
import LatestBlog from "../LatestBlog/LatestBlog";
import Products from "../Products/Products";
import ProvidedOffer from "../ProvidedOffer/ProvidedOffer";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <ProvidedOffer />
      <Products />
      <BusinessSummary />
      <Reviews />
      <LatestBlog />
      <ContactDetails />
      <Footer />
    </div>
  );
};

export default Home;
