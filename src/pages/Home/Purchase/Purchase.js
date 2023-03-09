import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useForm } from "react-hook-form";
import { BsCartCheck, BsCheck2Circle } from "react-icons/bs";
import { useQuery } from "react-query";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../../Firebase/firebase.init";
import Loading from "../../Shared/Loading/Loading";

const Purchase = () => {
  const [user] = useAuthState(auth); // get user info from useAuthState
  const { productID } = useParams(); // get productId from params
  const [productTotalPrice, setProductTotalPrice] = useState("");
  const navigate = useNavigate();

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
    fetch(`http://localhost:5000/product/${productID}`).then((res) =>
      res.json()
    )
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
    const url = "http://localhost:5000/order";
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
    navigate("/dashboard/order");
  };

  return (
    <section className="bg-gray-50 px-40 py-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
        <div className="card space-y-2 shadow-xs rounded-lg bg-base-100 p-6">
          <div className="flex justify-center">
            <img className="w-72" src={product.img} alt="" />
          </div>
          <p className="text-sm text-text">Product ID: {product._id}</p>
          <h1 className="text-2xl text-heading font-bold">{product.name}</h1>
          <div className="flex items-center gap-3">
            <del className="text-lg text-text font-semibold">
              ${Number(product.price) + 100}
            </del>
            <h6 className="text-2xl font-bold text-primary">
              ${product.price}
            </h6>
          </div>
          <h6 className="flex items-center gap-1 text-sm text-text font-semibold">
            <BsCheck2Circle className="text-secondary" /> Available Quantity:{" "}
            <span className="text-accent font-bold">
              {product.availableQuantity}
            </span>
          </h6>
          <h6 className="flex items-center gap-1 text-sm text-text font-semibold">
            <BsCheck2Circle className="text-secondary" /> Minimum Order
            Quantity:{" "}
            <span className="text-accent font-bold">
              {product.minimumOrderQuantity}
            </span>
          </h6>
        </div>
        <div>
          <div className="card shadow-sm rounded-lg bg-base-100">
            <div className="card-body">
              <h1 className="text-xl font-bold text-center mb-6">
                Place your order now
              </h1>
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
                  <button className="flex items-center justify-center gap-2 w-full bg-accent hover:bg-teal-600 transition duration-150 text-white text-sm font-semibold py-3 rounded">
                    Place Order <BsCartCheck />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Description Collapse */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 rounded-lg mt-4"
      >
        <input type="checkbox" />
        <div className="collapse-title text-md font-semibold text-heading">
          Description
        </div>
        <div className="collapse-content">
          <p className="text-sm text-text">{product.desc}</p>
        </div>
      </div>
      {/* Refund Policy Collapse */}
      <div
        tabIndex={0}
        className="collapse collapse-plus bg-base-100 rounded-lg mt-1 mb-4"
      >
        <input type="checkbox" />
        <div className="collapse-title text-md font-semibold text-heading">
          Shipping Information
        </div>
        <div className="collapse-content">
          <p className="text-sm text-text">
            <b>Returns Policy</b>
            <br />
            Thank you for choosing our tools. We take pride in the quality of
            our products and want you to be completely satisfied with your
            purchase. If for any reason you are not satisfied, please contact us
            within 30 days of receiving your order to initiate a return. We will
            issue a refund once we receive the returned item(s) in their
            original condition. Please note that shipping fees are
            non-refundable and the customer is responsible for return shipping
            costs. We reserve the right to reject returns that do not meet our
            return policy criteria.
            <br />
            <br />
            <b>Shipping</b>
            <br />
            We offer shipping within the Bangladesh and internationally.
            Domestic orders typically take 3-5 business days to arrive, while
            international orders may take longer depending on the destination.
            Shipping costs are calculated at checkout based on the weight and
            destination of the order. Please note that any customs fees, taxes,
            or duties imposed by the destination country are the responsibility
            of the customer. If you have any questions or concerns about
            shipping, please contact us and we will be happy to assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Purchase;
