import React from "react";
import { FaRegCalendar } from "react-icons/fa";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";

const BlogDetails = () => {
  const { blogID } = useParams(); // get blogID from params

  // fetch data from database using react query (Blog)
  const { data: blog, isLoading } = useQuery("blog", () =>
    fetch(`http://localhost:5000/blog/${blogID}`).then((res) => res.json())
  );

  // loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="px-40 py-10">
      <div>
        <img className="w-full rounded-md mb-8" src={blog.img} alt="" />
        <div>
          <p className="flex items-center gap-2 text-sm text-text mb-1">
            <FaRegCalendar className="text-secondary" />
            {blog.date}
          </p>
          <h1 className="text-heading font-semibold text-3xl">{blog.title}</h1>
          <p className="py-4 text-text">{blog.desc}</p>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
