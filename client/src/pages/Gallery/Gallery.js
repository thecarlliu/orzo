import React from "react";
import "./Gallery.css";

const mediums = require("../../mediums.json");

class Gallery extends React.Component {

    setGallery = () => {
        const name = this.props.match.params.medium;
        let medium="";
        if (name === mediums[0].name) {
            medium =  mediums[0];
            return medium;
        }
        else if (name === mediums[1].name) {
            medium =  mediums[1];
            return medium;

        }
        else if (name === mediums[2].name) {
            medium =  mediums[2];
            return medium;
        }
    };

    render() {
        return(
            <div className="gallery">
                <h3 className="gallery-title">{this.setGallery().name}</h3>
                {
                    this.setGallery().images.map((image) => (
                        <div><img className="gallery-image" src={image} alt=""/></div>
                    ))
                }

            </div>
        )
    }

}

export default Gallery;