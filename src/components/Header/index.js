import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';

export default function Header() {
    return(
        <div class={"header"}>
            <div className="header_logo">
                GJETHJA
            </div>
            <nav className={"header_nav"}>
                <ul>
                    <li>
                        <Link to={"/home"}>Home</Link>
                    </li>
                    <li>
                        <Link to={"/login"}>Login</Link>
                    </li>
                    <li>
                        <Link to={"/register"}>Register</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
