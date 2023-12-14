import "./App.css";
import Articles from "./Components/Articles";
import Header from "./Components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Articles />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
