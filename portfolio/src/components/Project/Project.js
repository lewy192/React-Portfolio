import react from "react";
import "./Project.css";

function Project({ project }) {
    return (
        <div className="project-card">
            <div
                className="project-img"
                style={{ backgroundImage: `url(${project.imgUrl})` }}
            ></div>
            <div className="project-details">
                <h2 className="project-header">{project.name}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">{project.technologies}</p>
            </div>
        </div>
    );
}
export default Project;
