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
          parseInt(a.weight.metric.split(" - ")) -
          parseInt(b.weight.metric.split(" - "))
        );
      });
    case "DescendingWeight":
      return array.sort((a, b) => {
        return (
          parseInt(b.weight.metric.split(" - ")) -
          parseInt(a.weight.metric.split(" - "))
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
case "ORDER_DOGS":
      const sortedArr =
        action.payload === "asc"
          ? [...state.dogs].sort(function (a, b) {
              if (a.name > b.name) {
                return 1;
              }
              if (b.name > a.name) {
                return -1;
              }
              return 0;
            })
          : [...state.dogs].sort(function (a, b) {
              if (a.name > b.name) {
                return -1;
              }
              if (b.name > a.name) {
                return 1;
              }
              return 0;
            });
      return {
        ...state,
        allDogs: sortedArr,
      };
    case "ORDER_BY_WEIGHT":
      const dog =
        action.payload === "heaviest"
          ? [...state.dogs].sort(function (a, b) {
              if (
                parseInt(a.weight.metric.split(" - ")[0]) <
                parseInt(b.weight.metric.split(" - ")[0])
              ) {
                return 1;
              }
              if (
                parseInt(b.weight.metric.split(" - ")[0]) <
                parseInt(a.weight.metric.split(" - ")[0])
              ) {
                return -1;
              }

              return 0;
            })
          : [...state.dogs].sort(function (a, b) {
              console.log(action.payload);
              if (
                parseInt(a.weight.metric.split(" - ")[0]) <
                parseInt(b.weight.metric.split(" - ")[0])
              ) {
                return -1;
              }
              if (
                parseInt(b.weight.metric.split(" - ")[0]) <
                parseInt(a.weight.metric.split(" - ")[0])
              ) {
                return 1;
              }

              return 0;
            });
      return {
        ...state,
        allDogs: dog,
      };
*/
