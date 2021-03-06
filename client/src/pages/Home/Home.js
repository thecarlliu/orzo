import React from "react";
import "./Home.css";
import Medium from "../../components/Medium";

const mediums = require("../../mediums.json");

const Home = () => (
    <div className="home-mediums-area grid-x small-12 medium-12">
        {
            mediums.map((medium) => (
                <Medium
                    name={medium.name}
                    image={medium.image}
                />
            ))
        }
    </div>
);

export default Home;