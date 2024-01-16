import { useState, createContext } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import Article from "./Components/Article";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ArticleContext = createContext("");
export const FetchedArticles = createContext([]);

function App() {
  const [articleId, setArticleId] = useState("");
  const [articleProps, setArticleProps] = useState({});

  return (
    <ArticleContext.Provider
      value={{
        articleId,
        setArticleId,
        articleProps,
        setArticleProps,
      }}
    >
      <BrowserRouter>
        <Header />
        <Routes>
          {/* <Route
            path={`/${articleId}`}
            element={<Article />}
          ></Route> */}
          <Route
            path="/"
            element={<Articles />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ArticleContext.Provider>
  );
}

export default App;
