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
                    <div className="maintitle flexC">
                        <img
                            src="/sohee-portfolio/img/icon/projecticon.svg"
                            alt="project"
                        />
                        <div>
                            <p className="header3">P</p>
                            <p className="header3">roject</p>
                        </div>

                        <p className="caption2">
                            협업과 도전으로 만든 팀 / 개인 프로젝트들을
                            소개합니다.
                        </p>
                    </div>
                    <div className="line">
                        {projectview.map(project => (
                            <div className="imgwrap" key={project.id}>
                                <img
                                    src={project.bg}
                                    alt="projectimg"
                                    className="imgbg"
                                />
                                <div className="mainbg">
                                    <img
                                        src={project.img}
                                        alt="projectmain"
                                        className="mainframe"
                                    />
                                </div>
                                <div
                                    className="hoverimg"
                                    onClick={() => {
                                        if (project.id === 4) {
                                            alert(
                                                "서비스 개발 진행 중입니다. 3월 오픈 예정입니다."
                                            );
                                        } else {
                                            setpopup(project);
                                        }
                                    }}
                                >
                                    <img
                                        src={project.logo}
                                        alt="projectlogo"
                                        className="projectlogo"
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
