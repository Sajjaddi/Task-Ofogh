import React from "react";
import img from "../assets/img/paul-hanaoka-5Za2sS955yg-unsplash.jpg";

const RightSide = () => {
  return (
    <div className="hidden sm:block w-2/4">
      <img className="h-full" src={img} alt="" />
    </div>
  );
};

export default RightSide;
