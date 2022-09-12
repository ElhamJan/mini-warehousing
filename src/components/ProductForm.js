import { useState } from "react";

const ProductForm = () => {
  const [inputVal, setInputVal] = useState([]);

  return (
    <form>
      <fieldset className="formControl">
        <legend>Add product</legend>
        <input
          className="input"
          type="text"
          placeholder="Product name..."
          value={inputVal}
        />
        <button className="btn" type="submit">
          Add
        </button>
      </fieldset>
    </form>
  );
};

export default ProductForm;
