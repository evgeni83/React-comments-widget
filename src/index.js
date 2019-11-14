import React from "react";
import ReactDOM from "react-dom";
import CommentForm from "./components/commentForm/commentForm";
import CommentList from "./components/commentList/commentList";
import Comment from "./components/comment"
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
    
    if (this.state.newCommentAuthor !== "" && this.state.newCommentText !== "") {

      let commentModel = new Comment(
        this.state.newCommentAuthor,
        [new Date().toLocaleString()],
        this.state.newCommentText,
        comments,
        this.setState
      );

      comments.push({
        author: commentModel.author,
        time: commentModel.time,
        text: commentModel.text
      });
      
    };

    this.setState({
      comments,
      newCommentAuthor: "",
      newCommentText: ""
    });
 
    localStorage.setItem("comments", JSON.stringify(comments));
  };

  render() {
    return (
      <div className={style.appWrapper}>
        <CommentForm
          addNewComment={this.addNewComment.bind(this)}
          setState={this.setState.bind(this)}
          state={this.state}
        />
        <CommentList 
          setState={this.setState.bind(this)} 
          state={this.state} 
        />
      </div>
    );
  }
}


ReactDOM.render(<CommentsWigetApp />, document.getElementById("root"));
