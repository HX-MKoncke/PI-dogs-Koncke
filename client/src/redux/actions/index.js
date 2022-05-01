import axios from "axios";

/*~~~~~~~~~~~~~~GETS~~~~~~~~~~~~~~*/
export function getDogs() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/dogs");
    return dispatch({
      type: "GET_DOGS",
      payload: json.data,
    });
  };
}

export function getTemperamentsList() {
  return async function (dispatch) {
    var json = await axios.get("http://localhost:3001/temperament");
    var listOfTemperaments = json.data.map((el) => el.name);
    // const temperaments = await axios("http://localhost:3001/temperament");
    return dispatch({
      type: "GET_TEMPERAMENTS",
      payload: listOfTemperaments,
    });
  };
}

/*~~~~~~~~~~~~~~POST~~~~~~~~~~~~~~*/
export function postDog(payload) {
  return async function (dispatch) {
    const response = await axios.post("http://localhost:3001/dogs", payload);
    return response;
  };
}

/*~~~~~~~~~~~~~~ORDERS~~~~~~~~~~~~~~*/
export const orderDogs = (payload) => {
  return {
    type: "ORDER_DOGS",
    payload,
  };
};

// export function orderByName(payload) {
//   return {
//     type: "ORDER_BY_NAME",
//     payload,
//   };
// }

// export function orderByWeight(payload) {
//   return {
//     type: "ORDER_BY_WEIGHT",
//     payload,
//   };
// }

/*~~~~~~~~~~~~~~FILTERS~~~~~~~~~~~~~~*/
export function filterDogsByTemperament(payload) {
  return async function (dispatch) {
    try {
      var json = await axios.get(
        `http://localhost:3001/dog/?temperament=${payload}`
      );
      return dispatch({
        type: "FILTER_DOGS_TEMPS",
        payload: json.data,
      });
    } catch (error) {
      console.log(error, "Error on the filters in actions file");
    }
  };
}

export function filterCreated(payload) {
  return {
    type: "FILTER_CREATED",
    payload,
  };
}

/*~~~~~~~~~~~~~~SEARCH~~~~~~~~~~~~~~*/
export function getDogsByName(name) {
  return async function (dispatch) {
    try {
      const { data } = await axios.get(
        `http://localhost:3001/dogs?name=${name}`
      );
      return dispatch({
        type: "SEARCH_DOG",
        payload: data,
      });
    } catch (err) {
      alert("PUPPY NOT FOUND :C");
    }
  };
}
