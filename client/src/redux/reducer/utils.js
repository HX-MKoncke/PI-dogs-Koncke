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

export const filterDogs = (filterCriteria, array) => {
  switch (filterCriteria) {
    case "Existing":
      return array.filter((dog) => typeof dog.id === "number");
    case "Created":
      return array.filter((dog) => typeof dog.id === "string");
    default:
      return array;
  }
};

export const filterByTemperament = (temperament, array) => {
  return array.filter((dog) => dog.temperament.includes(temperament));
};

export const searchDog = (name, array) => {
  return array.filter((dog) => dog.name.toLowerCase() === name.toLowerCase());
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
