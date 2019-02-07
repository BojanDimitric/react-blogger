import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer fixed-bottom">
            <p className="text-center">
                <Link to='/home'>2019 @ Bojan Dimitric</Link>
            </p>
        </footer>
    );
};

export default Footer;