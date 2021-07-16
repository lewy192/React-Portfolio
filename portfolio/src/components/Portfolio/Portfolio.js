import react from "react";
import Project from "../Project/Project";

import "./Portfolio.css";
const projects = [
    {
        name: "Number 1",
        imgUrl: "",
        description: "hello this is number 1 desc",
        technologies: "JWT, Node, React",
    },
    {
        name: "Number 2",
        imgUrl: "",
        description: "hello this is number 2 desc",
        technologies: "JWT, Node, React",
    },
    {
        name: "Number 3",
        imgUrl: "",
        description: "hello this is number 3 desc",
        technologies: "JWT, Node, React",
    },
];

function Portfolio() {
    return (
        <div className="projects-container">
            {projects.map((project) => (
                <Project project={project} key={project.name} />
            ))}
        </div>
    );
}
export default Portfolio;
