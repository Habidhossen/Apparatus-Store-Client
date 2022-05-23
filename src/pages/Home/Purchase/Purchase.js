import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";

const Purchase = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const { productID } = useParams(); // get productId from params
  const [product, setProduct] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/product/${productID}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = (data) => console.log(data);

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

          <h3>Price: TK {product.price}</h3>
          <h1>description: {product.desc}</h1>
          <h1>available Quantity: {product.availableQuantity}</h1>
          <h1>minimum Order Quantity: {product.minimumOrderQuantity}</h1>
        </div>
        <div>
          <div class="card shadow-sm bg-base-100">
            <div class="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    class="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Name is Required
                    </span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    class="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Email is Required
                    </span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    class="input input-bordered"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Phone is Required
                    </span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Address</span>
                  </label>
                  <textarea
                    class="textarea textarea-bordered"
                    placeholder="Enter address"
                    {...register("address", { required: true })}
                  ></textarea>
                  {errors.address && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Address is Required
                    </span>
                  )}
                </div>
                <div class="form-control">
                  <label class="label">
                    <span class="label-text">Enter Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={product.minimumOrderQuantity}
                    class="input input-bordered"
                    {...register("orderQuantity", {
                      required: {
                        value: true,
                        message: "Minimum Order Quantity is Required",
                      },
                      min: {
                        value: product.minimumOrderQuantity,
                        message:
                          "Minimum order quantity at least " +
                          product.minimumOrderQuantity,
                      },
                      max: {
                        value: product.availableQuantity,
                        message:
                          "Maximum order quantity is " +
                          product.availableQuantity,
                      },
                    })}
                  />
                  {errors.orderQuantity?.type === "required" && (
                    <span className="label-text-alt text-red-500 mt-2">
                      {errors.orderQuantity.message}
                    </span>
                  )}
                  {errors.orderQuantity?.type === "min" && (
                    <span className="label-text-alt text-red-500 mt-2">
                      {errors.orderQuantity.message}
                    </span>
                  )}
                  {errors.orderQuantity?.type === "max" && (
                    <span className="label-text-alt text-red-500 mt-2">
                      {errors.orderQuantity.message}
                    </span>
                  )}
                </div>
                <div class="form-control mt-6">
                  <button class="btn btn-primary">Purchase</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
