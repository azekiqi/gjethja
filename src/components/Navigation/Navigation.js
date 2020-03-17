import React from 'react';
import './Navigation.css';

const navigation  = props => (
    <header className="navigation">
        <nav className="toolbar_navigation">
            <div></div>
            <div className="navigation_logo"><a href='/'>The Logo</a></div>
            <div className="navigation_list">
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/'>Blog</a></li>
                    <li><a href='/'>About us</a></li>
                    <li><a href='/'>Contact us</a></li>
                </ul>
            </div>
        </nav>
    </header>
);

export default navigation;