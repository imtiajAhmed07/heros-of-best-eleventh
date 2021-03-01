import React from 'react';
import './Header.css'

const Header = () =>
{
    return (
        <header className="header">
            <nav className="navBar">
                <a className="logo" href="">Heros of Best Eleventh</a>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Players</a></li>
                    <li><a href="">Blog</a></li>
                    <li><a href="">More Info</a></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;