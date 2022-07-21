import React from "react";
import "../styles/movie.css";

const ShowMovies = () => {
  return (
    <div>
      <div class="top">
        <div class="columns">
          <div class="column is-full featured_wrapper p-0">
            <img
              src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/banner.jpg"
              class="featured"
            />
            <div class="title_wrapper">
              <span class="has-text-white">Trending Today</span>
              <h1 class="title is-1 has-text-white">
                The Untold Story of the great Lorem Ipsum
              </h1>
              <button class="button is-medium">Watch It Now</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="columns is-multiline p-0 pt-6 last">
          <div class="column is-full">
            <p class="has-text-white">Action Movies Collection</p>
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image1.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/image2.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img3.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img4.PNG" />
          </div>
        </div>
        <div class="columns last">
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img5.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img6.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img7.PNG" />
          </div>
          <div class="column is-one-quarter">
            <img src="https://raw.githubusercontent.com/brixiobodino/coffeholic/main/img8.PNG" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowMovies;
