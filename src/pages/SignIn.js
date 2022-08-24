import React from "react";
import LeftSide from "../components/LeftSide";
import RightSide from "../components/RightSide";
import { useDispatch } from "react-redux";
import { fetchData } from "../store/authAction";

const SignIn = () => {
  const dispatch = useDispatch();

  const formHandler = (event) => {
    event.preventDefault();
    const emailValue = event.nativeEvent.srcElement[0].value;
    const passwordValue = event.nativeEvent.srcElement[1].value;
    dispatch(fetchData(emailValue, passwordValue, false));
  };

  return (
    <div className="flex h-screen">
      <LeftSide name={"Sign in"} onSubmit={formHandler} />
      <RightSide />
    </div>
  );
};

export default SignIn;
