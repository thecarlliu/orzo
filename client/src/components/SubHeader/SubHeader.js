import React from "react";
import "./SubHeader.css";

const SubHeader = (props) => (
    <div className="subheader-links cell medium-12">
        <h3><a href={props.resumeLink}>resume</a> | <a href={props.emailLink}>email</a> | <a href={props.linkedInLink}>linkedIn</a></h3>
        <h4><a href={props.medium1}>{props.medium1}</a> | <a href={props.medium2}>{props.medium2}</a> | <a href={props.medium3}>{props.medium3}</a></h4>
    </div>
);

export default SubHeader;