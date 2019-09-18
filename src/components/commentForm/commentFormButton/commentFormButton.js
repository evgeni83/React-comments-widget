import React from "react";
import style from "./commentFormButton.module.css";

const CommentFormButton = props => {
  return (
    <button className={style.commentFormButton__button} type="submit">
      Добавить комментарий
    </button>
  );
}

export default CommentFormButton;