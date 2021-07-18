import React, { useState } from "react";
import "./Header.css";

import { BrowserRouter as Router, Link } from "react-router-dom";

import Signature from "./Signature";

function Header() {
    const [className, setClassNameDecider] = useState(false);
    const transformClassDecider = () => {
        className ? setClassNameDecider(false) : setClassNameDecider(true);
    };
    const transformClass = () => {
        return className ? "transformed" : "";
    };
    // const

    return (
        <div className="side-navbar">
            <Link to="/" className="brand-link" tabIndex="0">
                <Signature />
            </Link>
            <nav className={`nav-bar ${transformClass()}`}>
                <ul className={`nav-list nav-list1 ${transformClass()}`}>
                    <li className={`list-item list-item1 ${transformClass()}`}>
                        <Link
                            to="/about"
                            className="nav-link"
                            onClick={transformClassDecider}
                        >
                            about
                        </Link>
                    </li>
                    <li className={`list-item list-item2 ${transformClass()}`}>
                        <Link
                            to="/portfolio"
                            className="nav-link"
                            onClick={transformClassDecider}
                        >
                            portfolio
                        </Link>
                    </li>
                    <li className={`list-item list-item3 ${transformClass()}`}>
                        <Link
                            to="/contact"
                            className="nav-link"
                            onClick={transformClassDecider}
                        >
                            contact
                        </Link>
                    </li>
                    <li className={`list-item list-item4 ${transformClass()}`}>
                        <Link
                            to="/resume"
                            className="nav-link"
                            onClick={transformClassDecider}
                        >
                            resume
                        </Link>
                    </li>
                </ul>
            </nav>
            <div className="burger-menu" onClick={transformClassDecider}>
                <div className={`line1 ${transformClass()}`}></div>
                <div className={`line2 ${transformClass()}`}></div>
                <div className={`line3 ${transformClass()}`}></div>
            </div>
        </div>
    );
}

export default Header;
