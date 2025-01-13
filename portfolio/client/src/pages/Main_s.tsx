import "../styles/common.scss";
import "../styles/main.scss";

import Header from "../component/Header_s";
import Scrollbar from "../component/Scrollbar_s";
import Topbtn from "../component/Topbtn";
import About from "./About_s";
import Experience from "./Experience_s";
import Project from "./Project_s";
import Review from "./Review_s";

const Main_s: React.FC = () => {
    return (
        <div className="main">
            <Header />
            {/* <div className="scrollwrap"> */}
            <Scrollbar />
            <div className="center mainpg">
                <div className="mainTxt colorW">
                    <p>👋</p>
                    <p>안녕하세요.</p>
                    <p>프론트엔드 개발자 김소희입니다.</p>
                    <p>웹 개발의 매력에 빠져 배움을 즐기고,</p>
                    <p>소통과 협업에서 가치를 느끼는 개발자입니다.</p>
                </div>
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
