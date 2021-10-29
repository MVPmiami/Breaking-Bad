import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
} from "../actionTypes/exportActions";

const initialState = {
  cardList: JSON.parse(localStorage.getItem("cardList")) || [],
  isLoader: false,
  isError: false,
};

function cardListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PERSONS: {
      return {
        ...state,
        cardList: action.payload,
      };
    }
    case GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST:
      return {
        ...state,
        isError: action.payload,
      };
    case CHANGE_STATUS_LOADER:
      return {
        ...state,
        isLoader: action.payload,
      };
    default:
      return state;
  }
}

export default cardListReducer;
