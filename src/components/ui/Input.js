import React from "react";

const Input = ({ name, type = "text", placeholder }) => {
  return (
    <>
      <label
        htmlFor={name}
        className="label"
      >
        {name}
      </label>
      <input
        type={type}
        id={name}
        className="input"
        placeholder={placeholder}
        required
      />
    </>
  );
};

export default Input;
