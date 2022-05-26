import React from "react";

const Footer = () => {
  // get the current year
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-800 text-white text-center py-8">
      <div className="">
        <p className="text-sm font-normal">
          Copyright &#169; {year} <span>Apparatus Store - Get Tools Now.</span>
        </p>
        <p className="text-sm font-normal mt-2">All Rights Reserved</p>
        {/* <div className="d-flex align-items-center justify-content-center">
          <a href="">Privacy Policy</a>
          <div className="vertical-line-sm"></div>
          <a href="">Terms of Use</a>
          <div className="vertical-line-sm"></div>
          <a href="">About Us</a>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;
