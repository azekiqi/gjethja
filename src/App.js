import React from 'react';
import {HashRouter as Router, Switch, Route, HashRouter} from "react-router-dom";
import Landingpage from "./containers/Landingpage/Landingpage";
import Home from "./containers/Home/Home";
import "./App.scss";
import Register from "./containers/Register/Register";
import ProvidersRegister from "./containers/Register/Providers";
import SeekersRegister from "./containers/Register/Seekers";
import AuthenticatedRoute from "./components/Routes/AuthenticatedRoute";
import myProfile from "./containers/Profile/Profile";
import {connect, Provider} from "react-redux";
import SeekersHome from "./containers/SeekersHomePage/SeekersHome";
import UserProfile from "./containers/UserProfile/UserProfile";
import ReactDOM from "react-dom";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Login from "./containers/Login/Login";

function App({ token }) {
    return(
            <HashRouter>
                <Header/>
                <Switch>
                    <Route exact path="/" component={Landingpage} />
                    <Route exact path="/register" component={Register} />
                    <Route path="/login" component={Login}  />
                    <Route path="/register/seeker" component={SeekersRegister} />
                    <Route path="/register/provider" component={ProvidersRegister} />
                    <Route path="/profile" component={myProfile} />
                    <Route path="/uprofile" component={UserProfile} />

                    <AuthenticatedRoute path="/home" component={Home} token={token} />
                    <AuthenticatedRoute path="/seekershome" component={SeekersHome} token={SeekersHome} />

              </Switch>
                <Footer/>
          </HashRouter>
    );
}

const mapStateToProps = state => {
    return {
        token: state.token
    }
}

export default connect(mapStateToProps, null)(App)



