import React from "react";
import { useQuery } from "react-query";
import BlogCard from "../Home/BlogCard/BlogCard";
import Loading from "../Shared/Loading/Loading";

const AllBlogs = () => {
  const {
    data: blogs,
    isLoading,
    refetch,
  } = useQuery("blogs", () =>
    fetch("http://localhost:5000/blog").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="my-20 mx-20">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => <BlogCard key={blog._id} blog={blog} />).reverse()}
      </div>
    </section>
  );
};

export default AllBlogs;
