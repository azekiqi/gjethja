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
import ProvidersRegister from "./containers/Register/ProvidersRegister";
import SeekersRegister from "./containers/Register/SeekersRegister";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import {logOut} from "./actions/user";

export default function App() {
    const token = localStorage.getItem("token");
    return(
      <Provider store={store}>
          <Router>
              <Switch>
                  <Route exact path="/" component={Landingpage} />
                  <Route exact path="/aboutUs" component={AboutUs} />
                  <Route path="/login" component={Login} />
                  <Route path="/register/seeker" component={SeekersRegister} />
                  <Route path="/register/provider" component={ProvidersRegister} />

                  <AuthenticatedRoute path="/home" component={Home} token={token} />
                  <AuthenticatedRoute path="/create" component={CreatePost} token={token} />

              </Switch>
          </Router>
      </Provider>
    );
}

