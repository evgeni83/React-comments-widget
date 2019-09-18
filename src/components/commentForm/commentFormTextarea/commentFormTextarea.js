import React from "react";
import style from "./commentFormTextarea.module.css";

const CommentFormTextarea = props => {
  return (
    <label className={style.commentFormTextarea__label} htmlFor="commentText">
      Комментарий
      <textarea 
        className={style.commentFormTextarea__textarea}
        type="text"
        name="commentText"
        id="commentText"
        placeholder="Ваш комментарий"
        value={props.state.newCommentText}
        onChange={ev => {
          props.setState({ newCommentText: ev.target.value });
        }}
        required
      />
    </label>
  );
};

export default CommentFormTextarea;
