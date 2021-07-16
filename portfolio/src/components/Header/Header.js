import React, { useState } from "react";
import "./Header.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    const [className, setClassName] = useState("");

    return (
        <div className="side-navbar">
            <Link to="/" className="brand-link">
                <h2 className="brand">L H</h2>
            </Link>
            <nav className="nav-bar">
                <ul className="nav-list nav-list1">
                    <li className="list-item list-item1">
                        <Link to="/about" className="nav-link">
                            about
                        </Link>
                    </li>
                    <li className="list-item list-item2">
                        <Link to="/portfolio" className="nav-link">
                            portfolio
                        </Link>
                    </li>
                    <li className="list-item list-item3">
                        <Link to="/contact" className="nav-link">
                            contact
                        </Link>
                    </li>
                    <li className="list-item list-item4">
                        <Link to="/resume" className="nav-link">
                            resume
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="burger-menu">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </div>
    );
}

export default Header;
