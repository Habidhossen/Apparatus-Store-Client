import React, { useEffect, useState } from "react";
import Tool from "../Product/Product";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {products.map((singleProduct) => (
          <Tool key={singleProduct._id} singleProduct={singleProduct} />
        ))}
      </div>
    </section>
  );
};

export default Products;
