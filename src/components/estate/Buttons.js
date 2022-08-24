import React from "react";

const Buttons = ({ deleteTodoHandler, setIsShowForm }) => {
  return (
    <div className="mt-2 flex justify-between">
      <button
        onClick={() => setIsShowForm(true)}
        type="submit"
        className="text-white w-20 bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Change
      </button>
      <button
        onClick={deleteTodoHandler}
        type="submit"
        className="text-white w-20 bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2"
      >
        Delete
      </button>
    </div>
  );
};

export default Buttons;
