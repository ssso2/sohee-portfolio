import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/popup.scss";
import { viewtype, projectlist, contenttype } from "./Projectdata_s";
import Poprender from "./Poprender_new";
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
                                            title={link.title}
                                            className="linkbtn flexC"
                                        >
                                            <div className="iconwrap">
                                                <img
                                                    src={link.icon}
                                                    alt="storage"
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
                                    <div className="section linkon">
                                        <div className="ptitle gray5 header3">
                                            참고링크
                                        </div>
                                        <div className="pdes linkwrapper flex">
                                            {/* <div className="linkwrap"> */}
                                            {projectview.map(project =>
                                                project.floatingLinks.map(
                                                    (link, idx) => (
                                                        <div
                                                            className="linkwrap"
                                                            key={idx}
                                                        >
                                                            <Link
                                                                to={link.url}
                                                                target="_blank"
                                                                title="깃허브로이동"
                                                                className="linkbtnR flex"
                                                            >
                                                                <div className="iconwrapR">
                                                                    <img
                                                                        src={
                                                                            link.icon
                                                                        }
                                                                        alt="storage"
                                                                        title="새창으로열기"
                                                                        className="floatingiconR"
                                                                    />
                                                                </div>
                                                                <p className="body2">
                                                                    {link.name}
                                                                </p>
                                                            </Link>
                                                        </div>
                                                    )
                                                )
                                            )}
                                            {/* </div> */}
                                        </div>
                                    </div>
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
