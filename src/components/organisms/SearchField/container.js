import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SearchField from "./component";
import {
  getSearchName,
  getSearchPersons,
} from "../../../store/actions/persons";

export const SearchFieldContainer = () => {
  const dispatch = useDispatch();
  const name = useSelector((state) => state.cardListReducer.searchName);

  const searchName = (name) => {
    dispatch(getSearchName(name));
  };

  const searchPersons = (name) => {
    dispatch(getSearchPersons(name));
  };

  return (
    <>
      <SearchField
        searchName={searchName}
        name={name}
        searchPersons={searchPersons}
      />
    </>
  );
};

export const container = SearchFieldContainer;
