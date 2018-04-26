import React from "react";
import "./Medium.css";

const Medium = (props) => (
    <div className="medium-section cell small-12 medium-12">
        <h3>{props.name}</h3>
        <a href={props.name}>
            <img src={props.image} alt={props.name}/>
        </a>
    </div>
);

export default Medium;