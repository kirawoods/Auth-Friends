import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Login } from "./components/Login";
import { PrivateRoute } from "./components/PrivateRoute";
import { Friends } from "./components/Friends";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="Navigation">
          <Link to="/login">Login</Link>
          <Link to="/protected">Friends List</Link>
        </div>
        <Switch>
          <PrivateRoute exact path="/protected" component={Friends} />
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
