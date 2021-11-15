import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import Pagination from "../../molecules/Pagination";
import {
  loadPersonList,
  toogleList,
  getCurrentPage,
  getAmountCards,
} from "./../../../store/actions/persons";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  const isError = useSelector((state) => state.cardListReducer.isError);
  const isLoader = useSelector((state) => state.cardListReducer.isLoader);
  const isList = useSelector((state) => state.cardListReducer.isList);
  const currentPage = useSelector((state) => state.cardListReducer.currentPage);
  const personPerPage = useSelector(
    (state) => state.cardListReducer.personPerPage
  );

  const lastPersonIndex = currentPage * personPerPage;
  const firstPersonIndex = lastPersonIndex - personPerPage;
  const currentPersons = persons.slice(firstPersonIndex, lastPersonIndex);
  const totalPages = Math.ceil(persons.length / personPerPage);

  const paginate = (currentPage) => {
    dispatch(getCurrentPage(currentPage));
  };

  const paginateToNextPage = (currentPage) => {
    currentPage + 1 <= totalPages
      ? dispatch(getCurrentPage(currentPage + 1))
      : dispatch(getCurrentPage(currentPage));
  };

  const paginateToPrevPage = (currentPage) => {
    currentPage - 1 <= 0
      ? dispatch(getCurrentPage(currentPage))
      : dispatch(getCurrentPage(currentPage - 1));
  };

  const changeAmountCards = (amount) => {
    dispatch(getAmountCards(amount));
    dispatch(getCurrentPage(1));
  };

  const toogle = () => {
    dispatch(toogleList());
  };

  useEffect(() => {
    dispatch(loadPersonList());
  }, [dispatch]);

  return (
    <div>
      <CardList
        persons={currentPersons}
        isLoader={isLoader}
        isError={isError}
        isList={isList}
        toogle={toogle}
      />
      <Pagination
        personPerPage={personPerPage}
        totalPersons={persons.length}
        paginate={paginate}
        currentPage={currentPage}
        paginateToNextPage={paginateToNextPage}
        paginateToPrevPage={paginateToPrevPage}
        changeAmountCards={changeAmountCards}
      />
    </div>
  );
};

export const container = PersonsListContainer;
