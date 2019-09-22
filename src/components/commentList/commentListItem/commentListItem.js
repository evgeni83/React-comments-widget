import React from "react";
import style from "./commentListItem.module.css";



const CommentListItem = (props) => {
  return (
    <li className={style.commentListItem}>
      
      <div className={style.commentListItem__commentTitle}>
        <div className={style.commentListItem__commentAuthorName}>
          {props.author}
        </div>
        <div className={style.commentListItem__commentDate}>
          {props.time}
        </div>
      </div>
      
      <div className={style.commentListItem__commentText}>{props.text}</div>
      
      <div className={style.commentListItem__deleteButtonContainer}>
        <button
          className={style.commentListItem__deleteButton}
          onClick={() => props.deleteComment(props.id)}
        >
          X
        </button>
      </div>
    
    </li>
  );
};

export default CommentListItem;