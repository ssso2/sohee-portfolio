import { useState } from "react";
import "../styles/common.scss";
import "../styles/project.scss";
import { viewtype, projectview } from "./Projectdata";
import Ppop from "./Ppop";

const Project_s: React.FC = () => {
    const [popup, setpopup] = useState<viewtype | null>(null);
    // const Ppop()=>{
    //     setpopup(true)
    // }
    console.log(projectview, "projectview");
    return (
        <>
            <div id="project" className="center colorW flexC">
                <div className="projectwrap">
                    <h1 className="title"> PROJECT</h1>
                    <div className="line">
                        {projectview.map(project => (
                            <div className="imgwrap" key={project.id}>
                                <img src={project.img} alt="silla" />
                                <span className="des">
                                    <p>{project.title}</p>
                                    <p>{project.description}</p>
                                </span>
                                <button
                                    className="black1 detaillink"
                                    onClick={() => setpopup(project)}
                                >
                                    자세히보기
                                </button>
                            </div>
                        ))}

                        {/* <div className="imgwrap">
                            <img
                                src="/sohee-portfolio/img/sub/study61.png"
                                alt="jomalone"
                            />
                            <span className="des">
                                <p>조말론</p>
                                <p>
                                    API하여 더욱 직관적이고 효율적인 예약 환경을
                                    제공했습니다
                                </p>
                            </span>
                        </div> */}
                    </div>
                </div>
                {popup && (
                    <Ppop
                        projectview={projectview}
                        onClose={() => setpopup(null)}
                    />
                )}
            </div>
        </>
    );
};

export default Project_s;
