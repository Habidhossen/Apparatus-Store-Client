import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import Tool from "../Product/Product";

const Products = () => {
  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("https://guarded-reaches-73348.herokuapp.com/product").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
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
