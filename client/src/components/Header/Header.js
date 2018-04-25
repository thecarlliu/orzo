import React from "react";
import SubHeader from "../SubHeader";
// import "./Header.css";

const artistInfo = {
    fullName: "Pasta Orzo",
    resumeURL: "blablabla",
    email: "blahblahblah",
    linkedIn: "blahalabslb",
    medium1: "medium1",
    medium2: "medium2",
    medium3: "medium3"
};

const Header = () => (
    <div className="Header grid-x">
        <div className="artistName cell small-12 medium-12">
            <h1>{artistInfo.fullName}</h1>
        </div>
        <SubHeader
            resumeLink={artistInfo.resumeURL}
            emailLink={artistInfo.email}
            linkedInLink={artistInfo.linkedIn}
            medium1={artistInfo.medium1}
            medium2={artistInfo.medium2}
            medium3={artistInfo.medium3}
        />
    </div>
);

export default Header;