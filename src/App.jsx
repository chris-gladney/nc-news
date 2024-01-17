import { useState, createContext } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import IndividualArticle from "./Components/IndividualArticle";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export const ArticlePathContext = createContext("");

function App() {
  const [article_id, setArticle_id] = useState("");

  return (
    <ArticlePathContext.Provider value={{ article_id, setArticle_id }}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route
            path={`/${article_id}`}
            element={<IndividualArticle />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ArticlePathContext.Provider>
  );
}

export default App;
