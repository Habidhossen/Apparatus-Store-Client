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

  const url = `https://guarded-reaches-73348.herokuapp.com/order/${id}`;
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
        <div className="card-body shadow-sm bg-base-100">
          <h1 className="text-2xl font-bold">
            Hello,{" "}
            <span className="text-green-500">
              {orderedProduct.customerName}
            </span>
          </h1>
          <h3>
            Payment for{" "}
            <span className="font-bold">{orderedProduct?.productName}</span>
          </h3>
          <p>Email: {orderedProduct.email}</p>
          <h1 className="text-xl font-bold">
            Total Price: ${orderedProduct.totalPrice}
          </h1>
        </div>
        <div className="card shadow-md bg-base-100 p-6">
          <Elements stripe={stripePromise}>
            <CheckOutForm orderedProduct={orderedProduct} />
          </Elements>
        </div>
      </div>
    </section>
  );
};

export default Payment;
