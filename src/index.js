import React from "react";
import ReactDOM from "react-dom";
import CommentsListItem from "./components/commentsListItem/commentsListItem";
import style from "./index.module.css";

class CommentsWigetApp extends React.Component {
  state = {
    comments: [],
    newCommentAuthor: "",
    newCommentText: ""
  };

  constructor(props) {
    super(props);
    if (localStorage.hasOwnProperty("comments")) {
      this.state = {
        comments: JSON.parse(localStorage.getItem("comments")),
        newCommentAuthor: "",
        newCommentText: ""
      };
    };
  };

  addNewComment(ev) {
    ev.preventDefault();
    const comments = this.state.comments;
    if (this.state.newCommentAuthor !== "" || this.state.newCommentText !== "") {
      comments.push({
        author: this.state.newCommentAuthor,
        time: [new Date().toLocaleString()],
        text: this.state.newCommentText
      });
    };
    this.setState({
      comments,
      newCommentAuthor: "",
      newCommentText: ""
    });
    localStorage.setItem("comments", JSON.stringify(this.state.comments));
  };

  deleteComment(key) { 
    const comments = this.state.comments;
    comments.forEach((comment, i) => {
      if (key === i) {
        comments.splice(i, 1);
      };
      return comments;
    }); 
    this.setState({
      comments,
      newCommentAuthor: "",
      newCommentText: ""
    });
    localStorage.setItem("comments", JSON.stringify(this.state.comments));
  };

  render() {
    return (
      <div className={style.appWrapper}>
        <CommentForm
          addNewComment={this.addNewComment.bind(this)}
          setState={this.setState.bind(this)}
          state={this.state}
        />
        <form
          className={style.addCommentForm}
          onSubmit={ev => this.addNewComment(ev)}
        >
          <label
            className={style.addCommentForm__label}
            htmlFor="commentAuthor"
          >
            Имя
          </label>
          <input
            className={style.addCommentForm__input}
            type="text"
            name="commentAuthor"
            id="commentAuthor"
            placeholder="Ваше имя"
            onChange={ev => {
              this.setState({ newCommentAuthor: ev.target.value });
            }}
            value={this.state.newCommentAuthor}
            required
          />
          <label className={style.addCommentForm__label} htmlFor="commentText">
            Комментарий
          </label>
          <textarea
            className={style.addCommentForm__textarea}
            type="text"
            name="commentText"
            id="commentText"
            placeholder="Ваш комментарий"
            value={this.state.newCommentText}
            onChange={ev => {
              this.setState({ newCommentText: ev.target.value });
            }}
            required
          />
          <button className={style.addCommentForm__button} type="submit">
            Добавить комментарий
          </button>
        </form>

        <ul className={style.commentsList}>
          {this.state.comments.map((comment, i) => {
            return (
              <CommentsListItem
                key={i}
                author={comment.author}
                time={comment.time}
                text={comment.text}
                deleteComment={this.deleteComment.bind(this, i)}
              />
            );
          })}
        </ul>
      </div>
    );
  }
}


ReactDOM.render(<CommentsWigetApp />, document.getElementById("root"));
