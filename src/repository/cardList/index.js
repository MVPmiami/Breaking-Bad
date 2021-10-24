class cardList {
  getCardList = async () => {
    let result;
    let response = await fetch(
      "https://www.breakingbadapi.com/api/characters?limit=10"
    );
    response.ok
      ? (result = await response.json())
      : (result = "Ошибка HTTP: " + response.status);
    return result;
  };
}

export default new cardList();
