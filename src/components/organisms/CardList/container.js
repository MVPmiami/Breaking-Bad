import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import CardList from "./component";
import Pagination from "../../molecules/Pagination";
import {
  loadPersonList,
  toogleList,
  getCurrentPage,
  getAmountCards,
  getAmountCharacters,
} from "./../../../store/actions/persons";

export const PersonsListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.cardListReducer.cardList);
  const isError = useSelector((state) => state.cardListReducer.isError);
  const isLoader = useSelector((state) => state.cardListReducer.isLoader);
  const isList = useSelector((state) => state.cardListReducer.isList);
  const currentPage = useSelector((state) => state.cardListReducer.currentPage);
  let prevPageNumber = currentPage - 1;
  const amountCharacters = useSelector(
    (state) => state.cardListReducer.amountCharacters
  );
  const personPerPage = useSelector(
    (state) => state.cardListReducer.personPerPage
  );
  const searchPersons = useSelector(
    (state) => state.cardListReducer.searchPersons
  );

  const lastPersonIndex = currentPage * personPerPage;
  const firstPersonIndex = lastPersonIndex - personPerPage;
  const currentPersons = persons.slice(0, persons.length);
  const totalPages = Math.ceil(amountCharacters / personPerPage);

  const paginate = (currentPage) => {
    currentPage === "..."
      ? dispatch(getCurrentPage(prevPageNumber + 3))
      : dispatch(getCurrentPage(currentPage));
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
    dispatch(loadPersonList(personPerPage, firstPersonIndex));
    dispatch(getAmountCharacters());
  }, [personPerPage, amountCharacters, currentPage]);

  return (
    <div>
      <CardList
        persons={searchPersons.length ? searchPersons: currentPersons}
        isLoader={isLoader}
        isError={isError}
        isList={isList}
        toogle={toogle}
      />
      <Pagination
        personPerPage={personPerPage}
        totalPersons={amountCharacters}
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
