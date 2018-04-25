import React from "react";
import "./Gallery.css";

const mediums = require("../../mediums.json");
let medium = "";

if (path=== mediums[0].name) {
    medium = mediums[0];
}
else if (path === mediums[1].name) {
    medium = mediums[1];
}
else if (path === mediums[2].name) {
    medium = mediums[2];
}

const Gallery = () => (
    <div>
        {medium}
    </div>
);

export default Gallery;