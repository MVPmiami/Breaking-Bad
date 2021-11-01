import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
  LOAD_CURRENT_PERSON,
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

export const loadPersonById = (id) => async (dispatch) => {
  dispatch(changeStatusForLoader(true));
  const { value, error } = await Repository.APICurrentPerson.getCurrentPerson(id);
  error || !value
    ? dispatch(getErrorWhenUpload(true))
    : dispatch(getCurrentPerson(value), dispatch(changeStatusForLoader(false)));
};
