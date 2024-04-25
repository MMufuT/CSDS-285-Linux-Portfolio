import React from 'react';
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom';
import DocTitle from '../components/docTitle';

const Home = () => {
    DocTitle('Home')

    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'center' }}>
                <h1>Welcome to my Linux Portfolio!</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                    <li><Link to="/SystemHealthDashboard">System Health Dashboard</Link></li>
                    <li><Link to="/PhotoBackup">Photo Backup</Link></li>
                    <li><Link to="/Cleanup">Cleanup</Link></li>
                    <li><Link to="/ServerHealthCheck">Server Health Check</Link></li>
                    <li><Link to="/DoOrDie">Do or Die</Link></li>
                </ul>
                <hr />
                <h3>GitHub Repository</h3>
                <p><a target='blank_' href='https://github.com/MMufuT/CSDS-285-Linux-Portfolio'>Here</a></p>
            </div>
        </div>
    );
}

export default Home;
