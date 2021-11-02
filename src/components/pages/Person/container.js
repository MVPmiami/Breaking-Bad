import React from "react";
import { useDispatch } from "react-redux";
import Person from "./component";
import { cleanCurrentPerson } from "./../../../store/actions/persons";

export const PersonPageContainer = () => {
  const dispatch = useDispatch();
  const cleanPerson = () => {
    dispatch(cleanCurrentPerson());
  };

  return <Person cleanPerson={cleanPerson} />;
};

export const container = PersonPageContainer;
