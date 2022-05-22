import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="ml-8">
        <h5 className="text-lg uppercase text-primary">
          We take care of all your needs
        </h5>
        <h1 className="text-5xl font-extrabold mt-2 mb-6">
          Best Hand Tools Collection
        </h1>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Banner;
