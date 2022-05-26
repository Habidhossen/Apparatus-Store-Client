import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Banner from "../Banner/Banner";
import BusinessSummary from "../BusinessSummary/BusinessSummary";
import ContactForm from "../ContactForm/ContactForm";
import Products from "../Products/Products";
import Reviews from "../Reviews/Reviews";

const Home = () => {
  return (
    <div>
      <Banner />
      <Products />
      <BusinessSummary />
      <Reviews />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
