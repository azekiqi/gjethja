import React from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header';
import Landingpage from "./containers/Landingpage";
import Home from "./containers/Home";
import Login from "./containers/Login";
import Register from "./containers/Register";
import "./App.scss";

export default function App() {
  return(
    <Router>

        <Switch>
            <Route exact path="/">
                <Landingpage />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            <Route path="/login">
                <Login />
            </Route>
            <Route path="/register">
                <Register />
            </Route>
        </Switch>

    </Router>
  );
}
