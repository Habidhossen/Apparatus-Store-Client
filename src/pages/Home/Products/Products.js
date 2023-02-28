import React from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import Tool from "../Product/Product";

const Products = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/product").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="my-20 mx-20">
      <div className="flex justify-between my-4">
        <div>
          <h1 className="text-xl font-bold">Featured Products</h1>
        </div>
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-bold hover:text-primary transition duration-300"
          >
            View All <FaLongArrowAltRight />
          </Link>
        </div>
      </div>
      <hr className="mb-5" />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {products
          .map((singleProduct) => (
            <Tool key={singleProduct._id} singleProduct={singleProduct} />
          ))
          .reverse()}
      </div>
    </section>
  );
};

export default Products;
