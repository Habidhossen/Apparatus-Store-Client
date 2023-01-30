import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";
import DeleteOrder from "../DeleteOrder/DeleteOrder";
import MyOrderRow from "../MyOrderRow/MyOrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const [deletingOrder, setDeletingOrder] = useState(null);

  const email = user?.email;

  const {
    data: orders,
    isLoading,
    refetch,
  } = useQuery("orders", () =>
    fetch(`http://localhost:5000/order?email=${email}`).then((res) =>
      res.json()
    )
  );

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Orders ({orders.length})</h1>
        <table className="table table-compact w-full">
          <thead>
            <tr>
              <th>Product</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Quantity</th>
              <th>Total Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <MyOrderRow
                key={order._id}
                order={order}
                setDeletingOrder={setDeletingOrder}
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

export default MyOrder;
