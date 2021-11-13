import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import { loadPersonList, toogleList } from "./../../../store/actions/persons";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  const isError = useSelector((state) => state.cardListReducer.isError);
  const isLoader = useSelector((state) => state.cardListReducer.isLoader);
  const isList = useSelector((state) => state.cardListReducer.isList);

  const toogle = () => {
    dispatch(toogleList());
  };

  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);

  return (
    <CardList
      persons={persons}
      isLoader={isLoader}
      isError={isError}
      isList={isList}
      toogle={toogle}
    />
  );
};

export const container = PersonsListContainer;
