import { useState } from "react";

const PGroupForm = (props) => {
  const [inputVal, setInputVal] = useState("");

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputVal) {
      alert("Enter product group name");
      return;
    }

    props.addPGroup(inputVal);
    setInputVal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="formControl">
        <legend>Add product group</legend>
        <input
          className="input"
          type="text"
          onChange={changeHandler}
          placeholder="Product group name..."
          value={inputVal}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default PGroupForm;
