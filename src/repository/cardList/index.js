import axios from "axios";

class cardList {
  getCardList = async () => {
    let result = {
      value: null,
      error: null,
    };
    try {
      let response = await axios.get(
        "https://www.breakingbadapi.com/api/characters?limit=10"
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new cardList();
