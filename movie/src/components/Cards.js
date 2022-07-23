import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addFavourite, addWatchlater } from "../Redux/actions/addAction";

const Cards = ({ movie }) => {
  const dispatch = useDispatch();
  let movies = useSelector((state) => {
    //getting state from redux to map and get the value by condition check and rest return as it is.
    return state.formValue;
  });
  const handleFavourite = (e) => {
    // handling favourite through checkbox click and changing value of favourite to true.
    //and pushing back to redux
    const favoriteData = movies.map((oneMovie) => {
      if (e.target.checked) {
        if (movie.id === oneMovie.id) {
          oneMovie.favourite = true;
          return oneMovie;
        }
      }
      return oneMovie;
    });
    dispatch(addFavourite(favoriteData)); //storing to redux
  };
  const handleWatchlater = (e) => {
    // handling watchlater through checkbox click and changing value of favourite to true.
    //and pushing back to redux same as favourite
    const watchLater = movies.map((one) => {
      if (e.target.checked) {
        if (movie.id === one.id) {
          one.watchlater = true;
          return one;
        }
      }
      return one;
    });
    dispatch(addWatchlater(watchLater)); //storing to redux
  };
  return (
    <div className="column is-one-quarter ">
      {movie.favourite === true ? (
        <input
          type="checkbox"
          checked={true}
          id={movie.id + 2}
          placeholder="&#129293;"
          onChange={handleFavourite}
        />
      ) : (
        <input
          type="checkbox"
          id={movie.id + 2}
          placeholder="&#129293;"
          onChange={handleFavourite}
        />
      )}
      <label htmlFor={movie.id + 2}>&#129293;</label>
      <img
        src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img5.PNG"
        alt="movie"
      />
      {movie.watchlater === true ? (
        <input
          type="checkbox"
          checked={true}
          id={movie.id}
          placeholder="&#128337;"
          onChange={handleWatchlater}
        />
      ) : (
        <input
          type="checkbox"
          id={movie.id + 1}
          placeholder="&#128337;"
          onChange={handleWatchlater}
        />
      )}
      <label htmlFor={movie.id + 1}>&#128337;</label>
      <div>
        <label style={{ color: "white" }}>name: {movie.name}</label>
        <br />
        <label style={{ color: "white" }}>desc: {movie.description}</label>
        <br />
        <label style={{ color: "white" }}>cast: {movie.cast}</label>
        <br />
        <label style={{ color: "white" }}>genre: {movie.genre}</label>
        <br />
        <label style={{ color: "white" }}>similar movie:{movie.simillar}</label>
        <br />
        <label style={{ color: "white" }}>language:{movie.language}</label>
        <br />
      </div>
    </div>
  );
};
export default Cards;
