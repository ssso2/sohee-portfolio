import "../styles/common.scss";
import "../styles/experience_s.scss";
import { exdata, icons } from "./Exdata";

const Experience_s: React.FC = () => {
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
                    <p className="header3 option">사용자를 생각하는</p>
                    <p className="header3 option">
                        포기하지 않고 책임감있게 일하는 개발자 김소희입니다
                    </p>
                </div>
                {/* <div className="titlewrap">
                    <img
                        src="/sohee-portfolio/img/icon/Page.svg"
                        alt="experience"
                    />
                    <h1 className="header3">Experinece</h1>
                </div> */}
                <div className="profile flex">
                    <div className="imgwrap" data-aos="fade-up">
                        <img
                            src="/sohee-portfolio/img/sub/presentation.jpeg"
                            alt="teacher"
                        />
                        {/* <img
                            src="/sohee-portfolio/img/sub/sun.jpeg"
                            alt="teacher"
                        /> */}
                    </div>
                    {/* <div className="me">
                        <p className="subtitle1">프론트엔드 개발자</p>
                        <p className="body2">
                            minima odit? Nam asperiores ducimus enim veniam!
                        </p>
                    </div> */}

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
                                                    : "project"
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
        </div>
    );
};

export default Experience_s;
