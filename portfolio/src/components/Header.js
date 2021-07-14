import React from "react";
import "./About.css";

function Header() {
    return (
        <div className="nav-bar">
            <h2 className="brand">Lernantino</h2>
            <ul className="nav-list">
                <li className="nav-item">
                    <a href="/about" className="nav-link">
                        about
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/portfolio" className="nav-link">
                        portfolio
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/contact" className="nav-link">
                        contact
                    </a>
                </li>
                <li className="nav-item">
                    <a href="/resume" className="nav-link">
                        resume
                    </a>
                </li>
            </ul>
        </div>
    );
}

export default Header;
