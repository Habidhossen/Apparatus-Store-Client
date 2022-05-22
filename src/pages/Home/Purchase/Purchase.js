import React from "react";
import { useParams } from "react-router-dom";

const Purchase = () => {
  const { Id } = useParams;

  return (
    <div>
      <h1>Purchase Here</h1>
    </div>
  );
};

export default Purchase;
