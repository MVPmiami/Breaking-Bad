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
    if (name) {
      dispatch(getSearchName(name.trim().toLowerCase()));
    }
  };

  const searchPersons = (name) => {
    if (name) {
      dispatch(getSearchPersons(name.trim().toLowerCase()));
    }
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
