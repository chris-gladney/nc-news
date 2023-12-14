import { Link } from "react-router-dom";

function Article({
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  article_image_url,
  comment_count,
}) {
  return (
    <div className="article">
        
      <h4>{title}</h4>
      {article_image_url ? (
        <img src={article_image_url} alt={`image by ${author}`} />
      ) : null}
      <p>{body}</p>
      <p>{author}</p>
      <p>Topic: {topic}</p>
      <p>Date: {created_at}</p>
      <div className="votes">
        <h5>Votes</h5>
        <p>{votes}</p>
      </div>
      <div className="comments">
        <button>Show Comments</button>
        <p>{comment_count}</p>
      </div>
    </div>
  );
}

export default Article;
