// src/components/NavBar/NavBar.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar: React.FC = () => {
    const [navbarColor, setNavbarColor] = useState('transparent');

    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setNavbarColor('red');
        } else {
            setNavbarColor('transparent');
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNavbarColor);
        return () => window.removeEventListener('scroll', changeNavbarColor);
    }, []);

    return (
        <nav className={`navbar navbar-${navbarColor}`}>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li className="dropdown">
                    <Link to="/services">Services</Link>
                    <div className="dropdown-content">
                        <Link to="/services/service1">Service 1</Link>
                        <Link to="/services/service2">Service 2</Link>
                        <Link to="/services/service3">Service 3</Link>
                    </div>
                </li>
                <li>
                    <Link to="/contact">Contact Us</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
