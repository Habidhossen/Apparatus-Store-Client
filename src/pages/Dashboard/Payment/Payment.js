import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/Loading/Loading";
import CheckOutForm from "./CheckOutForm";

const stripePromise = loadStripe(
  "pk_test_51L3zvHFSjtbaaYgHyzMnugX36Y5phYLbitqy5JnOK7bsGitWeaUplazcY3HYziARqdnp5jyxVg5a0COdNHJFY4oL0000NzNT62"
);

const Payment = () => {
  const { id } = useParams();

  const url = `http://localhost:5000/order/${id}`;
  const {
    data: orderedProduct,
    isLoading,
    refetch,
  } = useQuery("orderedProduct", () => fetch(url).then((res) => res.json()));

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="bg-gray-50 px-6 py-6">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
        <div className="card-body shadow-lg rounded-xl bg-white space-y-2">
          <h1 className="text-lg text-text font-bold">
            Welcome back,{" "}
            <span className="text-secondary">
              {orderedProduct.customerName}
            </span>
          </h1>
          <h6 className="text-sm text-text">
            Payment for{" "}
            <span className="font-semibold">{orderedProduct?.productName}</span>
          </h6>
          <h6 className="text-sm text-text">
            Product ID:{" "}
            <span className="font-semibold">{orderedProduct?._id}</span>
          </h6>
          <h6 className="text-sm text-text">
            Customer Email:{" "}
            <span className="font-semibold">{orderedProduct.email}</span>
          </h6>
          <h6 className="text-sm text-text">
            Customer Address:{" "}
            <span className="font-semibold">{orderedProduct.address}</span>
          </h6>
          <h6 className="text-sm text-text">
            Price:{" "}
            <span className="font-semibold">
              ${orderedProduct.totalPrice / orderedProduct.orderQuantity}
            </span>
          </h6>
          <h6 className="text-sm text-text">
            Ordered Quantity:{" "}
            <span className="font-semibold">
              ${orderedProduct.orderQuantity}
            </span>
          </h6>
          <hr />
          <h6 className="text-heading font-medium">
            Total Price:{" "}
            <span className="font-bold">${orderedProduct.totalPrice}</span>
          </h6>
        </div>
        <div className="card-body shadow-lg rounded-xl bg-white">
          <Elements stripe={stripePromise}>
            <CheckOutForm orderedProduct={orderedProduct} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
