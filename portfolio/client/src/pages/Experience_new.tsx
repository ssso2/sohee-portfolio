import { useEffect } from "react";
import "../styles/common.scss";
import "../styles/experience_s.scss";
import { exdata, icons } from "./Exdata";
import AOS from "aos";
import "aos/dist/aos.css";

const Experience_s: React.FC = () => {
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간
            once: false, // 스크롤 시 한 번만 애니메이션
        });
    }, []);
    return (
        <div id="experience" className="exwrapper flex white">
            <div className="exwrap flexC">
                <div className="maintitle flexC">
                    <img
                        src="/sohee-portfolio/img/icon/memoicon.svg"
                        alt="experience"
                    />
                    <div>
                        <p className="header3">E</p>
                        <p className="header3">xperinece</p>
                    </div>

                    <p className="header3 option">
                        저는 좋아하는 일을 잘하는 일로 만들고,
                    </p>
                    <p className="header3 option">성취감을 통해 성장합니다.</p>
                </div>

                <div className="profile flex">
                    <div className="imgwrap" data-aos="fade-up">
                        <img
                            src="/sohee-portfolio/img/sub/presentation.jpeg"
                            alt="teacher"
                        />
                    </div>

                    <div className="deswrap">
                        <div className="past">
                            {exdata.map((data, index) => (
                                <div className="des" key={`${data}-${index}`}>
                                    <div className="info">
                                        <p
                                            className={`body1 ${
                                                index === 1
                                                    ? "change"
                                                    : index === 2
                                                    ? "retire"
                                                    : index === 3
                                                    ? "project"
                                                    : ""
                                            }`}
                                        >
                                            {data.name}
                                        </p>
                                        <p className="body2 date">
                                            {data.date}
                                        </p>
                                    </div>
                                    <div className="detail">
                                        <p className="subtitle1 name">
                                            {data.info}
                                        </p>
                                        <p className="body2 content">
                                            {data.des1}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="stacktitle">Tech Stack</div>
                        <div className="stack flex" data-aos="fade-in">
                            {icons.map((icon, index) => (
                                <div className="iconwrap" key={index}>
                                    <img src={icon.src} alt={icon.name} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience_s;
