// src/pages/Home.tsx

import React from 'react';

const Navigation: React.FC = () => {
    return (
        <nav className="navbar">
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/admin-dashboard">Admin Dashboard</a></li>
                <li><a href="/employee-dashboard">Employee Dashboard</a></li>
                {/* Add more navigation links as needed */}
            </ul>
        </nav>
    );
};

const HomePageBanner: React.FC = () => {
    return (
        <div className="banner">
            <Navigation />
            <div className="banner-content">
                <h1>Welcome to Our Software Company</h1>
                <p>Explore our solutions for your business needs.</p>
            </div>
        </div>
    );
};

const Home: React.FC = () => {
    return (
        <div>
            <HomePageBanner />
            <div className="main-content">
                <h2>Company Overview</h2>
                <p>Content about the company and its services...</p>
            </div>
        </div>
    );
};

export default Home;
