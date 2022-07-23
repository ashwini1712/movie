import React from "react";

const InputFields = ({ labelVal, setInputVal, inputVal }) => {
  //state management
  //setting state with value entered by user
  const handleInput = (e) => {
    setInputVal(e.target.value);
  };

  return (
    // create dynamic input field from component by passing props
    <>
      <label>{labelVal}</label>
      <input
        to={labelVal}
        type="text"
        onChange={handleInput}
        value={inputVal}
      />
      <br />
    </>
  );
};

export default InputFields;
