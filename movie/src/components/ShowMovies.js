import React, { useState } from "react";
import "../styles/movie.css";
import { useSelector } from "react-redux";
import Cards from "./Cards";
const ShowMovies = () => {
  let movies = useSelector((state) => {
    return state.formValue;
  });
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  return (
    <>
      <div className="top">
        <div className="columns">
          <div className="column is-full featured_wrapper p-0">
            <img
              src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
              className="featured"
            />
            <div className="title_wrapper">
              <span className="has-text-white">Trending Today</span>
              <h1 className="title is-1 has-text-white">
                The Untold Story of the great Lorem Ipsum
              </h1>
              <label>Search By</label>
              <select>
                {/* name, description, cast, similar movies, genre, language */}
                <option>name</option>
                <option>description</option>
                <option>cast</option>
                <option>similar movie</option>
                <option>genre</option>
                <option>language</option>
              </select>

              <input
                placeholder="Select from top and search By default search by Name"
                type="search"
                value={search}
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns  p-0 pt-6 last">
          {movies.map((movie) => {
            return <Cards key={movie.id} movie={movie} />;
          })}
        </div>
        <div className="columns last">
          {/* <div className="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img5.PNG" />
          </div> */}
          {/* <div className="column is-one-quarter">
            <input type="checkbox" id="heart" />
            <label for="heart">&#9829</label>
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img6.PNG" />
          </div> */}
          {/* <div className="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img7.PNG" />
          </div>
          <div className="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img8.PNG" />
          </div> */}
        </div>
      </div>
    </>
  );
};

export default ShowMovies;
