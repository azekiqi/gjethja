import React from 'react';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Landingpage from "./containers/Landingpage/Landingpage";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import AboutUs from "./containers/AboutUs/AboutUs"
import "./App.scss";

export default function App() {
  return(
    <Router>

        <Switch>
            <Route exact path="/">
                <Landingpage />
            </Route>
            <Route exact path="/aboutUs">
                <AboutUs />
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

