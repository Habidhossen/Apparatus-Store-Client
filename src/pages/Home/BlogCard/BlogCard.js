import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const { _id, title, desc, date, img } = blog;

  return (
    <div className="card card-compact bg-base-100 shadow-md rounded-md">
      <img src={img} alt="" />
      <div className="card-body space-y-2">
        <p className="text-xs font-medium text-text">{date}</p>
        <h2 className="text-md font-bold text-heading uppercase">{title}</h2>
        <p className="text-sm text-text">{desc.slice(0, 200) + "..."}</p>

        <div className="card-actions">
          <Link
            to={`/blog/${_id}`}
            className="flex items-center gap-2 text-primary text-sm font-semibold hover:text-secondary transition duration-300"
          >
            Read More <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
