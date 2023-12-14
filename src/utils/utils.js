export const fetchArticlesData = () => {
  return fetch("https://chris-reddit.onrender.com/api/articles").then((res) => {
    return res.json();
  });
};
