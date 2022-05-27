import React, { useState } from "react";
import { useQuery } from "react-query";
import Loading from "../../Shared/Loading/Loading";
import DeleteOrder from "../DeleteOrder/DeleteOrder";
import ManageOrdersRow from "../ManageOrdersRow/ManageOrdersRow";

const ManageAllOrders = () => {
  const [deletingOrder, setDeletingOrder] = useState(null);

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch("https://guarded-reaches-73348.herokuapp.com/order/").then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">
          All Orders ({orders.length})
        </h1>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <ManageOrdersRow
                key={order._id}
                order={order}
                setDeletingOrder={setDeletingOrder}
                refetch={refetch}
              />
            ))}
          </tbody>
        </table>
      </div>
      {/* Delete Modal */}
      {deletingOrder && (
        <DeleteOrder deletingOrder={deletingOrder} refetch={refetch} />
      )}
    </div>
  );
};

export default ManageAllOrders;
