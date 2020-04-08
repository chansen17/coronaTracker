import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
            <nav className="navbar">
                <ul className="navbar-nav">
                    <li className="logo">
                        <a href="#" className="nav-link">
                            <i className="fas fa-spider"></i>
                            <span className="link-text">Covid-19</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" exact to="/" activeClassName="current" activeStyle={{color: "#eee"}}>
                        <i className="fas fa-globe-americas"></i>
                        <span className="link-text">Global</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/country" activeClassName="current" activeStyle={{color: "#eee"}}>
                        <i className="fas fa-flag"></i>
                        <span className="link-text">Country</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/headlines" activeClassName="current" activeStyle={{color: "#eee"}}>
                        <i className="far fa-newspaper"></i>
                        <span className="link-text">Headlines</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about" activeClassName="current" activeStyle={{color: "#eee"}}>
                        <i className="far fa-address-card"></i>
                        <span className="link-text">About</span>
                        </NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/resources" activeClassName="current" activeStyle={{color: "#eee"}}>
                        <i className="far fa-hospital"></i>
                        <span className="link-text">Resources</span>
                        </NavLink>
                    </li>
                </ul>
            </nav>
    );
}

export default Navbar;
