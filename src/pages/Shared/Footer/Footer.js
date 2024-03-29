import React from "react";
import creditcards from "../../../assets/images/credit-cards.png";

const Footer = () => {
  const year = new Date().getFullYear(); // get the current year

  return (
    <footer className="bg-black text-white py-12">
      <div className="flex flex-col items-center">
        <p className="text-sm">
          Copyright &#169; {year}{" "}
          <span className="text-primary">Apparatus Store - Get Tools Now.</span>
        </p>
        <p className="text-sm mt-1">All Rights Reserved.</p>
        <p className="text-sm mt-1">
          Developed by{" "}
          <a
            className="text-accent"
            href="https://habidhossen.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Habid Hossen
          </a>
        </p>
        <img className="mt-5" src={creditcards} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
