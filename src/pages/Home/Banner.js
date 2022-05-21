import React from "react";
import banner from "../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      className="min h-screen"
      style={{
        backgroundImage: `url(${banner})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      <div>
        <h5 className="text-xl uppercase text-primary">
          We take care of all your needs
        </h5>
        <h1 className="text-5xl font-extrabold mt-2 mb-6">
          Best Hand Tools Collection
        </h1>
        <button className="btn btn-primary">Purchase Now</button>
      </div>
    </div>
  );
};

export default Banner;
