import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Login } from "./components/Login";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navigation">
          <Login />
        </div>
      </div>
    </Router>
  );
}

export default App;
