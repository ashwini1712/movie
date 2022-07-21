import React, { useState } from "react";

const InputFields = ({ labelVal }) => {
  //state management
  const [inputVal, setInputVal] = useState("");
  //setting state with value entered by user
  const handleInput = (e) => {
    setInputVal(e.target.value);
    // console.log("e.target.value", e.target.value);
  };

  return (
    // create dynamic input field from component by passing props
    <>
      <label>{labelVal}</label>
      <input
        // to={labelVal}
        type="text"
        onChange={handleInput}
        value={inputVal}
      />
      <br />
    </>
  );
};

export default InputFields;
