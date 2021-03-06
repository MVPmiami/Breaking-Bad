import {
  LOAD_PERSONS,
  GET_ERROR_WHEN_UPLOAD_CHARACTER_LIST,
  CHANGE_STATUS_LOADER,
  CHANGE_STATUS_LOADER_CURRENT_PERSON,
  GET_ERROR_WHEN_UPLOAD_CURRENT_PERSON,
  LOAD_CURRENT_PERSON,
  CLEAN_CURRENT_PERSON,
  GET_QUOTE,
  TOOGLE_LIST,
  GET_CURRENT_PAGE,
  GET_PERSON_PER_PAGE,
  GET_AMOUNT_CHARACTERS,
  GET_SEARCH_NAME,
  GET_SEARCH_PERSONS,
} from "../actionTypes/exportActions";

const initialState = {
  cardList: [],
  amountCharacters: 0,
  isLoader: false,
  isError: false,
  isLoadCurrentPerson: false,
  isErrorCurrentPerson: false,
  currentPerson: [{}],
  randomQuote: [{ quote: "" }],
  isList: false,
  currentPage: 1,
  personPerPage: 5,
  searchName: "",
  searchPersons: [],
};

function cardListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PERSONS: {
      return {
        ...state,
        cardList: action.payload,
      };
    }
    case GET_SEARCH_PERSONS: {
      return {
        ...state,
        searchPersons: action.payload,
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
    case TOOGLE_LIST:
      return {
        ...state,
        isList: !state.isList,
      };
    case GET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.payload,
      };
    case GET_PERSON_PER_PAGE:
      return {
        ...state,
        personPerPage: action.payload,
      };
    case GET_AMOUNT_CHARACTERS:
      return {
        ...state,
        amountCharacters: action.payload,
      };
    case GET_SEARCH_NAME:
      return {
        ...state,
        searchName: action.payload,
      };
    default:
      return state;
  }
}

export default cardListReducer;
