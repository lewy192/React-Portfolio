import react from "react";
import Project from "../Project/Project";

import "./Portfolio.css";
const projects = [
    {
        name: "TechREADY",
        imgUrl: "TECHREADY.png",
        description: `This project is a personal favourite of
        mine. Here we created a space for Developers
        and aspiring Developers to come and discuss
        interview questions, find tutors and mentors
        and expand their footprint in the community.
        It was a project close to my heart as I love
        to be involved in the wonderful Development
        Community both to give and receive`,
        technologies: ["JWT", "Node", "REST Api", "Full Stack"],
    },
    {
        name: "Number 2",
        imgUrl: "",
        description: "hello this is number 2 desc",
        technologies: ["JWT", "Node", "REST Api", "Full Stack"],
    },
    {
        name: "Number 3",
        imgUrl: "",
        description: "hello this is number 3 desc",
        technologies: ["JWT", "Node", "REST Api", "Full Stack"],
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
