import {
  SET_CATALOG_BTN_ACTIVE,
  SET_CATALOG_BTN_DISABLE,
  GET_CATALOG_BTN_STATUS,
} from "../actionTypes/exportActions";

const initialState = {
  catalogBtnIsActive: true,
};

function catalogBtnReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CATALOG_BTN_STATUS: {
      return {
        state,
      };
    }
    case SET_CATALOG_BTN_ACTIVE: {
      return {
        ...state,
        catalogBtnIsActive: true,
      };
    }
    case SET_CATALOG_BTN_DISABLE: {
      return {
        ...state,
        catalogBtnIsActive: false,
      };
    }
    default:
      return state;
  }
}

export default catalogBtnReducer;
