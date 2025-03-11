import React, { useState } from "react";

import "../styles/form.scss";
import { v4 } from "uuid";
import axios from "axios";
import { addNewStore } from "../redux/features/newsSlice";
import { useDispatch } from "react-redux";

const Form = () => {
  const dispatch = useDispatch();
  const [formValue, setFormValue] = useState({
    title: "",
    category: "",
    message: "",
  });

  const { title, category, message } = formValue;
  const addNew = (e) => {
    e.preventDefault();
    if (
      formValue.title.length &&
      formValue.category.length &&
      formValue.message.length
    ) {
      const newItem = {
        id: v4(),
        title,
        category,
        message,
      };

      axios
        .post(`http://localhost:5000/news`, JSON.stringify(newItem))
        .then((res) => {
          res.status === 201 && dispatch(addNewStore(newItem));
          setFormValue((prev) => ({
            title: "",
            message: "",
            category: "",
          }));
        })
        .catch((error) => console.log("error post" + error.message));
    }
  };
  return (
    <form className="form">
      <input
        required
        type="text"
        placeholder="New Item"
        value={title}
        onChange={(e) => {
          setFormValue((prev) => ({
            ...prev,
            title: e.target.value,
          }));
        }}
      />
      <select
        required
        value={category}
        onChange={(e) => {
          setFormValue((prev) => ({
            ...prev,
            category: e.target.value,
          }));
        }}>
        <option value="">Change Category</option>
        <option value="Sport">Sport</option>
        <option value="Weather">Weather</option>
        <option value="World">World</option>
      </select>
      <textarea
        required
        value={message}
        onChange={(e) => {
          setFormValue((prev) => ({
            ...prev,
            message: e.target.value,
          }));
        }}></textarea>
      <button onClick={addNew}>Add</button>
    </form>
  );
};

export default Form;
