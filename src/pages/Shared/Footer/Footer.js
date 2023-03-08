import React from "react";
import creditcards from "../../../assets/images/credit-cards.png";

const Footer = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer className="bg-black text-white py-12">
      <div className="flex flex-col items-center">
        <p className="text-sm">
          Copyright &#169; {year}{" "}
          <span className="text-primary">Apparatus Store - Get Tools Now.</span>
        </p>
        <p className="text-sm mt-1">All Rights Reserved</p>
        <img className="mt-5" src={creditcards} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
