import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const SpecialOffer = () => {
  return (
    <section className="mx-4 md:mx-20 lg:mx-20 my-20 p-20 bg-black rounded-xl space-y-4">
      <h6 className="inline bg-secondary text-white text-xs font-medium px-4 py-1 text-center rounded-xl">
        On Sale This Week
      </h6>
      <h1 className="text-3xl font-bold capitalize text-white leading-snug">
        Order all your tools in one location
      </h1>
      <p className="text-sm text-white">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sequi
        accusamus doloremque quidem. Aut, iste.
      </p>
      <Link
        to="all-products"
        className="w-24 flex items-center gap-2 text-sm font-bold text-primary hover:text-accent transition duration-300"
      >
        Shop now <FaLongArrowAltRight />
      </Link>
    </section>
  );
};

export default SpecialOffer;
