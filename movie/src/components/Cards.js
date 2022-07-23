import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite } from "../Redux/actions/addAction";

const Cards = ({ movie }) => {
  const dispatch = useDispatch();
  let movies = useSelector((state) => {
    return state.formValue;
  });
  const handleFavourite = (e) => {
    console.log(e.target.checked, movie, movies);
    const favoriteData = movies.map((oneMovie) => {
      if (e.target.checked) {
        if (movie.id === oneMovie.id) {
          oneMovie.favourite = true;
          return oneMovie;
        }
      } else {
        oneMovie.favourite = false;
        return oneMovie;
      }
    });
    console.log(favoriteData);
    dispatch(addFavourite(favoriteData));
  };
  return (
    <div className="column is-one-quarter">
      <input
        className={"fav-btn"}
        type="checkbox"
        id="heart"
        placeholder="&#9829;"
        onChange={handleFavourite}
      />
      <label htmlFor="heart">&#9829;</label>
      <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img6.PNG" />
    </div>
  );
};
export default Cards;
