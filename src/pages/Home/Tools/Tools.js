import React from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  const Tools = [
    {
      _id: 1,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
    {
      _id: 2,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
    {
      _id: 3,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
    {
      _id: 4,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
    {
      _id: 5,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
    {
      _id: 6,
      name: "Hammer",
      img: "https://tolsen.com.ph/wp-content/uploads/2021/03/products-25158-25160.jpg",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, rerum?",
      price: "500",
      minimumOrderQuantity: 20,
      availableQuantity: 50,
    },
  ];

  return (
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {Tools.map((singleTool) => (
          <Tool key={singleTool._id} singleTool={singleTool} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
