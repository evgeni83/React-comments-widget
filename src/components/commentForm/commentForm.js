import React from "react";
import CommentFormInput from "./commentFormInput/commentFormInput";
import CommentFormTextarea from "./commentFormTextarea/commentFormTextarea";
import style from "./commentForm.module.css";


const CommentForm = props => {
  return (
    <form className={style.commentForm} onSubmit={ev => props.addNewComment(ev)}>
      <CommentFormInput state={props.state} setState={props.setState} />
      <CommentFormTextarea state={props.state} setState={props.setState} />

      <button className={style.commentForm__button} type="submit">
        Добавить комментарий
      </button>
    </form>
  );
};

export default CommentForm;