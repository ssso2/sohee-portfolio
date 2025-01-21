import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/popup.scss";
import { viewtype, projectlist, contenttype } from "./Projectdata_s";
import Poprender from "./Poprender_new";
import Imgpop from "./Imgpop";

interface datatype {
    projectview: viewtype[];
    onClose: () => void;
}

const Ppop: React.FC<datatype> = ({ projectview, onClose }) => {
    const [selectarray, setselectarray] = useState<contenttype[] | null>(null);
    useEffect(() => {
        if (projectview && projectview.length > 0) {
            document.body.style.overflow = "hidden";
        }
        const finddata = projectlist.find(project =>
            project.some(item => item.id === projectview[0].id)
        );
        console.log("finddata", finddata);
        if (finddata) {
            setselectarray(finddata);
        } else {
            setselectarray(null);
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [projectview]);

    if (!projectview || projectview.length === 0) {
        // 스타일필요
        return <div>데이터가 없습니다.</div>;
    }
    console.log("projectviewid", projectview);

    return (
        <>
            <div className="projectpopwrap gray5">
                <div
                    className="
                projectpop"
                >
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
                            <main>
                                {selectarray &&
                                    selectarray.map((data, index) => (
                                        <div className="section" key={index}>
                                            <div className="ptitle gray5 subtitle1">
                                                {data.title}
                                            </div>
                                            <div className="pdes ">
                                                <Poprender
                                                    content={data.content}
                                                />
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
