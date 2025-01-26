import "../styles/common.scss";
import "../styles/main.scss";

import Header from "../component/Header_s";
import Scrollbar from "../component/Scrollbar_s";
import Topbtn from "../component/Topbtn";
import About from "./About_s";
import Experience from "./Experience_s";
import Project from "./Project_new";
import Review from "./Review_s";
import Contact from "../component/Contact";

const Main_s: React.FC = () => {
    return (
        <div className="main">
            <Header />
            {/* <div className="scrollwrap"> */}
            <Scrollbar />
            <Contact />
            {/* <div className="center mainpg"> */}
            <div className="maincontainer flex">
                <div className="mainTxt">
                    <p className="subtitle1 white">
                        {/* <img
                            src="/sohee-portfolio/img/icon/page.svg"
                            alt="mainIMG"
                        /> */}
                        PortFolio
                    </p>
                    <p className="header2 white">안녕하세요.</p>
                    <p className="header2 white">
                        프론트엔드 개발자 김소희입니다.
                    </p>
                    <p className="subtitle2 white">
                        웹 개발의 매력에 빠져 배움을 즐기고, 소통과 협업에서
                        가치를 느끼는 개발자입니다.
                    </p>
                    {/* <p className="subtitle2 gray3">
                        소통과 협업에서 가치를 느끼는 개발자입니다.
                    </p> */}
                </div>
                {/* <div className="shadowbox" /> */}
                <div className="imgwrap">
                    <img
                        className="mainimg"
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="mainIMG"
                    />
                </div>
            </div>
            <About />
            <Experience />
            <Project />
            <Review />
            <Topbtn />
            <div className="scollicon">
                <img
                    src="/sohee-portfolio/img/icon/scroll-icon.svg"
                    alt="scroll"
                    className="bottomicon"
                />
            </div>
        </div>
    );
};

export default Main_s;
