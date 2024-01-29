import { useContext, useEffect, useState } from "react";
import { ArticlePathContext } from "../App";
import Article from "./Article";
import { fetchArticlesData } from "../utils/utils";

function IndividualArticle({ user }) {
  const [isLoading, setIsLoading] = useState(true);
  const { article_id } = useContext(ArticlePathContext);
  const [article, setArticle] = useState([]);

  useEffect(() => {
    fetchArticlesData(article_id).then((data) => {
      setArticle(data);
      setIsLoading(false);
    });
  }, [article_id]);

  if (isLoading) {
    return (
      <div className="isLoading">
        <h2>Page is Loading</h2>
      </div>
    );
  } else if (!article) {
    return (
      <div className="unavailable-article">
        <h2>No Article Exists</h2>
      </div>
    );
  } else {
    return (
      <Article
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
  }
}

export default IndividualArticle;
