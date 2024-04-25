import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/SystemHealthDashboard">System Health Dashboard</Link></li>
                <li><Link to="/PhotoBackup">Photo Backup</Link></li>
                <li><Link to="/Cleanup">Cleanup</Link></li>
                <li><Link to="/ServerHealthCheck">Server Health Check</Link></li>
                <li><Link to="/DoOrDie">Do Or Die</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
