export default class Comment {
                 constructor(author, time, text, comments, state) {
                   this.author = author;
                   this.time = time;
                   this.text = text;
                   this.comments = comments;
                   this.updateState = state;
                 }

                 delete(id, updateState) {
                   const comments = this.comment.comments;
                                      
                   comments.forEach((comment, i) => {
                     if (id === i) {
                       comments.splice(i, 1);
                     }
                     return comments;
                   });

                   updateState({
                      comments,
                      newCommentAuthor: "",
                      newCommentText: ""
                    })

                    if (comments.length > 0) {
                      localStorage.setItem("comments", JSON.stringify(comments));
                    } else {
                      localStorage.clear();
                    }

                 }

                 toJSON() {return (this.author, this.time, this.text, this.comments)}
                 
               }