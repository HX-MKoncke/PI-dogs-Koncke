/*~~~~~~~~~~~~~~ORDERS~~~~~~~~~~~~~~*/
export const orderDogs = (payload, array) => {
  switch (payload) {
    case "AscendingName":
      return array.sort((a, b) => {
        return a.name.localeCompare(b.name);
      });
    case "DescendingName":
      return array.sort((a, b) => {
        return b.name.localeCompare(a.name);
      });
    case "AscendingWeight":
      return array.sort((a, b) => {
        return (
          parseInt(
            b.weight.metric
              .split(" - ")
              .filter(function (value) {
                return !Number.isNaN(value);
              })
              .reduce((prev, curr) => (curr += prev))
          ) -
          parseInt(
            a.weight.metric
              .split(" - ")
              .filter(function (value) {
                return !Number.isNaN(value);
              })
              .reduce((prev, curr) => (curr += prev))
          )
        );
      });
    case "DescendingWeight":
      return array.sort((a, b) => {
        return (
          parseInt(
            a.weight.metric
              .split(" - ")
              .filter(function (value) {
                return !Number.isNaN(value);
              })
              .reduce((prev, curr) => (curr += prev))
          ) -
          parseInt(
            b.weight.metric
              .split(" - ")
              .filter(function (value) {
                return !Number.isNaN(value);
              })
              .reduce((prev, curr) => (curr += prev))
          )
        );
      });
    default:
      return array;
  }
};
/*
function compare(cases) {
    array.sort((a, b) => cases);
  }
  function weightAverage(x) {
    return x.weight.metric.split(" - ").reduce((prev, curr) => {
      if (typeof x !== "string") return (curr += prev);
    });
  }
 */

/*~~~~~~~~~~~~~~FILTERS~~~~~~~~~~~~~~*/
export const filterByTemperament = (temperament, array) => {
  return array.filter((dog) => dog.temperament.includes(temperament));
};

export const filterDogs = (payload, array) => {
  switch (payload) {
    case "Existing":
      return array.filter((el) => !el.createdInDB);
    case "Created":
      return array.filter((el) => el.createdInDB === true);
    default:
      return array;
  }
};

/*~~~~~~~~~~~~~~SEARCH~~~~~~~~~~~~~~*/
export const searchDog = (name, array) => {
  return array.filter((dog) => dog.name.toLowerCase() === name.toLowerCase());
};
