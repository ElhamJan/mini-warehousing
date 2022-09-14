import { useState } from "react";
import SelectGroup from "./SelectGroup";

const ProductForm = (props) => {
  const [inputVal, setInputVal] = useState([]);
  const [selectOption, setSelectOption] = useState("");

  const changeHandler = (e) => {
    setInputVal(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!inputVal) {
      alert("Enter product name");
      return;
    }

    if (!selectOption.value) {
      alert("Select product group");
      return;
    }

    props.addProduct(inputVal, selectOption);
    setInputVal("");
  };

  const selectHandler = (e) => {
    setSelectOption(e);
  };

  return (
    <form onSubmit={submitHandler}>
      <fieldset className="formControl">
        <legend>Add product</legend>
        <input
          className="input"
          type="text"
          onChange={changeHandler}
          placeholder="Product name..."
          value={inputVal}
        />
        <SelectGroup
          groups={props.groups}
          onChange={selectHandler}
          selectOption={selectOption}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default ProductForm;
