import React from "react";
import CommentListItem from "./commentListItem/commentListItem";
import style from "./commentList.module.css";

const CommentList = (props) => {
  return (
    <ul className={style.commentsList}>
      {props.state.comments.map((comment, i) => {
        return (
          <CommentListItem
            key={i}
            id={i}
            author={comment.author}
            time={comment.time}
            text={comment.text}
            deleteComment={props.deleteComment}
          />
        );
      })}
    </ul>
  )
}

export default CommentList;