import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../Firebase/firebase.init";
import DeleteConfirmModal from "../DeleteConfirmModal/DeleteConfirmModal";
import MyOrderRow from "../MyOrderRow/MyOrderRow";

const MyOrder = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const [orders, setOrders] = useState([]);
  const [deletingOrder, setDeletingOrder] = useState(null);

  useEffect(() => {
    const url = `https://guarded-reaches-73348.herokuapp.com/order/${user.email}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  return (
    <div>
      <div class="overflow-x-auto p-4">
        <h1 className="text-2xl font-bold mb-4">My Orders ({orders.length})</h1>
        <table class="table table-compact w-full">
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
      {deletingOrder && <DeleteConfirmModal deletingOrder={deletingOrder} />}
    </div>
  );
};

export default MyOrder;
