import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import BlogCard from "../BlogCard/BlogCard";

const LatestBlog = () => {
  const latestBlog = [
    {
      _id: 1,
      title: "The Fenrir Screw Gripper is a Promising New Accessory",
      desc: "The Fenrir is a screw and fastener-gripping attachment that can be used with most cordless drills and locking screwdriver handles.",
      date: "10 May, 2022",
      img: "https://i.ibb.co/zmDVdZc/tools1.png",
    },
    {
      _id: 2,
      title: "Multi-Bit vs. Individual Screwdrivers – You Have to Pick!",
      desc: "Multi-bit screwdrivers excel in giving you x-number of screwdriver sizes and styles in a compact package.",
      date: "20 May, 2022",
      img: "https://i.ibb.co/yYnzpMz/tools2.png",
    },
    {
      _id: 3,
      title: "How do You Feel About 1″ Screwdriver Bits?",
      desc: "Generally, if using this type of screwdriver bit in a power tool, you must also use a bit holder, adapter, or extension.",
      date: "24 May, 2022",
      img: "https://i.ibb.co/djbGgNj/tools3.png",
    },
    {
      _id: 4,
      title: "How do You Feel About 1″ Screwdriver Bits?",
      desc: "Generally, if using this type of screwdriver bit in a power tool, you must also use a bit holder, adapter, or extension.",
      date: "24 May, 2022",
      img: "https://i.ibb.co/djbGgNj/tools3.png",
    },
  ];
  return (
    <section className="my-20 mx-20">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-xl font-bold">Our Latest News</h1>
        </div>
        <div>
          <Link
            to="all-blogs"
            className="flex items-center gap-2 text-sm font-bold hover:text-primary transition duration-300"
          >
            View All <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {latestBlog
          .map((blog) => <BlogCard key={blog._id} blog={blog} />)
          .reverse()}
      </div>
    </section>
  );
};

export default LatestBlog;
