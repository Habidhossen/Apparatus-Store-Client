import React from "react";
import { useQuery } from "react-query";
import Tool from "../Home/Product/Product";
import Loading from "../Shared/Loading/Loading";

const AllProducts = () => {
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

export default AllProducts;
