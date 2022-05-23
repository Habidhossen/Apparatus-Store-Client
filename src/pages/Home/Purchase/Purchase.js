import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useParams } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const { productID } = useParams(); // get productId from params
  const [product, setProduct] = useState({});

  console.log(user);

  useEffect(() => {
    const url = `http://localhost:5000/product/${productID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  return (
    <section className="bg-gray-50 px-12 py-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="card shadow-sm bg-base-100">
          {" "}
          <img src={product.img} alt="" />
        </div>
        <div className="card shadow-sm bg-base-100 p-6">
          <h1 className="text-2xl font-bold">{product.name}</h1>
          <p className="text-sm mt-2">ID: {product._id}</p>

          <h3>Price: {product.price}</h3>
          <h1>description: {product.desc}</h1>
          <h1>available Quantity: {product.availableQuantity}</h1>
          <h1>minimum Order Quantity: {product.minimumOrderQuantity}</h1>
        </div>
        <div>
          <div class="card shadow-sm bg-base-100">
            <div class="card-body">
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Name</span>
                </label>
                <input
                  type="text"
                  value={user?.displayName}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <input
                  type="text"
                  value={user?.email}
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Phone</span>
                </label>
                <input
                  type="text"
                  placeholder="Enter phone"
                  class="input input-bordered"
                />
              </div>
              <div class="form-control">
                <label class="label">
                  <span class="label-text">Address</span>
                </label>
                <textarea
                  class="textarea textarea-bordered"
                  placeholder="Enter address"
                ></textarea>
              </div>

              <div class="form-control">
                <label class="label">
                  <span class="label-text">Enter Order Quantity</span>
                </label>
                <input
                  type="number"
                  value={product.minimumOrderQuantity}
                  class="input input-bordered"
                />
              </div>

              <div class="form-control mt-6">
                <button class="btn btn-primary">Order</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
