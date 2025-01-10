import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import mainstyles from "../styles/main.module.css";

import Header from "../component/Header";
import Scrollbar from "../component/Scrollbar";
import Topbtn from "../component/Topbtn";
import About from "./About";
import Experience from "./Experience";
import Project from "./Project";
import Feedback from "./Feedback";

export const Main = () => {
    return (
        <div className={mainstyles.main}>
            <Header />
            {/* <div className={mainstyles.scrollwrap}> */}
            <Scrollbar />
            <div className={classNames(commonstyles.center, mainstyles.mainpg)}>
                <div
                    className={classNames(
                        mainstyles.mainTxt,
                        commonstyles.colorW
                    )}
                >
                    <p>안녕하세요.</p>
                    <p>프론트엔드 개발자 김소희입니다.</p>
                    <p>웹 개발의 매력에 빠져 배움을 즐기고,</p>
                    <p>소통과 협업에서 가치를 느끼는 개발자입니다.</p>
                </div>
                <div className={mainstyles.imgwrap}>
                    <img
                        className={mainstyles.img}
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="mainIMG"
                    />
                </div>
            </div>

            <About />
            <Experience />
            <Project />
            <Feedback />
            <Topbtn />
            <div className={mainstyles.scollicon}>
                <img
                    src="/sohee-portfolio/img/icon/scroll-icon.svg"
                    alt="scroll"
                    className={mainstyles.bottomicon}
                />
            </div>
        </div>
        // </div>
    );
};
