import React from "react";
import "../styles/movie.css";
import InputFields from "./InputFields";

const AddMovie = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = {
    //   name:
    // }
  };
  const fieldList = [
    "Movie Name",
    "Description",
    "Cast",
    "Similar Movies",
    "Genre",
    "Language",
  ];
  return (
    <div className="movieForm">
      <form onSubmit={handleSubmit}>
        <h1>Add Movies Details</h1>

        {/* name, description, cast, similar movies, genre, language, etc. */}
        {/* map is to to make input fields dynamic  */}

        {fieldList.map((ele, i) => {
          return <InputFields key={i} name={ele} labelVal={ele} />;
        })}

        <input type="submit" />
      </form>
    </div>
  );
};

export default AddMovie;
