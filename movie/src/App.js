import React, { useState } from "react";
import AddMovie from "./components/AddMovie";
import ShowMovies from "./components/ShowMovies";

const App = (props) => {
  const [pageHandle, setPageHandle] = useState(true);
  return (
    <div>
      {pageHandle ? (
        <AddMovie setPageHandle={setPageHandle} />
      ) : (
        <ShowMovies setPageHandle={setPageHandle} />
      )}
    </div>
  );
};

export default App;
