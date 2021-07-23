import react from "react";
import "./Project.css";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

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
    const [ref, inView] = useInView({
        // triggerOnce: true,
        threshold: 0.5,
    });

    return (
        <div className="project" ref={ref}>
            <div className="photo"></div>
            <div className="description-container">
                <h3 className="project-header">TechREADY</h3>
                <motion.div className={`front-box ${inView ? "animate" : ""}`}>
                    <p className="project-description">
                        this project is awesome, check it out
                    </p>
                </motion.div>
                {/* <motion.div className={`back-box ${inView ? "animate" : ""}`}>
                    <p className="project-description">
                        this porject was awesome because...
                    </p>
                </motion.div> */}
                <ul className="tech-list">
                    <li>Node</li>
                    <li>JWT</li>
                    <li>REST API</li>
                    <li>Full - Stack</li>
                </ul>
            </div>
        </div>
    );
}
export default Project;
