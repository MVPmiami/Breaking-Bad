import { LOAD_PERSONS } from "./../actionTypes/exportActions";

export function getPersonsList() {
  return {
    type: LOAD_PERSONS,
  };
}
