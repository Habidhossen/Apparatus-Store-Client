import React from "react";
import useProducts from "../../../hooks/useProducts";
import ManageProductsRow from "../ManageProductsRow/ManageProductsRow";

const ManageProducts = () => {
  const [products, setProducts] = useProducts();

  console.log(products);

  return (
    <div>
      <div class="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          All products ({products.length})
        </h1>
        <table class="table table-compact w-full">
          <thead>
            <tr>
              <th>IMG</th>
              <th>Name</th>
              <th>Price</th>
              <th>Available Quantity</th>
              <th>Minimum Order Quantity</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <ManageProductsRow key={product._id} product={product} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageProducts;
