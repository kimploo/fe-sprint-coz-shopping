import Main from "./page/Main";
import "./base.css";
import { BrowserRouter, Routes, Route, Link, Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main />
      </header>
      <Router></Router>
    </div>
  );
}

export default App;
