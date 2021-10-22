import React from "react";
import { useSelector } from "react-redux";
import CardList from "./component";

export const PersonsListContainer = () => {
  const persons = useSelector((state) => state.cardListReducer.cardList);
  return <CardList persons={persons} />;
};

export const container = PersonsListContainer;
