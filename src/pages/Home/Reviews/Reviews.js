import React from "react";
import Review from "../Review/Review";

const Reviews = () => {
  const Reviews = [
    {
      _id: 1,
      name: "Flinn J.",
      msg: "It's really wonderful. I could probably go into sales for you. After using car my business skyrocketed! I love your system.",
      rating: "5.00",
    },
    {
      _id: 2,
      name: "Lilias G.",
      msg: "It's incredible. Car is worth much more than I paid. I would like to personally thank you for your outstanding product.",
      rating: "4.00",
    },
    {
      _id: 3,
      name: "Joel P.",
      msg: "I'm good to go. I could probably go into sales for you. It's the perfect solution for our business. It's the perfect solution for our business.",
      rating: "4.50",
    },
    {
      _id: 4,
      name: "Berri L.",
      msg: "Products is the real deal! I would also like to say thank you to all your staff. I can't say enough about products. It fits our needs perfectly.",
      rating: "5.00",
    },
    {
      _id: 5,
      name: "Welby J.",
      msg: "It's the perfect solution for our business. We're loving it. Man, this thing is getting better and better as I learn more about it.",
      rating: "4.00",
    },
    {
      _id: 6,
      name: "Celestyna T.",
      msg: "Products is awesome! Your company is truly upstanding and is behind its product 100%. Thank You!",
      rating: "4.50",
    },
  ];

  return (
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-12">
        Our Happy Clients Say
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {Reviews.map((review) => (
          <Review key={review._id} review={review} />
        ))}
      </div>
    </section>
  );
};

export default Reviews;
