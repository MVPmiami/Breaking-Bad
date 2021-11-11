import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
  LOAD_CURRENT_PERSON,
  CHANGE_STATUS_LOADER_CURRENT_PERSON,
  GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON,
  CLEAN_CURRENT_PERSON,
  GET_QUOTE,
} from "./../actionTypes/exportActions";
import Repository from "../../repository";

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

export const loadPersonList = () => async (dispatch) => {
  dispatch(changeStatusForLoader(true));
  const { value, error } = await Repository.APICardsList.getCardList();
  error || !value
    ? dispatch(getErrorWhenUpload(true))
    : dispatch(getPersonsList(value), dispatch(changeStatusForLoader(false)));
};

export const changeStatusForLoaderCurrentPerson = (value) => ({
  type: CHANGE_STATUS_LOADER_CURRENT_PERSON,
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

export const loadQuoteByAuthor = (author) => async (dispatch) => {
  dispatch(changeStatusForLoaderCurrentPerson(true));
  dispatch(getErrorWhenUploadCurrentPerson(false));
  const { value, error } = await Repository.APIQuote.getQuoteByAuthor(author);
  error || !value
    ? dispatch(loadQuote("I want to make some drugs"))
    : dispatch(
        loadQuote(value),
        dispatch(changeStatusForLoaderCurrentPerson(false))
      );
};
