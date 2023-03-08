import React from "react";
import { BeatLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="h-[400px] flex items-center justify-center">
      <BeatLoader color="#00a9a4" />
    </div>
  );
};

export default Loading;
