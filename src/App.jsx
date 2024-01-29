import { useState, createContext, useEffect } from "react";
import "./App.css";
import Articles from "./Components/Articles";
import IndividualArticle from "./Components/IndividualArticle";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import User from "./Components/User";

export const ArticlePathContext = createContext("");

function App() {
  const [article_id, setArticle_id] = useState("");
  const [user, setUser] = useState("");
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    
  }, [])

  return (
    <ArticlePathContext.Provider value={{ article_id, setArticle_id }}>
      <BrowserRouter>
        <Header setUser={setUser} />
        {user ? <User user={user} /> : ""}
        <Routes>
          <Route path="/" element={<Login setUser={setUser} />}></Route>
          <Route path="/articles" element={<Articles user={user} />}></Route>
          <Route
            path={`/${article_id}`}
            element={<IndividualArticle user={user} />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </ArticlePathContext.Provider>
  );
}

export default App;
