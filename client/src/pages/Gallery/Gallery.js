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
            <div className="gallery grid-x medium-12">
                <div className="gallery-title cell medium-12">
                    <h3 >{this.setGallery().name}</h3>
                </div>
                <div className="gallery-images grid-x medium-12">
                {
                    this.setGallery().images.map((image) => (
                        <div className="gallery-image cell medium-4">
                            <img className="" src={image} alt=""/>
                        </div>
                    ))
                }
                </div>
            </div>
        )
    }

}

export default Gallery;