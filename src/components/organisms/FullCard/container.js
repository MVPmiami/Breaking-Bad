import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import FullCard from "./component";
import ErrorMessage from "./../../atoms/Error";

export const PersonFullCardContainer = () => {
  const { id } = useParams();
  let person = null;
  const persons = useSelector((state) => state.cardListReducer.cardList);
  person = persons.filter((pers) => String(pers.char_id) === id)[0];

  return person ? (
    <FullCard person={person} />
  ) : (
    <ErrorMessage messege={"person not found"} />
  );
};

export const container = PersonFullCardContainer;
