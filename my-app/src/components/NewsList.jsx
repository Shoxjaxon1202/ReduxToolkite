import React from "react";
import NewsItem from "./NewsItem";
import { useSelector } from "react-redux";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const NewsList = () => {
  const store = useSelector((state) => state.newsStore);

  return (
    <TransitionGroup className="newslist flex flex-col w-[50%] gap-[20px]">
      {store?.news?.map((item) => (
        <CSSTransition
          key={item?.id}
          timeout={500}
          classNames="news-item-transition">
          <NewsItem {...item} />
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
};

export default NewsList;
