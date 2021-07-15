import React from "react";
import "./Header.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    return (
        <div className="nav-bar">
            <Link to="/" className="brand-link">
                <h2 className="brand">Lernantino</h2>
            </Link>
            <ul className="nav-list">
                {/* <Router> */}
                <li className="nav-item">
                    <Link to="/about" className="nav-link">
                        about
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/portfolio" className="nav-link">
                        portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">
                        contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link to="/resume" className="nav-link">
                        resume
                    </Link>
                </li>
                {/* </Router> */}
            </ul>
        </div>
    );
}

export default Header;
