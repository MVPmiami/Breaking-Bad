import React from "react";
import { useDispatch } from "react-redux";
import Person from "./component";
import { cleanCurrentPerson } from "./../../../store/actions/persons";

export const PersonPageContainer = () => {
  const dispatch = useDispatch();
  const cleanData = () => {
    dispatch(cleanCurrentPerson());
  };

  return <Person cleanData={cleanData} />;
};

export const container = PersonPageContainer;
