import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner">
      <div className="ml-8">
        <h5 className="text-lg uppercase text-primary">
          We take care of all your needs
        </h5>
        <h1 className="text-6xl font-extrabold mb-6 leading-snug">
          Best Hand <span className="border-b-[5px] border-primary">Tools</span>
          <br />
          Collection
        </h1>
        <button className="btn btn-primary">Order Now</button>
      </div>
    </div>
  );
};

export default Banner;
