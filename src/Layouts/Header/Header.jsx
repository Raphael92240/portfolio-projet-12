import React from 'react';
import { NavLink } from "react-router-dom";
import './header.css';

const Header = () => {
    return (
        <header>
            <nav className="main-nav">
                <NavLink to="/" className="main-nav-logo" >
                    <h1 className="">portfolio demo</h1>
                </NavLink>
                <div className='main-nav-link'>
                    <NavLink to="/Home" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ffffff" } : { borderBottom: "unset" }} >
                        mon travail</NavLink>
                    <NavLink to="/About" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ffffff" } : { borderBottom: "unset" }} >
                        About</NavLink>
                    <NavLink to="/Contact" className="navlink" style={({ isActive }) => isActive ? { borderBottom: "1px solid #ffffff" } : { borderBottom: "unset" }} >
                        Contact</NavLink>
                </div>
            </nav>
        </header>
    );
};

export default Header;