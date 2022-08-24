import React, { useState } from "react";
import LeafletMap from "./LeafletMap/LeafletMap";
import Input from "./ui/Input";
import Button from "./ui/Button";
import { useNavigate } from "react-router-dom";
import { uiAction } from "../store/uiSlice";
import { useDispatch } from "react-redux";

const FormNewEstate = () => {
  const [position, setPosition] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const putNewEstate = async (tel, address, description, coordinates) => {
    dispatch(uiAction.isLoading(true));
    const response = await fetch("http://localhost:4000/estates", {
      method: "POST",
      body: JSON.stringify({
        id: Math.floor(Math.random() * 100),
        tel: tel,
        address: address,
        description: description,
        coordinates: coordinates,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(uiAction.isLoading(false));
    if (response.ok) {
      navigate("/");
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Success",
          message: "Todo is Created!",
        })
      );
    }
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    const telValue = e.target[0].value;
    const addressValue = e.target[1].value;
    const descriptionValue = e.target[2].value;
    const roundedPostion = {
      lat: +position.lat.toFixed(3),
      lng: +position.lng.toFixed(3),
    };
    putNewEstate(telValue, addressValue, descriptionValue, roundedPostion);
  };

  return (
    <div>
      <form onSubmit={formSubmitHandler} className="px-6 py-5 w-2/4 mx-auto">
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input name={"Phone number"} placeholder="09.." type="tel" />
          </div>
          <div className="">
            <Input placeholder="Tehran..." name={"Address"} />
          </div>
        </div>
        <div className="my-3">
          <Input placeholder="My estate is ..." name={"Description"} />
        </div>
        <LeafletMap position={position} setPosition={setPosition} />
        <div className="text-center mt-3">
          <Button name={"Submit"} />
        </div>
      </form>
    </div>
  );
};

export default FormNewEstate;
