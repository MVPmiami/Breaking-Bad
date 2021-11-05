import {
  SET_CATALOG_BTN_ACTIVE,
  SET_CATALOG_BTN_DISABLE,
  GET_CATALOG_BTN_STATUS,
} from "./../actionTypes/exportActions";

export const setCatalogBtnActive = () => {
  return { type: SET_CATALOG_BTN_ACTIVE };
};

export const setCatalogBtnDisable = () => {
  return { type: SET_CATALOG_BTN_DISABLE };
};

export const getCatalogBtnStatus = () => {
  return { type: GET_CATALOG_BTN_STATUS };
};

export const changeCatalogBtnStatus = (param) => (dispatch) => {
	param ? dispatch(setCatalogBtnActive()) : dispatch(setCatalogBtnDisable())
}
