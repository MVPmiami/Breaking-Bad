import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPersonsList } from "./../../../store/actions/persons";
import CardList from "./component";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);

  useEffect(() => {
    dispatch(getPersonsList());
  }, [dispatch]);

  return <CardList persons={persons} />;
};

export const container = PersonsListContainer;
