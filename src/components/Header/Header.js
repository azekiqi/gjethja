import React from 'react';
import { Link, withRouter  } from 'react-router-dom';
import './Header.scss';
import Logo from './../../assets/images/gjethja-logo.png';
import { connect } from "react-redux";
import {logOut} from "../../actions/user";

const token = localStorage.getItem("token");

function Header(props) {
    return(
        <div class={"header"}>
            <div className="header_logo">
                <Link to={"/"}>
                        <img src={Logo} alt="logo"/>
                </Link>
            </div>
            <nav className={"header_nav"}>
                <ul>
                    <li>
                        <Link to={"/"}>Ballina</Link>
                    </li>
                    <li>
                        <Link to={"/aboutUs"}>Për ne</Link>
                    </li>
                    {
                        !token ?
                            <>
                                <li>
                                    <Link to={"/login"}>Kyçu</Link>
                                </li>
                                <li>
                                    <Link to={"/register"}>Regjistrohu</Link>
                                </li>

                            </> :
                            <>
                                <button className="btn btn-primary"
                                        onClick={() => props.history.push("/create")}>
                                    Create Post
                                </button>
                                <button className="btn btn-primary"
                                        onClick={() => props.logOut()}>
                                    Log out
                                </button>
                            </>

                    }
                </ul>
            </nav>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    logOut: data => dispatch(logOut())
})

export default withRouter(connect(null, mapDispatchToProps)(Header));