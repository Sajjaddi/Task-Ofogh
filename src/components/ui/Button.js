import React from "react";

const Button = ({ onClick, name }) => {
  return (
    <input
      onClick={onClick}
      type="submit"
      data-mdb-ripple="true"
      data-mdb-ripple-color="light"
      className="button-greadiant"
      value={name}
    />
  );
};

export default Button;
