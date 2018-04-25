import React from "react"
import "./Footer.scss"

const artistInfo = {
    name: "Pasta Orzo",
    resume: "wkjfwofj",
    email: "oewifowifn",
    linkedIn: "oefoif3",
    medium1: "/medium1",
    medium2: "/medium2",
    medium3: "/medium3"
};

const Footer = () => (
    <footer className="grid-x medium-12">
        <div className="cell medium-6">
            <h5>{artistInfo.name}</h5>
                <a href={artistInfo.resume}>resume</a><br/>
                <a href={artistInfo.email}>email</a><br/>
                <a href={artistInfo.linkedIn}>linkedIn</a>

        </div>
        <div className="cell medium-6">
            <h5>Galleries</h5>
            <a href={artistInfo.medium1}>medium1</a><br/>
            <a href={artistInfo.medium2}>medium2</a><br/>
            <a href={artistInfo.medium3}>medium3</a>
        </div>
        <div className="cell medium-2">
            <p>Copy right artist2018</p>
        </div>
    </footer>
);

export default Footer;