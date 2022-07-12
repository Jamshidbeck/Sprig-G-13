import React from 'react';
import {
    BrowserRouter as Router,
    NavLink,
} from 'react-router-dom';

import 'primeicons/primeicons.css';

// image 
import logo from "../asets/Azimjon/logo.png"

export function Navbar() {
    return (
        <Router>
            <nav>
                <div className="logo">
                    <img src={logo} alt="" />
                    <span>formerly UserLeap</span>
                </div>
                <div className="linklar">
                    <NavLink to="/">Why Sprig?</NavLink>
                    <NavLink to="/">Product <i className="pi pi-angle-down"></i></NavLink>
                    <NavLink to="/">Customers <i className="pi pi-angle-down"></i></NavLink>
                    <NavLink to="/">Resources <i className="pi pi-angle-down"></i></NavLink>
                    <NavLink to="/">Plans</NavLink>
                </div>
                <div className="logIn">
                    <button>Sign In</button>
                    <button>Talk to Sales</button>
                    <button>Start for Free</button>
                </div>
            </nav>
        </Router>
    );
}

