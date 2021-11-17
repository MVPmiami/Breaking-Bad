import axios from "axios";

class amountCharacters {
  getAmountChars = async () => {
    let result = {
      value: null,
      error: null,
    };
    try {
      let response = await axios.get(
        `https://www.breakingbadapi.com/api/characters`
      );
      result.value = response.data.length;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new amountCharacters();
