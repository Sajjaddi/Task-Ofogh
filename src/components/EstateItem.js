import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../assets/img/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";

const EstateItem = ({ address, id }) => {
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate(`/estate/${id}`);
  };

  return (
    <li
      onClick={navigateHandler}
      className="bg-slate-200 max-w-xs cursor-pointer hover:scale-110 transition-all"
    >
      <img src={img} alt="house" className="rounded-t" />
      <div className="rounded-b text-sm w-full text-gray-800 bg-slate-400 px-3 py-3 flex justify-between">
        <p className="">Address :</p>
        <p className="capitalize">{address}</p>
      </div>
    </li>
  );
};

export default EstateItem;
