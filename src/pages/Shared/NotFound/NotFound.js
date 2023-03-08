import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../assets/images/not-found.png";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col items-center">
      <img className="w-96" src={notFound} alt="" />
      <h1 className="text-6xl font-extrabold uppercase">Oops!</h1>
      <h5 className="text-lg font-bold uppercase mt-2 mb-6">
        404 - Page not found
      </h5>
      <Link to="/" className="btn btn-primary text-white capitalize">
        Go to Homepage
      </Link>{" "}
    </section>
  );
};

export default NotFound;
