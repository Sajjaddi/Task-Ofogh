import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import EstateItem from "../components/EstateItem";
import Header from "../components/Header";
import Pagination from "../components/Pagination";
import { uiAction } from "../store/uiSlice";

const EstateList = () => {
  const [estates, setEstates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const dispatch = useDispatch();

  const recordsPerPage = 2;
  const indexOfLastRecord = currentPage * recordsPerPage;
  const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
  let currentRecords = [];

  currentRecords = estates.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(estates.length / recordsPerPage);

  const fetchData = async () => {
    dispatch(uiAction.isLoading(true));
    const response = await fetch("http://localhost:4000/estates");
    const data = await response.json();
    setEstates(data);
    dispatch(uiAction.isLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Header title={"estates"} nameButton={"create new estate"} path="/new-estate" />
      <ul className="px-52 py-10 grid grid-rows-1 grid-cols-2 gap-16">
        {currentRecords.map((estate) => (
          <EstateItem key={estate.id} id={estate.id} address={estate.address} />
        ))}
      </ul>
      <Pagination
        currentPage={currentPage}
        nPages={nPages}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
};

export default EstateList;
