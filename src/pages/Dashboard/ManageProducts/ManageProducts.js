import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteProduct from "../DeleteProduct/DeleteProduct";
import ManageProductsRow from "../ManageProductsRow/ManageProductsRow";

const ManageProducts = () => {
  const [deletingProduct, setDeletingProduct] = useState(null);

  const {
    data: products,
    isLoading,
    refetch,
  } = useQuery("products", () =>
    fetch("http://localhost:5000/product/").then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-xl font-bold mb-6">
          All Products ({products.length})
        </h1>
        <table className="table table-compact w-full">
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
              <ManageProductsRow
                key={product._id}
                product={product}
                setDeletingProduct={setDeletingProduct}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Modal */}
      {deletingProduct && (
        <DeleteProduct deletingProduct={deletingProduct} refetch={refetch} />
      )}
    </div>
  );
};

export default ManageProducts;
