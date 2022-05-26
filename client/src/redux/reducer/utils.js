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
          b.weight_min + b.weight_max / 2 - (a.weight_min + a.weight_max / 2)
        );
      });
    case "DescendingWeight":
      return array.sort((a, b) => {
        return (
          a.weight_min + a.weight_max / 2 - (b.weight_min + b.weight_max / 2)
        );
      });
    default:
      return array;
  }
};

/*~~~~~~~~~~~~~~FILTERS~~~~~~~~~~~~~~*/
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
