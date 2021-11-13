import axios from "axios";

class Quote {
  getQuoteByAuthor = async (author) => {
    let result = {
      value: null,
      error: null,
    };
    try {
      let response = await axios.get(
        `https://www.breakingbadapi.com/api/quote/random?author=${author}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new Quote();
