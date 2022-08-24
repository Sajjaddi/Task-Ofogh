import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import img from "../assets/img/francesca-tosolini-tHkJAMcO3QE-unsplash.jpg";
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { uiAction } from "../store/uiSlice";
import MapLeaflet from "../components/estate/MapLeaflet";
import Buttons from "../components/estate/Buttons";
import FormConfirm from "../components/estate/FormConfirm";

const Estate = () => {
  const [estate, setEstate] = useState({});
  const [isShowForm, setIsShowForm] = useState(false);
  const { isLoading } = useSelector((store) => store.ui);
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchEstateItem = async () => {
    const response = await fetch(`http://localhost:4000/estates?id=${id}`);
    const data = await response.json();
    setEstate(...data);
    dispatch(uiAction.isLoading(false));
  };

  useEffect(() => {
    dispatch(uiAction.isLoading(true));
    fetchEstateItem();
  }, [isShowForm]);

  const deleteTodoHandler = () => {
    let userMessage = window.confirm("Are you sure delete the estate");
    if (userMessage) {
      dispatch(uiAction.isLoading(true));
      fetch(`http://localhost:4000/estates/${id}`, {
        method: "DELETE",
        headers: {
          Accept: "application/json",
        },
      });
      dispatch(uiAction.isLoading(false));
      dispatch(uiAction.toggleShow());
      dispatch(
        uiAction.showNotification({
          status: "Success",
          message: "Estate is Deleted!",
        })
      );
      navigate("/");
    }
  };

  return (
    <>
      <Header title={'Estate'} nameButton={"estates"} path={"/"} />
      {isShowForm ? (
        <FormConfirm id={id} setIsShowForm={setIsShowForm} />
      ) : null}
      {!isLoading ? (
        <div className="mt-4 w-3/4 mx-auto bg-slate-300 rounded flex h-1/2">
          <img src={img} alt="house" className="rounded-l max-w-lg" />
          <div className="text-gray-800  px-3 py-3 w-full">
            <p className="text-lg capitalize">{estate.address}</p>
            <p className="mt-1 capitalize">
              Description : {estate.description}
            </p>
            <p className="mt-1 capitalize">Phone Number : {estate.tel}</p>
            <div className=" mx-auto mt-2">
              {estate.coordinates ? (
                <MapLeaflet position={estate.coordinates} />
              ) : null}
            </div>
            <Buttons
              deleteTodoHandler={deleteTodoHandler}
              setIsShowForm={setIsShowForm}
            />
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Estate;
