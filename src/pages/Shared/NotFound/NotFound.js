import React from "react";
import { Link } from "react-router-dom";
import notFound from "../../../assets/images/not-found.png";

const NotFound = () => {
  return (
    <section className="text-center flex flex-col items-center">
      <img src={notFound} alt="" />
      <h1 className="text-5xl font-extrabold uppercase">Oops!</h1>
      <h5 className="text-xl font-semibold uppercase my-2">
        404 - Page not found
      </h5>
      <p className="text-lg font-medium mb-4">
        The page you're looking for isn't here.
      </p>
      <Link to="/" className="btn btn-outline btn-warning">
        GO TO HOMEPAGE
      </Link>{" "}
    </section>
  );
};

export default NotFound;
