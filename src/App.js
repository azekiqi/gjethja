import React from 'react';
import { HashRouter as Router, Switch, Route, Link} from "react-router-dom";
import Header from './components/Header/Header';
import LandingPage from "./containers/Landingpage/LandingPage";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import Register from "./containers/Register/Register";
import AboutUs from "./containers/AboutUs/AboutUs"
import Profile from "./components/Profile/Profile";
import Footer from "./components/Footer/Footer";
import "./App.scss";

export default function App() {
  return(
    <Router>

        <Switch>
            <Route exact path="/">
                <LandingPage />
            </Route>
            <Route exact path="/aboutUs">
                <AboutUs />
            </Route>
            <Route path="/home">
                <Home />
            </Route>
            {/*<Route path="/home/profile">*/}
            {/*    <Profile />*/}
            {/*</Route>*/}
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
