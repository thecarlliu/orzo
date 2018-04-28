import React from "react"
import "./Footer.css"

const artistInfo = require("../../artistInfo.json");

const Footer = () => (
    <footer className="footer grid-x medium-12">
        <div className="footer-back-to-top cell medium-12">
            <a href="#">back to top</a>
        </div>
        <div className="footer-artist-name cell medium-6">
            <h5>{artistInfo.fullName}</h5>
                <a href={artistInfo.resume}>resume</a><br/>
                <a href={artistInfo.email}>email</a><br/>
                <a href={artistInfo.linkedIn}>linkedIn</a>

        </div>
        <div className="footer-gallery-links cell medium-6">
            <h5>Galleries</h5>
            <a href={artistInfo.medium1}>{artistInfo.medium1}</a><br/>
            <a href={artistInfo.medium2}>{artistInfo.medium2}</a><br/>
            <a href={artistInfo.medium3}>{artistInfo.medium3}</a>
        </div>
        <div className="footer-copyright cell medium-12">
         Copyright Artist 2018
        </div>
    </footer>
);

export default Footer;