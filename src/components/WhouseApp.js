import { useEffect, useState } from "react";
import PGroupForm from "./PGroupForm";
import ProductForm from "./ProductForm";

const WhouseApp = () => {
  const [productGroups, setProductGroups] = useState([]);

  const addPGroup = (inputVal) => {
    const newGroup = {
      id: Math.floor(Math.random() * 1000),
      text: inputVal,
    };
    setProductGroups([...productGroups, newGroup]);
    localStorage.setItem("groups", JSON.stringify(productGroups));
  };

  useEffect(() => {
    let storedGroups = localStorage.getItem("groups");
    if (storedGroups) {
      storedGroups = JSON.parse(storedGroups);
    } else {
      storedGroups = [];
    }
    setProductGroups(storedGroups);
  }, []);

  return (
    <div>
      <PGroupForm addPGroup={addPGroup} />
      <ProductForm />
    </div>
  );
};

export default WhouseApp;
