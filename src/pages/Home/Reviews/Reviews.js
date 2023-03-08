import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Review from "../Review/Review";

const Reviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("http://localhost:5000/review").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="my-20 mx-20">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-xl font-bold">Our Happy Client Say</h1>
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold hover:text-primary transition duration-300"
          >
            View All <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <hr className="mb-6" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews
          .map((review) => <Review key={review._id} review={review} />)
          .reverse()}
      </div>
    </section>
  );
};

export default Reviews;
