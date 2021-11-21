import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
  LOAD_CURRENT_PERSON,
  CHANGE_STATUS_LOADER_CURRENT_PERSON,
  GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON,
  CLEAN_CURRENT_PERSON,
  GET_QUOTE,
  TOOGLE_LIST,
  GET_CURRENT_PAGE,
  GET_PERSON_PER_PAGE,
  GET_AMOUNT_CHARACTERS,
  GET_SEARCH_NAME,
  GET_SEARCH_PERSONS,
} from "./../actionTypes/exportActions";
import Repository from "../../repository";

export const getSearchName = (payload) => {
  return { type: GET_SEARCH_NAME, payload: payload };
};

export const setSearchPersons = (payload) => {
  return { type: GET_SEARCH_PERSONS, payload: payload };
};

export const getSearchPersons = (name) => async (dispatch) => {
  dispatch(changeStatusForLoader(true));
  const { value, error } = await Repository.APISearchPersonByName.searchPerson(
    name
  );
  console.log(error);
  !value.length && name !== " "
    ? dispatch(getErrorWhenUpload(true))
    : dispatch(
        setSearchPersons(value),
        dispatch(changeStatusForLoader(false)),
        dispatch(getErrorWhenUpload(false))
      );
};

export const getPersonsList = (payload) => {
  return { type: LOAD_PERSONS, payload: payload };
};

export const getCurrentPerson = (value) => {
  return { type: LOAD_CURRENT_PERSON, payload: value };
};

export const changeStatusForLoader = (value) => ({
  type: CHANGE_STATUS_LOADER,
  payload: value,
});

export const getErrorWhenUpload = (value) => ({
  type: GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  payload: value,
});

export const loadPersonList =
  (personPerPage, firstPersonIndex) => async (dispatch) => {
    dispatch(changeStatusForLoader(true));
    const { value, error } = await Repository.APICardsList.getCardList(
      personPerPage,
      firstPersonIndex
    );
    error || !value
      ? dispatch(getErrorWhenUpload(true))
      : dispatch(getPersonsList(value), dispatch(changeStatusForLoader(false)));
  };

export const getAmountCharacters = () => async (dispatch) => {
  dispatch(changeStatusForLoader(true));
  const { value, error } =
    await Repository.APIAmountCharacters.getAmountChars();
  error || !value
    ? dispatch(getErrorWhenUpload(true))
    : dispatch(
        setAmountCharacters(value),
        dispatch(changeStatusForLoader(false))
      );
};

export const changeStatusForLoaderCurrentPerson = (value) => ({
  type: CHANGE_STATUS_LOADER_CURRENT_PERSON,
  payload: value,
});

export const setAmountCharacters = (value) => ({
  type: GET_AMOUNT_CHARACTERS,
  payload: value,
});

export const getErrorWhenUploadCurrentPerson = (value) => ({
  type: GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON,
  payload: value,
});

export const cleanCurrentPerson = () => ({
  type: CLEAN_CURRENT_PERSON,
});

export const loadPersonById = (id) => async (dispatch) => {
  dispatch(changeStatusForLoaderCurrentPerson(true));
  dispatch(getErrorWhenUploadCurrentPerson(false));
  const { value, error } = await Repository.APICurrentPerson.getCurrentPerson(
    id
  );
  error || !value
    ? dispatch(getErrorWhenUploadCurrentPerson(true))
    : dispatch(
        getCurrentPerson(value),
        dispatch(changeStatusForLoaderCurrentPerson(false))
      );
};

export const loadQuote = (quote) => {
  return { type: GET_QUOTE, payload: quote };
};

export const toogleList = () => {
  return { type: TOOGLE_LIST };
};

export const getCurrentPage = (payload) => {
  return { type: GET_CURRENT_PAGE, payload: payload };
};

export const getAmountCards = (payload) => {
  return { type: GET_PERSON_PER_PAGE, payload: payload };
};

export const loadQuoteByAuthor = (author) => async (dispatch) => {
  dispatch(changeStatusForLoaderCurrentPerson(true));
  dispatch(getErrorWhenUploadCurrentPerson(false));
  if (author === undefined) {
    return;
  }
  const { value, error } = await Repository.APIQuote.getQuoteByAuthor(author);
  error || !value
    ? dispatch(loadQuote([{ quote: "start quote" }]))
    : dispatch(
        value.length ? loadQuote(value) : loadQuote([{ quote: "" }]),
        dispatch(changeStatusForLoaderCurrentPerson(false))
      );
};
