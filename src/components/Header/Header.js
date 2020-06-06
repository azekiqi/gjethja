import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';
import Logo from './../../assets/images/gjethja-logo.png';

export default function Header() {
    return(
        <div class={"header"}>
            <div className="header_logo">
                <img src={Logo} alt="logo"/>
            </div>
            <nav className={"header_nav"}>
                <ul>
                    <li>
                        <Link to={"/home"}>Ballina</Link>
                    </li>
                    <li>
                        <Link to={"/aboutUs"}>Për ne</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Kyçu</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Regjistrohu</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
