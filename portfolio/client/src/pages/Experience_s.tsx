import "../styles/common.scss";
import "../styles/experience.scss";
import { exdata, icons } from "./Exdata";

const Experience_s: React.FC = () => {
    return (
        <div id="experience" className="exwrapper white">
            <div className="exwrap">
                <div className="profile flexC">
                    <div className="titlewrap">
                        <img
                            src="/sohee-portfolio/img/icon/Page.svg"
                            alt="experience"
                        />
                        <h1 className="header3">Experinece</h1>
                    </div>
                    {/* <div className="imgwrap">
                        <img
                            src="/sohee-portfolio/img/sub/profile.svg"
                            alt="teacher"
                        />
                    </div>
                    <div className="me">
                        <p className="subtitle1">프론트엔드 개발자</p>
                        <p className="body2">
                            minima odit? Nam asperiores ducimus enim veniam!
                        </p>
                    </div> */}
                </div>
                <div className="deswrap">
                    <div className="imgwrap">
                        <img
                            src="/sohee-portfolio/img/sub/profile.svg"
                            alt="teacher"
                        />
                    </div>
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
                                                : "project"
                                        }`}
                                    >
                                        {data.name}
                                    </p>
                                    <p className="body2 date">{data.date}</p>
                                </div>
                                <div className="detail">
                                    <p className="subtitle1 name">
                                        {data.info}
                                    </p>
                                    <p className="body2 content">{data.des1}</p>
                                    {/* <p className="caption1">{data.des2}</p> */}
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="stacktitle">Tech Stack</div>
                    <div className="stack flex">
                        {icons.map((icon, index) => (
                            <div className="iconwrap" key={index}>
                                <img src={icon.src} alt={icon.name} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience_s;
