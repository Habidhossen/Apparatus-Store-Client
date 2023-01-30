import React from "react";
import { useQuery } from "react-query";
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
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Our Happy Clients Say
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {reviews
          .map((review) => <Review key={review._id} review={review} />)
          .reverse()}
      </div>
    </section>
  );
};

export default Reviews;
