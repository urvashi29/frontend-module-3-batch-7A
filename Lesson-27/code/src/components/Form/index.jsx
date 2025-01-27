import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onAddItem } from "../../action";

const index = () => {
  const [productName, setProductName] = useState("");
  const [price, setPrice] = useState("");
  const dispatch = useDispatch();
  const items = useSelector((state) => state.items);
  console.log(items); //display the data

  const handleChange = (e) => {
    if (e.target.id == "productName") {
      //validation
      setProductName(e.target.value);
    } else if (e.target.id == "productprice") {
      //validation
      setPrice(e.target.value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const item = { productName, price };
    dispatch(onAddItem(item));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Product Name</label>
      <input
        type="text"
        placeholder="Please enter name"
        onChange={handleChange}
        id="productName"
      />
      <label>Product Price</label>
      <input
        type="text"
        placeholder="Please enter price"
        onChange={handleChange}
        id="productprice"
      />
      <button>Submit</button>
    </form>
  );
};

export default index;
