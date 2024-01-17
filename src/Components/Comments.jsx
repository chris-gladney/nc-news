import { useEffect, useState } from "react";
import { fetchCommentsData } from "../utils/utils";

function Comments({ article_id }) {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetchCommentsData(article_id).then((data) => {
      setComments(data);
    });
  }, []);

  return (
    <div className="comments-container">
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.comment_id}>
            <h4>{comment.author}</h4>
            <p>{comment.body}</p>
          </div>
        );
      })}
    </div>
  );
}

export default Comments;
