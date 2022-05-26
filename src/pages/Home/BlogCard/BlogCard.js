import React from "react";

const BlogCard = ({ blog }) => {
  const { title, desc, date, img } = blog;

  return (
    <div className="card card-compact bg-base-100 shadow-lg">
      <img src={img} alt="" />

      <div className="card-body">
        <p className="text-xs font-medium">{date}</p>
        <h2 className="text-lg font-bold ">{title}</h2>
        <p>{desc}</p>

        <div className="card-actions">
          <button className="btn btn-warning text-white btn-md font-normal">
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
