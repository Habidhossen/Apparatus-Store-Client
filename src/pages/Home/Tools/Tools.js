import React, { useEffect, useState } from "react";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/product";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-4xl font-extrabold text-center mb-6">Our Tools</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-16">
        {tools.map((singleTool) => (
          <Tool key={singleTool._id} singleTool={singleTool} />
        ))}
      </div>
    </section>
  );
};

export default Tools;
