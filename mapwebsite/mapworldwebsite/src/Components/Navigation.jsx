import React from 'react';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active": "")}end>
                    <li>accueil</li>
                </NavLink>
                <NavLink to="/About" className={(nav) => (nav.isActive ? "nav-active": "")}end>
                    <li>à propos</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;