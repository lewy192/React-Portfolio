import react from "react";
import "./Project.css";

// const trial = `  <div className="project-card">
// <div
//     className="project-img"
//     style={{ backgroundImage: `url(${project.imgUrl})` }}
// ></div>
// <div className="project-details">
//     <h2 className="project-header">{project.name}</h2>
//     <p className="project-description">{project.description}</p>
//     <p className="project-technologies">{project.technologies}</p>
// </div>
// </div>`
function Project({ project }) {
    return (
        <div className="project">
            <div className="photo"></div>
            <div className="description-container">
                <h3 className="project-header">TechREADY</h3>
                <div className="front-box"></div>
                <div className="back-box">
                    <p className="project-description">
                        this porject was awesome because...
                    </p>
                </div>
                <h3 className="tech-list">JWT, Node RESTful,</h3>
            </div>
        </div>
    );
}
export default Project;
