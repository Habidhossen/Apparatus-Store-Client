import React, { useEffect, useState } from "react";
import MyOrderRow from "../MyOrderRow/MyOrderRow";

const MyOrder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/order";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, []);

  console.log(orders);

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
              <MyOrderRow key={order._id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
