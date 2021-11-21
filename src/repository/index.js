import cardList from "./cardList";
import currentPerson from "./currentPerson";
import quote from "./quote";
import amountCharacters from "./amountCharacters";
import searchPersonByName from "./searchPerson";

class Reposirory {
  APICardsList = cardList;
  APICurrentPerson = currentPerson;
  APIQuote = quote;
  APIAmountCharacters = amountCharacters;
  APISearchPersonByName = searchPersonByName;
}

export default new Reposirory();
