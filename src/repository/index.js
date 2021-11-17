import cardList from "./cardList";
import currentPerson from "./currentPerson";
import quote from "./quote";
import amountCharacters from "./amountCharacters";

class Reposirory {
  APICardsList = cardList;
  APICurrentPerson = currentPerson;
  APIQuote = quote;
  APIAmountCharacters = amountCharacters;
}

export default new Reposirory();
