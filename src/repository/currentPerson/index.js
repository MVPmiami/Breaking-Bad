import axios from "axios";

class currentPerson {
  getCurrentPerson = async (id) => {
    let result = {
      value: null,
      error: null,
    };
    try {
      let response = await axios.get(
        `https://www.breakingbadapi.com/api/characters/${id}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new currentPerson();
