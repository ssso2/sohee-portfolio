import "../styles/common.scss";
import "../styles/main.scss";

import ReactPlayer from "react-player";

import Header from "../component/Header_sh";
import Scrollbar from "../component/Scrollbar_s";
import Topbtn from "../component/Topbtn";
import About from "./About_s";
import Experience from "./Experience_new";
import Project from "./Project_new";
import Review from "./Review_s";
import Contact from "../component/Contact";
import { useEffect, useRef, useState } from "react";

const Main_s: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [speed, setSpeed] = useState(5.0); // 기본 2배속

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.playbackRate = speed;
        }
    }, [speed]);
    return (
        <div className="main">
            <Header />
            {/* <div className="scrollwrap"> */}
            <Scrollbar />
            <Contact />
            {/* <div className="center mainpg"> */}
            <div className="maincontainer flex">
                <div className="mainTxt">
                    <p className="subtitle1 white">PortFolio</p>
                    <p className="header2 white">안녕하세요.</p>
                    <p className="header2 white">
                        프론트엔드 개발자 김소희입니다.
                    </p>
                    <p className="subtitle2 white">
                        문제 해결의 즐거움을 알고, 소통과 협업에서 가치를 느끼는
                        개발자입니다.
                    </p>
                </div>
                <div className="imgwrap">
                    {/* <img
                        className="mainimg"
                        src="/sohee-portfolio/img/sub/제목.gif"
                        alt="mainIMG"
                    /> */}
                    <video
                        ref={videoRef}
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="mainimg"
                    >
                        <source
                            src="/sohee-portfolio/img/sub/메인영상.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </div>
            <About />
            <Experience />
            <Project />
            <Review />
            {/* <Topbtn /> */}
            {/* <div className="scollicon">
                <img
                    src="/sohee-portfolio/img/icon/scroll-icon.svg"
                    alt="scroll"
                    className="bottomicon"
                />
            </div> */}
        </div>
    );
};

export default Main_s;
