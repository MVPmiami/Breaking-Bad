import { LOAD_PERSONS } from "../actionTypes/exportActions";

const initialState = {
  cardList: [],
};

function cardListReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_PERSONS: {
      return {
        ...state,
        cardList: action.payload,
      };
    }
    default:
      return state;
  }
}

export default cardListReducer;
