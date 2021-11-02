import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FullCard from "./component";
import { loadPersonById } from "./../../../store/actions/persons";

export const PersonFullCardContainer = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const person = useSelector((state) => state.cardListReducer.currentPerson);
  const isError = useSelector(
    (state) => state.cardListReducer.isErrorCurrentPerson
  );
  const isLoader = useSelector(
    (state) => state.cardListReducer.isLoadCurrentPerson
  );

  useEffect(() => {
    dispatch(loadPersonById(id));
  }, [dispatch]);

  return <FullCard person={person} isError={isError} isLoader={isLoader} />;
};

export const container = PersonFullCardContainer;
