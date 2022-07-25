import React, { useState } from "react";
import "../styles/movie.css";
import { useDispatch } from "react-redux";
import { addValues } from "../Redux/actions/addAction";
import { v4 as uuidv4 } from "uuid";

const AddMovie = ({ setPageHandle }) => {
  const dispatch = useDispatch(); //asigning hook function to dispatch variable
  const [movieName, setmovieName] = useState("");
  const [description, setDescription] = useState("");
  const [cast, setCast] = useState("");
  const [similar, setSimilar] = useState("");
  const [genre, setGenre] = useState("");
  const [language, setLanguage] = useState("");

  // name, description, cast, similar movies, genre, language, etc.
  const handleMovie = (e) => {
    setmovieName(e.target.value);
  };
  const handleDescription = (e) => {
    setDescription(e.target.value);
  };
  const handleCast = (e) => {
    setCast(e.target.value);
  };
  const handleSimilar = (e) => {
    setSimilar(e.target.value);
  };
  const handleGenre = (e) => {
    setGenre(e.target.value);
  };
  const handleLanguage = (e) => {
    setLanguage(e.target.value);
  };

  const handleSubmit = (e) => {
    // used to submit form taken from user to the redux
    e.preventDefault();
    const formData = {
      id: uuidv4(), //giving unique key use from package uuid
      name: movieName,
      description: description,
      cast: cast,
      simillar: similar,
      genre: genre,
      language: language,
      favourite: false,
      watchlater: false,
    };
    dispatch(addValues(formData));
    setPageHandle(false);
  };

  return (
    <div className="movieForm">
      <form onSubmit={handleSubmit}>
        <h1>Add Movies Details</h1>
        <input
          placeholder="Enter Movie Name"
          type="text"
          onChange={handleMovie}
          value={movieName}
          required //we can also use package like formik and yup to do the validation
        />
        <br />
        <input
          placeholder="Enter Description"
          type="text"
          onChange={handleDescription}
          value={description}
          required
        />
        <br />
        <input
          placeholder="Enter Cast"
          type="text"
          onChange={handleCast}
          value={cast}
          required
        />
        <br />
        <input
          placeholder="Enter Similar Movie"
          type="text"
          onChange={handleSimilar}
          value={similar}
          required
        />
        <br />
        <input
          placeholder="Enter Genre"
          type="text"
          onChange={handleGenre}
          value={genre}
          required
        />
        <br />
        <input
          placeholder="Enter Language"
          type="text"
          onChange={handleLanguage}
          value={language}
          required
        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
