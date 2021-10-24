import { LOAD_PERSONS } from "./../actionTypes/exportActions";
import Repository from "../../repository";

export function getPersonsList(payload) {
  return { type: LOAD_PERSONS, payload: payload };
}

export const loadPersonList = () => async (dispatch) => {
  const cardList = await Repository.APICardsList.getCardList();
  dispatch(getPersonsList(cardList));
};
