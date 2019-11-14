import React from "react";
import style from "./commentFormInput.module.css";

const CommentFormInput = props => {
  return (
    <label className={style.commentFormInput__label} htmlFor="commentAuthor">
      <div>Имя</div>
      <input
        className={style.commentFormInput__input}
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
    </label>
  );
};

export default CommentFormInput;
