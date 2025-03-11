import React from "react";
import { IoMdClose } from "react-icons/io";
import "../styles/newsitem.scss";
import axios from "axios";
import { useDispatch } from "react-redux";
import { removeNew } from "../redux/features/newsSlice";
const NewsItem = ({ id, title, category, message }) => {
  const dispatch = useDispatch();

  const removeNewFn = () => {
    axios.delete(`http://localhost:5000/news/${id}`).then((res) => {
      res?.status === 200 && dispatch(removeNew(id));
    });
  };

  return (
    <div className="news-item">
      <header className="news-item__header">
        <h3 className="news-item__title">{title}</h3>
        <button className="news-item__close">
          <IoMdClose onClick={removeNewFn} />
        </button>
      </header>
      <main className="news-item__body">{message}</main>
      <footer className="news-item__footer">
        <span className="news-item__category">{category}</span>
      </footer>
    </div>
  );
};

export default NewsItem;
