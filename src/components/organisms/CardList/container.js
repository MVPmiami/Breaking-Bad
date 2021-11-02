import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { loadPersonList } from "./../../../store/actions/persons";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  const isError = useSelector((state) => state.cardListReducer.isError);
  const isLoader = useSelector((state) => state.cardListReducer.isLoader);

  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);

  return <CardList persons={persons} isLoader={isLoader} isError={isError} />;
};

export const container = PersonsListContainer;
