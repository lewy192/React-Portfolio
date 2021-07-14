import React from "react";
import "./About.css";

import { Link } from "react";

function Header() {
    return (
        <div className="nav-bar">
            <h2 className="brand">Lernantino</h2>
            <ul className="nav-list">
                <li className="nav-item">
                    <Link href="/about" className="nav-link">
                        about
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/portfolio" className="nav-link">
                        portfolio
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/contact" className="nav-link">
                        contact
                    </Link>
                </li>
                <li className="nav-item">
                    <Link href="/resume" className="nav-link">
                        resume
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Header;
