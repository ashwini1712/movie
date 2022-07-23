import React, { useState } from "react";
import "../styles/movie.css";
import { useSelector } from "react-redux";
import Cards from "./Cards";

const ShowMovies = ({ setPageHandle }) => {
  //getting value from redux using useSelector hook
  let movies = useSelector((state) => {
    return state.formValue;
  });

  const [search, setSearch] = useState("");
  const [select, setSelect] = useState("");
  const [searchArr, setSearchArr] = useState([]);

  // ame, description, cast, similar movies, genre, language
  const handleSearch = (e) => {
    setSearch(e.target.value);
    let filteringArray = movies.filter((movie) => {
      if (select === "genre" && movie.genre.includes(search)) {
        return movie; //ternary operator can also do this {select === "genre"&& movie.genre.includes(search)}
      } else if (select === "name" && movie.name.includes(search)) {
        return movie;
      }
      if (select === "similar" && movie.similar.includes(search)) {
        return movie;
      }
      if (select === "language" && movie.language.includes(search)) {
        return movie;
      }
      if (select === "description" && movie.description.includes(search)) {
        return movie;
      }
      if (select === "" && movie.name.includes(search)) {
        return movie;
      }
    });
    setSearchArr(filteringArray);
  };
  //selects the option of select tag and store in select named state the search will be done based on state value
  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  const handleFav = () => {
    const val = movies.filter((fav) => {
      return fav.favourite === true;
    });
    setSearchArr(val);
  };
  const handleWatch = () => {
    const later = movies.filter((watch) => {
      return watch.watchlater === true;
    });
    setSearchArr(later);
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
              <div style={{ display: "flex" }}>
                <select onChange={handleSelect}>
                  {/* name, description, cast, similar movies, genre, language */}
                  <option value="name">name</option>
                  <option value="description">description</option>
                  <option value="cast">cast</option>
                  <option value="similar">similar movie</option>
                  <option value="genre">genre</option>
                  <option value="language">language</option>
                </select>

                <input
                  placeholder="Select from top and search By default search by Name"
                  type="search"
                  value={search}
                  onChange={handleSearch}
                />
              </div>
              <div
                style={{
                  display: "flex",
                }}
              >
                <input
                  type="button"
                  value="&#9829; Favourites "
                  onClick={handleFav}
                />
                <input
                  type="button"
                  value="&#x2B; Add Movies"
                  onClick={() => {
                    setPageHandle(true);
                  }}
                />

                <input
                  type="button"
                  value="&#128337; Watch Later "
                  onClick={handleWatch}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="columns  p-0 pt-6 last">
          {searchArr.length > 0
            ? searchArr.map((movie, i) => {
                return <Cards key={i} movie={movie} />;
              })
            : movies.map((movie, i) => {
                return <Cards key={i} movie={movie} />;
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
