import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header fixed-top">
            <h2 className="logo"><Link to='/home'>BLOG</Link></h2>
            <nav className="navigation">
                <ul className="main-menu">
                    <li><Link to='/home'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <div class="dropdown">
                        <button class="dropbtn">Dropdown</button>
                        <div class="dropdown-content">
                            <Link to='/user'>User</Link>
                            <Link to='/blog'>Blog</Link>
                            <Link to='/post'>Post</Link>
                            <Link to='/comment'>Comment</Link>
                        </div>
                    </div>
                    <li><Link to='/contact'>Contact</Link></li>
                    <li><Link to='/login'>Login</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;