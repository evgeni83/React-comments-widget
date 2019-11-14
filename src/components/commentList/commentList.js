import React from "react";
import Comment from "../comment";
import CommentListItem from "./commentListItem/commentListItem";
import style from "./commentList.module.css";

const CommentList = (props) => {
  return (
    <ul className={style.commentsList}>

      {props.state.comments.map((comment, i, arr) => {        
        
        let commentModel = new Comment(
          comment.author,
          comment.time,
          comment.text,
          arr,
          props.setState
        );

        return (
          <CommentListItem
            comment={commentModel}
            delete={commentModel.delete}
            key={i}
            id={i}
            state={props.state}
            updateState={commentModel.updateState}
          />
        );

      })}

    </ul>
  )
}

export default CommentList;