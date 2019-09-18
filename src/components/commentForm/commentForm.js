import React from "react";
import style from "./commentForm.module.css";


const CommentForm = props => {
  return (
    <form
      className={style.commentForm}
      onSubmit={ev => props.addNewComment(ev)}
    >
      <label className={style.commentForm__label} htmlFor="commentAuthor">
        Имя
      </label>
      <input
        className={style.commentForm__input}
        type="text"
        name="commentAuthor"
        id="commentAuthor"
        placeholder="Ваше имя"
        onChange={ev => {
          props.setState({ newCommentAuthor: ev.target.value });
        }}
        value={props.state.newCommentAuthor}
        required
      />
      <label className={style.commentForm__label} htmlFor="commentText">
        Комментарий
      </label>
      <textarea
        className={style.commentForm__textarea}
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
      <button className={style.commentForm__button} type="submit">
        Добавить комментарий
      </button>
    </form>
  );
};

export default CommentForm;