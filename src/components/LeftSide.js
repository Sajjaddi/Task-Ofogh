import React from "react";
import { Link } from "react-router-dom";
import Input from "./ui/Input";

const LeftSide = ({ name, onSubmit }) => {
  let context = "";
  if (name === "Login") {
    context = "Sign in";
  } else if (name === "Sign in") {
    context = "Login";
  }
  return (
    <div className="w-full  sm:w-2/4 bg-blue-100  px-20 lg:px-40 py-32 2xl:px-64 ">
      <h3 className="text-3xl">Welcome</h3>
      <p className="mt-2 text-xs text-gray-400">Please enter your details.</p>
      <form className="mt-10" onSubmit={onSubmit}>
        <div>
          <Input
            placeholder={"Enter your email"}
            type={"email"}
            name={"Email"}
          />
        </div>
        <div className="mt-4">
          <Input
            placeholder={"Enter your password"}
            type={"password"}
            name={"Password"}
          />
        </div>
        <input
          type={"submit"}
          value={name}
          className="mt-5 w-full button-greadiant mr-2 mb-2"
        />
      </form>
      <div className="text-center">
        <span className="text-xs mr-1">
          {context === "Login"
            ? "Do you have an account?"
            : "Don't have an account?"}
        </span>
        <span className="text-sm text-blue-600">
          <Link to={`/${context.replace(/\s/g, "")}`}>{context}</Link>
        </span>
      </div>
    </div>
  );
};

export default LeftSide;
