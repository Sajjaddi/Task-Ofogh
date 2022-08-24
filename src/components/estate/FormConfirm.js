import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { uiAction } from "../../store/uiSlice";
import LeafletMap from "../LeafletMap/LeafletMap";
import Input from "../ui/Input";

const FormConfirm = ({ setIsShowForm, id }) => {
  const [position, setPosition] = useState(null);
  const dispatch = useDispatch()

  const updateEstate = (tel, address, description, coordinates) => {

    fetch(`http://localhost:4000/estates/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        id: id,
        tel: tel,
        address: address,
        description: description,
        coordinates: coordinates,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(uiAction.toggleShow())
    dispatch(uiAction.showNotification({
        status: "Success",
        message: 'Update estate is success!.'
    }))
    setIsShowForm(false)
  };

  

  const formClickHandler = (e) => {
    e.preventDefault();
    const telValue = e.target[0].value;
    const addressValue = e.target[1].value;
    const descriptionValue = e.target[2].value;
    const roundedPostion = {
      lat: +position.lat.toFixed(3),
      lng: +position.lng.toFixed(3),
    };
    updateEstate(telValue, addressValue, descriptionValue, roundedPostion);
  };

  return (
    <div className="fixed left-0 right-0 bottom-0 z-50 top-0 bg-opacity-60 py-20 h-full w-full  bg-black">
      <form
        onSubmit={formClickHandler}
        className="px-6 py-5 w-2/4 mx-auto bg-slate-200 rounded-lg"
      >
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <Input name={"New Phone Number :"} placeholder="09.." type="text" />
          </div>
          <div>
            <Input name={"New Address :"} placeholder="Tehran..." type="text" />
          </div>
        </div>
        <div className="my-2">
          <Input
            name={"New Description :"}
            placeholder="house is big..."
            type="text"
          />
        </div>
        <LeafletMap position={position} setPosition={setPosition} />
        <div className="text-center mt-8 flex justify-between">
          <button
            type="submit"
            className="text-white w-20 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Submit
          </button>
          <button
            type="button"
            onClick={() => setIsShowForm(false)}
            className="text-white w-20 bg-rose-600 hover:bg-rose-800 focus:ring-4 focus:outline-none focus:ring-rose-300 font-medium rounded-lg text-sm px-4 py-2"
          >
            Exit
          </button>
        </div>
      </form>
    </div>
  );
};

export default FormConfirm;
