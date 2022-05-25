import React from "react";

const Review = ({ review }) => {
  const { name, msg, rating } = review;

  const reviewIcon = (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5"
        viewBox="0 0 20 20"
        fill="#fdb819"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </>
  );

  return (
    <div class="card bg-base-100 shadow-md">
      <div class="card-body">
        <div className="flex justify-between">
          <div className="flex">
            {/* {rating === "4" && reviewIcon + reviewIcon}
            {rating === "5" && reviewIcon} */}
            {reviewIcon} {reviewIcon} {reviewIcon} {reviewIcon}
          </div>
          <div className="flex">
            <h1 className="text-primary">
              <b>{rating}</b>
            </h1>
          </div>
        </div>
        <p>{msg}</p>
        <h2 class="text-xl font-bold">&#8212; {name}</h2>
      </div>
    </div>
  );
};

export default Review;
