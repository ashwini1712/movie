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

export const addWatchlater = (n) => {
  return {
    type: "WATCHLATER",
    payload: n,
  };
};
