import { useState } from "react";
import "../styles/common.scss";
import "../styles/project.scss";
import { viewtype, projectview } from "./Projectdata";
import Ppop from "./Ppop_new";

const Project_s: React.FC = () => {
    const [popup, setpopup] = useState<viewtype | null>(null);
    console.log("projectview배열", projectview);
    return (
        <>
            <div id="project" className="projectwrapper white flexC">
                <div className="projectwrap">
                    <h1 className="title"> PROJECT</h1>
                    <div className="line">
                        {projectview.map(project => (
                            <div className="imgwrap" key={project.id}>
                                <img src={project.img} alt="silla" />
                                <span className="des">
                                    <p className="white subtitle1">
                                        {project.title}
                                    </p>
                                    <p className="caption1">
                                        {project.description}
                                    </p>
                                </span>
                                <button
                                    className="black1 detaillink"
                                    onClick={() => setpopup(project)}
                                >
                                    상세보기
                                    {/* <img
                                        src="/sohee-portfolio/img/icon/Vector.svg"
                                        alt="프로젝트자세히보기"
                                    /> */}
                                </button>
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
