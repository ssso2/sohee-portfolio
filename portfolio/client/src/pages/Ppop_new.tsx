import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/popup.scss";
import { viewtype, projectlist, contenttype } from "./Projectdata_s";
import Poprender from "./Poprender_new";
import Imgpop from "./Imgpop";
import { Link } from "react-router-dom";

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

    const links = [];
    return (
        <>
            <div className="projectpopwrap gray5">
                <div
                    className="
                projectpop"
                >
                    <div className="popcontent">
                        <div className="popclose" onClick={onClose}>
                            <img
                                src="/sohee-portfolio/img/icon/close.svg"
                                alt="close"
                            />
                        </div>

                        <div className="floatingwrapper flexC">
                            {projectview.map(project =>
                                project.floatingLinks.map((link, idx) => (
                                    <div className="pjicon" key={idx}>
                                        <Link
                                            to={link.url}
                                            target="_blank"
                                            title="깃허브로이동"
                                            className="linkbtn flexC"
                                        >
                                            <div className="iconwrap">
                                                <img
                                                    src={link.icon}
                                                    alt="storage"
                                                    title="새창으로열기"
                                                    className="floatingicon"
                                                />
                                            </div>
                                            <p className="subtitle1 white">
                                                {link.name}
                                            </p>
                                        </Link>
                                    </div>
                                ))
                            )}
                        </div>

                        <div className="inner">
                            {projectview.map(project => (
                                <header key={project.id}>
                                    <div className="header3 black1">
                                        {project.title}
                                    </div>
                                    <div className="pimgwrap">
                                        <img src={project.img} alt="silla" />
                                    </div>
                                </header>
                            ))}
                            <div className="deswrap flex">
                                {projectview.map((project, idx) => (
                                    <aside key={idx}>
                                        <p className="header3">
                                            {project.title}
                                        </p>
                                        <p className="body1 gray4">
                                            {project.people}
                                        </p>
                                        <p className="caption2 gray4">
                                            {project.date}
                                        </p>
                                        <p className="caption2 gray4">
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
                                            <div
                                                className="section"
                                                key={index}
                                            >
                                                <div className="ptitle gray5 header3">
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
            </div>
        </>
    );
};

export default Ppop;
