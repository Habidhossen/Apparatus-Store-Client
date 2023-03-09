import React from "react";
import { useQuery } from "react-query";
import Review from "../Home/Review/Review";
import Loading from "../Shared/Loading/Loading";

const AllReviews = () => {
  const {
    data: reviews,
    isLoading,
    refetch,
  } = useQuery("reviews", () =>
    fetch("https://apparatus-store-server.onrender.com/review").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <section className="mx-4 md:mx-20 lg:mx-20 my-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {reviews
          .map((review) => <Review key={review._id} review={review} />)
          .reverse()}
      </div>
    </section>
  );
};

export default AllReviews;
