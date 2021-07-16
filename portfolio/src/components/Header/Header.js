import React, { useState } from "react";
import "./Header.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

function Header() {
    const [className, setClassName] = useState(false);

    return (
        <div className="side-navbar">
            <Link to="/" className="brand-link">
                <h2 className="brand">L H</h2>
            </Link>
            <nav className={`nav-bar ${className ? "transformed" : ""}`}>
                <ul className="nav-list nav-list1">
                    <li
                        className={`list-item list-item1 ${
                            className ? "transform" : ""
                        }`}
                    >
                        <Link to="/about" className="nav-link">
                            about
                        </Link>
                    </li>
                    <li
                        className={`list-item list-item2 ${
                            className ? "transform" : ""
                        }`}
                    >
                        <Link to="/portfolio" className="nav-link">
                            portfolio
                        </Link>
                    </li>
                    <li
                        className={`list-item list-item3 ${
                            className ? "transform" : ""
                        }`}
                    >
                        <Link to="/contact" className="nav-link">
                            contact
                        </Link>
                    </li>
                    <li
                        className={`list-item list-item4 ${
                            className ? "transform" : ""
                        }`}
                    >
                        <Link to="/resume" className="nav-link">
                            resume
                        </Link>
                    </li>
                </ul>
            </nav>
            <div
                className="burger-menu"
                onClick={() => {
                    className ? setClassName(false) : setClassName(true);
                }}
            >
                <div
                    className={`line1 ${className ? "transformed" : ""}`}
                ></div>
                <div
                    className={`line2 ${className ? "transformed" : ""}`}
                ></div>
                <div
                    className={`line3 ${className ? "transformed" : ""}`}
                ></div>
            </div>
        </div>
    );
}

export default Header;
