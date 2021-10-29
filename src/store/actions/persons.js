import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
} from "./../actionTypes/exportActions";
import Repository from "../../repository";

export const getPersonsList = (payload) => {
  return { type: LOAD_PERSONS, payload: payload };
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
    : dispatch(
        getPersonsList(value),
        dispatch(changeStatusForLoader(false))
      );
};
