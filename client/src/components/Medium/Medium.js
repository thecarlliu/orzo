import React from "react";
// import "./Medium.css";

const Medium = (props) => (
    <div className="medium-section cell small-12 medium-12">
        <a href={props.link}>
            <h3>{props.name}</h3>
            <img src={props.image} alt="" />
        </a>
    </div>
);

export default Medium;