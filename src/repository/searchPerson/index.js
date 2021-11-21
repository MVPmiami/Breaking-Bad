import axios from "axios";

class searchPersonByName {
  searchPerson = async (name) => {
    let result = {
      value: null,
      error: null,
    };
    if (name === " ") {
      name = "allpersons";
    }

    try {
      let response = await axios.get(
        `https://www.breakingbadapi.com/api/characters?name=${name
          .toLowerCase()
          .trim()}`
      );
      result.value = response.data;
    } catch (error) {
      result.error = error.response;
    }
    return result;
  };
}

export default new searchPersonByName();
