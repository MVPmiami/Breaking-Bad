import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
  CHANGE_STATUS_LOADER_CURRENT_PERSON,
  GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON,
  LOAD_CURRENT_PERSON,
  CLEAN_CURRENT_PERSON,
  GET_QUOTE,
} from "../actionTypes/exportActions";

const initialState = {
  cardList: [],
  isLoader: false,
  isError: false,
  isLoadCurrentPerson: false,
  isErrorCurrentPerson: false,
  currentPerson: [{}],
  randomQuote: [{ quote: "" }],
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
    case LOAD_CURRENT_PERSON: {
      return {
        ...state,
        currentPerson: action.payload,
      };
    }
    case CHANGE_STATUS_LOADER_CURRENT_PERSON:
      return {
        ...state,
        isLoadCurrentPerson: action.payload,
      };
    case GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON:
      return {
        ...state,
        isErrorCurrentPerson: action.payload,
      };
    case CLEAN_CURRENT_PERSON:
      return {
        ...state,
        currentPerson: [{}],
      };
    case GET_QUOTE:
      return {
        ...state,
        randomQuote: action.payload,
      };
    default:
      return state;
  }
}

export default cardListReducer;
