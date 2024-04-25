import React from 'react';
import Navbar from "../components/navbar";
import { Link } from 'react-router-dom'; // Import Link to handle routing

const Home = () => {
    return (
        <div>
            <Navbar />
            <div style={{ textAlign: 'center' }}> {/* Center align the text */}
                <h1>Welcome to my Linux Portfolio!</h1>
                <ul style={{ listStyleType: 'none', padding: 0 }}> {/* Remove default list styling */}
                    <li><Link to="/SystemHealthDashboard">System Health Dashboard</Link></li>
                    <li><Link to="/PhotoBackup">Photo Backup</Link></li>
                    <li><Link to="/Cleanup">Cleanup</Link></li>
                    <li><Link to="/ServerHealthCheck">Server Health Check</Link></li>
                    <li><Link to="/DoOrDie">Do or Die</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default Home;
