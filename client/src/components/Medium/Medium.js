import React from "react";
import "./Medium.css";

const Medium = (props) => (
    <div className="medium-section cell small-12 medium-12">
        <h3 className="medium-section-title">{props.name}</h3>
        <a className="medium-section-link" href={props.name}>
            <img className="medium-section-image" src={props.image} alt={props.name}/>
        </a>
    </div>
);

export default Medium;