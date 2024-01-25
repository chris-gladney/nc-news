import { Link } from "react-router-dom";
import { ArticlePathContext } from "../App";
import { useContext, useState } from "react";
import Comments from "./Comments";
import Votes from "./Votes";

function Article({
  article_id,
  title,
  topic,
  author,
  body,
  created_at,
  votes,
  article_image_url,
  comment_count,
}) {
  const { setArticle_id } = useContext(ArticlePathContext);
  const [showComments, setShowComments] = useState(false);
  const [upVote, setUpVote] = useState(false);
  const [downVote, setDownVote] = useState(false);

  const handleRedirect = (article_id) => {
    setArticle_id(article_id);
  };

  return (
    <div className="article">
      <Link
        to={`/${article_id}`}
        onClick={() => {
          handleRedirect(article_id);
        }}
      >
        <h4>{title}</h4>
      </Link>
      {article_image_url ? (
        <img src={article_image_url} alt={`image by ${author}`} />
      ) : null}
      <p>{body}</p>
      <p>{author}</p>
      <p>Topic: {topic}</p>
      <p>Date: {created_at}</p>

      <Votes
        article_id={article_id}
        votes={votes}
        upVote={upVote}
        downVote={downVote}
        setUpVote={setUpVote}
        setDownVote={setDownVote}
      />

      <div className="comments">
        {showComments ? <Comments article_id={article_id} /> : ""}
        <button
          onClick={() => {
            setShowComments(!showComments);
          }}
        >
          Comments {comment_count}
        </button>
      </div>
    </div>
  );
}

export default Article;
