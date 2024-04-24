import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/largeProj">Large Project</Link></li>
                <li><Link to="/smallProj1">Small Project 1</Link></li>
                <li><Link to="/smallProj2">Small Project 2</Link></li>
                <li><Link to="/smallProj3">Small Project 3</Link></li>
                <li><Link to="/smallProj4">Small Project 4</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
