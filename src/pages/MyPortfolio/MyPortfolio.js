import React from "react";

const MyPortfolio = () => {
  return (
    <div className="card bg-base-100 shadow-md m-20 p-12">
      {" "}
      <h1 className="text-4xl font-extrabold text-slate-700">Habid Hossen</h1>
      <h2 className="text-md font-semibold my-2">habidhossen2@gmail.com</h2>
      <h4 className="text-md font-semibold my-2">
        Education: Bachelor of Science in Computer Science and Engineering{" "}
        <br />
        BGC Trust University Bangladesh
      </h4>
      <h4 className="text-md font-semibold my-2">
        Skill Highlights: HTML5, CSS3, JavaScript, ES6, API, React, React
        Router, Firebase, Node.js, Express.js, MongoDB
      </h4>
      <div>
        <h4 className="text-2xl font-bold text-slate-700 mt-4">
          Best Three Project:
        </h4>

        <p className="text-md font-semibold my-2">
          CarSpot - Wheels and Deals{" "}
          <a
            target="_blank"
            className="text-accent"
            href="https://carspot-wheels-and-deals.web.app/"
            rel="noreferrer"
          >
            Live site
          </a>
        </p>
        <p className="text-md font-semibold my-2">
          Travel To Go{" "}
          <a
            target="_blank"
            className="text-accent"
            href="https://travel-to-go-6c371.web.app/"
            rel="noreferrer"
          >
            Live site
          </a>
        </p>
        <p className="text-md font-semibold my-2">
          The Camera Shop{" "}
          <a
            target="_blank"
            className="text-accent"
            href="https://thecamerashop.netlify.app/"
            rel="noreferrer"
          >
            Live site
          </a>
        </p>
      </div>
    </div>
  );
};

export default MyPortfolio;
