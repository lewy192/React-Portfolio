import React from "react";

import "./About.css";
import hotham from "./Hotham.jpg";

function About() {
    // if (screen.width > 768) {
    //     const imgBehind = `none`;
    // }
    return (
        <div className="about-page">
            <div
                className="about-container"
                style={{ backgroundImage: `url(${hotham})` }}
            >
                <p className="about-desc">
                    Ever since a young age, building has come natural. It
                    started with lego which quickly progressed to meccano and
                    eventually computers. <br />
                    <br />
                    January 2020 a new door opened for me, reintroduction to
                    programming, I started learning python and MySQL. Quick came
                    a realisation... That anything could now be built.
                    <br />
                    <br />I was no longer restricted by the number of bricks I
                    had in my box or the sets of instructions I owned. It was
                    this that lead me to where I am currently, the realisation I
                    can build anything.
                </p>
                <div
                    className="about-image"
                    style={{ backgroundImage: `url(${hotham})` }}
                ></div>
            </div>
        </div>
    );
}

export default About;
