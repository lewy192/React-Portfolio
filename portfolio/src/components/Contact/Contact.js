import React, { useState } from "react";

import "./Contact.css";

function Contact() {
    const [name, setUsersName] = useState();

    const sendEmail = (e) => {
        e.preventDefault();
    };

    return (
        <div className="contact-container">
            <p className="contact-me-para"></p>
            <h2 className="contact-me">&lt;Contact Me/&gt;</h2>
            <form className="contact-form" onSubmit={sendEmail}>
                <label htmlFor="name-field" className="name-label">
                    Name:
                </label>
                <input type="text" id="name-field" name="fullName" />
                <label htmlFor="contact-field" className="contact-label">
                    Contact Details:
                </label>
                <input type="text" id="contact-field" name="contactDetails" />
                <label htmlFor="message-field" className="message-label">
                    Message:
                </label>
                <textarea
                    name="message"
                    id="message-field"
                    cols="30"
                    rows="10"
                ></textarea>
                <button type="submit" className="submit button">
                    Send
                </button>
            </form>
            <h2 className="contact-me">&lt;/Contact Me&gt;</h2>
        </div>
    );
}
export default Contact;
