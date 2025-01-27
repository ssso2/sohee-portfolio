import { useState } from "react";
import "../styles/common.scss";
import "../styles/project.scss";
import { viewtype, projectview } from "./Projectdata_s";
import Ppop from "./Ppop_new";

const Project_s: React.FC = () => {
    const [popup, setpopup] = useState<viewtype | null>(null);
    console.log("projectview배열", projectview);
    return (
        <>
            <div id="project" className="projectwrapper white flexC">
                <div className="projectwrap">
                    {/* <p className="titlename">SOHEE</p> */}
                    <p className="titlename"> PROJECT</p>
                    <div className="line">
                        {projectview.map(project => (
                            <div className="imgwrap" key={project.id}>
                                <img src={project.img} alt="silla" />
                                <div className="hoverimg">
                                    <img
                                        src={project.logo}
                                        alt="projectlogo"
                                        onClick={() => setpopup(project)}
                                    />
                                </div>
                                <span className="des">
                                    <p className="white subtitle1">
                                        {project.title}
                                    </p>
                                    <p className="Caption2">
                                        {project.description}
                                    </p>
                                </span>
                            </div>
                        ))}
                    </div>
                    {popup && (
                        <Ppop
                            projectview={[popup]}
                            onClose={() => setpopup(null)}
                        />
                    )}
                </div>
            </div>
        </>
    );
};

export default Project_s;
