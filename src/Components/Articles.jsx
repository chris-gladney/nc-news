import { useEffect, useState } from "react";
import Article from "./Article";
import { fetchArticlesData } from "../utils/utils";
import { Link } from "react-router-dom";

function Articles({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchArticlesData().then((data) => {
      setArticles(data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return (
      <div className="isLoading">
        <h2>Page is Loading</h2>
      </div>
    );
  } else if (!user) {
    return (
      <>
        <Link to="/">
          <button>Login to view articles</button>
        </Link>
      </>
    );
  } else {
    return (
      <div className="articles-container">
        <h2 className="article-title">Topics</h2>
        <select className="sort_by">
          <option value=""></option>
          {}
        </select>
        <div className="articles">
          {articles.map((article) => {
            return (
              <Article
                key={article.article_id}
                article_id={article.article_id}
                title={article.title}
                topic={article.topic}
                author={article.author}
                body={article.body}
                created_at={article.created_at}
                votes={article.votes}
                article_image_url={article.article_img_url}
                comment_count={article.comment_count}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Articles;
