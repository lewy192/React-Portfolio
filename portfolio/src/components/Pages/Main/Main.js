import React from "react";

import "./Main.css";

import melbourne from "./Melbourne.jpg";
import portrait from "./portrait.png";

function Main() {
    return (
        <div className="main-container">
            <div
                className="profile-container"
                id="profile-container"
                style={{ backgroundImage: `url(${melbourne})` }}
            >
                <div className="profile-img-container">
                    <div
                        className="profile-img"
                        style={{
                            backgroundImage: `url(${portrait})`,
                        }}
                    ></div>
                    <div className="profile-description-container">
                        <h3 className="small-intro">Full Stack Developer</h3>
                        <h4 className="location-intro">Melbourne, Australia</h4>
                        <h3 className="name-head">
                            Hey I'm Lewis, My passion is Full Stack Web
                            Development and problem solving.
                            <br />
                            <br />
                            Building has always been my specialty from lego to
                            motorbikes and everything in between.
                        </h3>
                    </div>
                </div>
                <div className="color">
                    <h1 className="type-writer"></h1>
                    <p className="quoter">A Few Quotes That I Live By</p>
                </div>
            </div>
        </div>
    );
}

export default Main;
