import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { loadPersonList } from "./../../../store/actions/persons";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);
  return <CardList persons={persons} />;
};

export const container = PersonsListContainer;
