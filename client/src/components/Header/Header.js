import React from "react";
import SubHeader from "../SubHeader";
import "./Header.css";

const artistInfo = require("../../artistInfo.json");

const Header = () => (
    <div className="header grid-x">
        <div className="header-artist-name cell small-12 medium-12">
            <a href="/">{artistInfo.fullName}</a>
        </div>
        <SubHeader
            resumeLink={artistInfo.resume}
            emailLink={artistInfo.email}
            linkedInLink={artistInfo.linkedIn}
            medium1={artistInfo.medium1}
            medium2={artistInfo.medium2}
            medium3={artistInfo.medium3}
        />
    </div>
);

export default Header;