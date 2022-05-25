import React, { useEffect, useState } from "react";

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
      <div class="overflow-x-auto p-12">
        <h1 className="text-2xl font-bold mb-4">My Orders</h1>
        <table class="table w-full">
          {/* <!-- head --> */}
          <thead>
            <tr>
              <th>Product</th>
              {/* <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Address</th>
              <th>Order Quantity</th>
              <th>Total Price</th>
              <th>Action</th> */}
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => {
              console.log(order);
              <tr>
                <td>{order.productName}</td>;
              </tr>;
            })}

            {/* <tr>
              <th>{order.productName}</th>
              <td>{order.customerName}</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr> */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
