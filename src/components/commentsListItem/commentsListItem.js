import React from "react";
import style from "./commentsListItem.module.css";

const CommentsListItem = (props) => {
  return (
    <li className={style.commentsListItem}>
      <div className={style.commentsListItem__commentTitle}>
        <div className={style.commentsListItem__commentAuthorName}>
          {props.author}
        </div>
        <div className={style.commentsListItem__commentDate}>
          {props.time}
        </div>
      </div>
      <div className={style.commentsListItem__commentText}>{props.text}</div>
      <div className={style.commentsListItem__deleteButtonContainer}>
        <button
          className={style.commentsListItem__deleteButton}
          onClick={props.deleteComment}
        >
          <div></div>
          <div></div>
        </button>
      </div>
    </li>
  );
};

export default CommentsListItem;