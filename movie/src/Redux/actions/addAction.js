export const addValues = (n) => {
  return {
    type: "ADDFORM",
    payload: n,
  };
};

export const addFavourite = (n) => {
  return {
    type: "FAVOURITE",
    payload: n,
  };
};
