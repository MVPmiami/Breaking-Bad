import cardList from "./cardList";
import currentPerson from "./currentPerson";
import quote from "./quote";

class Reposirory {
  APICardsList = cardList;
  APICurrentPerson = currentPerson;
  APIQuote = quote;
}

export default new Reposirory();
