import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import FullCard from "./component";
import Loader from "./../../atoms/Loader";
import { loadPersonList } from "./../../../store/actions/persons";

export const PersonFullCardContainer = () => {
  const dispatch = useDispatch();
  let person = null;
  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);
  const { id } = useParams();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  person = persons.filter((pers) => String(pers.char_id) === id)[0];

  return person ? <FullCard person={person} /> : <Loader />;
};

export const container = PersonFullCardContainer;
