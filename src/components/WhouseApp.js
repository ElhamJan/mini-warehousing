import { useEffect, useState } from "react";
import PGroupForm from "./PGroupForm";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";

const WhouseApp = () => {
  const [productGroups, setProductGroups] = useState(
    JSON.parse(localStorage.getItem("groups")) || []
  );
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("p")) || []
  );

  useEffect(() => {
    localStorage.setItem("groups", JSON.stringify(productGroups));
  }, [productGroups]);

  const addPGroup = (inputVal) => {
    const newGroup = {
      id: Math.floor(Math.random() * 1000),
      text: inputVal,
    };
    setProductGroups([...productGroups, newGroup]);
  };

  useEffect(() => {
    localStorage.setItem("p", JSON.stringify(products));
  }, [products]);

  const addProduct = (inputVal, selectOption) => {
    const newProduct = {
      id: Math.ceil(Math.random() * 1000),
      text: inputVal,
      group: selectOption.value,
    };
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <PGroupForm addPGroup={addPGroup} />
      <ProductForm addProduct={addProduct} groups={productGroups} />
      <ProductList products={products} productGroups={productGroups}/>
    </div>
  );
};

export default WhouseApp;
