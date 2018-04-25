import React from "react";
import "./Home.css";
import Medium from "../../components/Medium";

const mediumSections = [
    {
        name: "medium1",
        image: "https://via.placeholder.com/300x300",
        link: "/medium1"
    },
    {
        name: "medium2",
        image: "https://via.placeholder.com/300x300",
        link: "/medium2"
    },
    {
        name: "medium3",
        image: "https://via.placeholder.com/300x300",
        link: "/medium3"
    }
];

const Home = () => (
    <div className="grid-x small-12 medium-12">
        {
            mediumSections.map((section) => (
                <Medium
                    name={section.name}
                    image={section.image}
                    link={section.link}
                />
            ))
        }
    </div>
);

export default Home;