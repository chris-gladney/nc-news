export const fetchArticlesData = (article_id) => {
  if (article_id) {
    return fetch(
      `https://chris-reddit.onrender.com/api/articles/${article_id}`
    ).then((res) => {
      return res.json();
    });
  } else {
    return fetch("https://chris-reddit.onrender.com/api/articles").then(
      (res) => {
        return res.json();
      }
    );
  }
};

export const fetchCommentsData = (article_id) => {
  return fetch(
    `https://chris-reddit.onrender.com/api/${article_id}/comments`
  ).then((res) => {
    return res.json();
  });
};
