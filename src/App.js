import React from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import Landingpage from "./containers/Landingpage/Landingpage";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
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
