import React from 'react';
import {HashRouter as Router, Switch, Route, HashRouter} from "react-router-dom";
import Landingpage from "./containers/Landingpage/Landingpage";
import Home from "./containers/Home/Home";
import Login from "./containers/Login/Login";
import AboutUs from "./containers/AboutUs/AboutUs"
import "./App.scss";
import CreatePost from "./containers/CreatePost/CreatePost";
import ProvidersRegister from "./containers/Register/ProvidersRegister";
import SeekersRegister from "./containers/Register/SeekersRegister";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import {logOut} from "./actions/user";
import myProfile from "./containers/Profile/myProfile";
import {connect, Provider} from "react-redux";
import {loadStripe} from "@stripe/stripe-js";
import {StripeProvider} from 'react-stripe-elements';
import {Elements} from 'react-stripe-elements';
import {store} from "./reducers/app";
// pk_test_51H1teeE9l7621wtln7yA1DXyqVAQ4Ld6FJwB2iLYNZKtmluZEZ93jeg2ycwuKRGOj71C7awnuQBN5qDYrDkodgp100Xdajq8Lw


function App() {
    const token = store.getState().authentication.token;
    return(
        <Provider store={store}>
            <HashRouter>
                <Switch>
      
                    <Route exact path="/" component={Landingpage} />
                    <Route exact path="/aboutUs" component={AboutUs} />
                    <Route path="/login" component={Login} />
                    <Route path="/register/seeker" component={SeekersRegister} />
                    <Route path="/register/provider" component={ProvidersRegister} />
                    <Route path="/myprofile" component={myProfile} />

                     <AuthenticatedRoute path="/home" component={Home} token={token} />
                     <AuthenticatedRoute path="/create" component={CreatePost} token={token} />
       
              </Switch>
          </HashRouter>
      </Provider>
      
    );
}

export default App



