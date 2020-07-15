import React from 'react';
import { HashRouter as Router, Switch, Route} from "react-router-dom";
import Landingpage from "./containers/Landingpage/Landingpage";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import AboutUs from "./containers/AboutUs/AboutUs"
import "./App.scss";
import { Provider } from 'react-redux';
import {store} from "./reducers/app";
import CreatePost from "./containers/CreatePost/CreatePost";
import DeletePost from "./containers/DeletePost/DeletePost";
import ProvidersRegister from "./containers/Register/ProvidersRegister";
import SeekersRegister from "./containers/Register/SeekersRegister";


export default function App() {
  return(
      <Provider store={store}>
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
                  <Route path="/register/seeker">
                      <SeekersRegister />
                  </Route>
                  <Route path="/register/provider">
                      <ProvidersRegister />
                  </Route>
                  <Route path="/create">
                      <CreatePost />
                  </Route>
                  <Route path="/delete">
                      <DeletePost />
                  </Route>
              </Switch>
          </Router>
      </Provider>

  );
}

