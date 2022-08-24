import React from "react";
import FormNewEstate from "../components/FormNewEstate";
import Header from "../components/Header";

const NewEstate = () => {
  return (
    <div className="bg-slate-200 min-h-screen">
      <Header path={'/'} title={'Create new estate'} nameButton={'estates'} />
      <FormNewEstate />
    </div>
  );
};

export default NewEstate;
