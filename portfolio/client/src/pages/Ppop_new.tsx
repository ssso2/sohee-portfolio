import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/popup.scss";
import { viewtype, projectinfo, deslist } from "./Projectdata";
import Poprender from "./Poprender";
import Imgpop from "./Imgpop";

interface datatype {
    projectview: viewtype[];
    onClose: () => void;
}

const Ppop: React.FC<datatype> = ({ projectview, onClose }) => {
    useEffect(() => {
        if (projectview && projectview.length > 0) {
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [projectview]);

    if (!projectview || projectview.length === 0) {
        // 스타일필요
        return <div>데이터가 없습니다.</div>;
    }
    console.log("projectview", projectview);

    return (
        <>
            <div className="projectpopwrap gray5">
                <div className="projectpop">
                    <div className="popclose" onClick={onClose}>
                        <img
                            src="/sohee-portfolio/img/icon/close.svg"
                            alt="close"
                        />
                    </div>
                    <div className="inner">
                        {projectview.map(project => (
                            <header key={project.id}>
                                <div className="subtitle1 black1">
                                    {project.title}
                                </div>
                                <div className="pimgwrap">
                                    <img src={project.img} alt="silla" />
                                </div>
                            </header>
                        ))}
                        <div className="deswrap flex">
                            {projectview.map(project => (
                                <aside>
                                    <p className="subtitle1">{project.title}</p>
                                    <p className="label1 gray4">
                                        {project.people}
                                    </p>
                                    <p className="label1 gray4">
                                        {project.date}
                                    </p>
                                    <p className="label1 gray4">
                                        {" "}
                                        {project.num}
                                    </p>
                                </aside>
                            ))}
                            {/* <aside>
                                <p className="subtitle1">
                                    {projectinfo[0].title}
                                </p>
                                <p className="label1 gray4">
                                    {projectinfo[0].people}
                                </p>
                                <p className="label1 gray4">
                                    {projectinfo[0].date}
                                </p>
                                <p className="label1 gray4">
                                    {" "}
                                    {projectinfo[0].num}
                                </p>
                            </aside> */}
                            {/* {projectinfo.map((project, i) => (
                                <aside key={i}>
                                    <p className="subtitle1">{project.title}</p>
                                    <p className="label1 gray4">
                                        {project.people}
                                    </p>
                                    <p className="label1 gray4">
                                        {project.date}
                                    </p>
                                    <p className="label1 gray4">
                                        {" "}
                                        {project.num}
                                    </p>
                                </aside>
                            ))} */}
                            <main>
                                {deslist.map((data, index) => (
                                    <div className="section" key={index}>
                                        <div className="ptitle gray5 subtitle1">
                                            {data.title}
                                        </div>
                                        <div className="pdes ">
                                            <Poprender content={data.content} />
                                        </div>
                                    </div>
                                ))}
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ppop;
