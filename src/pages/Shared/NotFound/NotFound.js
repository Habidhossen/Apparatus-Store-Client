import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <section className="text-center mt-36">
      <h1 className="text-8xl font-extrabold uppercase">Oops!</h1>
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
