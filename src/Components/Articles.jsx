import { useEffect, useState } from "react";
import Article from "./Article";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://chris-reddit.onrender.com/api/articles")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setArticles(data);
      });
  }, []);

  return (
    <div className="articles-container">
      <h2 className="article-title">Articles</h2>
      <select className="sort_by">
        <option value="date">Date</option>
        <option value="topic">Topic</option>
      </select>
      <div className="articles">
        {articles.map((article) => {
          return (
            <Article
              key={article.article_id}
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

export default Articles;
