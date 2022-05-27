import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const { productID } = useParams(); // get productId from params
  const [productTotalPrice, setProductTotalPrice] = useState("");

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const {
    data: product,
    isLoading,
    refetch,
  } = useQuery("product", () =>
    fetch(
      `https://guarded-reaches-73348.herokuapp.com/product/${productID}`
    ).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }

  const onSubmit = (data) => {
    const totalPrice = product.price * data.orderQuantity;
    setProductTotalPrice(totalPrice);
    const productName = product.name;
    const customerName = data.name;
    const email = data.email;
    const phone = data.phone;
    const address = data.address;
    const orderQuantity = data.orderQuantity;

    //get all item in one array
    const order = {
      productName,
      customerName,
      email,
      phone,
      address,
      orderQuantity,
      totalPrice,
    };

    // send data to the server
    const url = "https://guarded-reaches-73348.herokuapp.com/order";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((response) => response.json())
      .then((data) => data);
    reset();
    toast.success("Product Ordered successfully", {
      theme: "colored",
      autoClose: 2000,
    });
  };

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

          <h3 className="text-xl font-bold">
            Price: <b>${product.price}</b>
          </h3>
          <h1>Description: {product.desc}</h1>
          <h1>
            Available Quantity: <b>{product.availableQuantity}</b>
          </h1>
          <h1>
            Minimum Order Quantity: <b>{product.minimumOrderQuantity}</b>
          </h1>

          <h1 className="text-2xl font-bold mt-3">
            Total Price: {productTotalPrice}
          </h1>
        </div>
        <div>
          <div className="card shadow-sm bg-base-100">
            <div className="card-body">
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    defaultValue={user?.displayName}
                    className="input input-bordered"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Name is Required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    value={user?.email}
                    className="input input-bordered"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Email is Required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Enter phone"
                    className="input input-bordered"
                    {...register("phone", { required: true })}
                  />
                  {errors.phone && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Phone is Required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Address</span>
                  </label>
                  <textarea
                    className="textarea textarea-bordered"
                    placeholder="Enter address"
                    {...register("address", { required: true })}
                  ></textarea>
                  {errors.address && (
                    <span className="label-text-alt text-red-500 mt-2">
                      Address is Required
                    </span>
                  )}
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Enter Order Quantity</span>
                  </label>
                  <input
                    type="number"
                    defaultValue={product.minimumOrderQuantity}
                    className="input input-bordered"
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
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Order</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Purchase;
