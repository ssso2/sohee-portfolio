import { useEffect, useState } from "react";

import "../styles/common.scss";
import "../styles/intro.scss";
import commonstyles from "../styles/common.module.css";
import introstyles from "../styles/common.module.css";
import { Main } from "./Main";

const Intro = () => {
    const [showIntro, setShowIntro] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowIntro(false);
        }, 4000);
        return () => clearTimeout(timer);
    }, []);
    return (
        <>
            {showIntro ? (
                <div className="center">
                    <div className="intro flex">
                        <div className="intro-loading">
                            {/* <span className="loading"></span> */}
                            <svg
                                className="loading-spinner"
                                width="88"
                                height="88"
                                viewBox="0 0 50 50"
                            >
                                <circle
                                    cx="25"
                                    cy="25"
                                    r="20"
                                    stroke="#c2c2c2"
                                    strokeWidth="5"
                                    fill="none"
                                ></circle>
                                <circle
                                    className="progress"
                                    cx="25"
                                    cy="25"
                                    r="20"
                                    stroke="#e74c3c"
                                    strokeWidth="5"
                                    fill="none"
                                    strokeDasharray="125.6" // 원 둘레
                                    strokeDashoffset="125.6" //초기 상태 (0% 채움)
                                    // stroke-linecap="round"
                                ></circle>
                            </svg>
                        </div>
                        <div className="intro-txt flex">
                            <p className="uptxt">Sohee's</p>
                            <p className="uptxt">Front-end Developer</p>
                            <p className="uptxt">Portfolio</p>
                        </div>
                    </div>
                    <div className="Ybar">
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                        <div className="bar"></div>
                    </div>
                </div>
            ) : (
                <Main />
            )}
        </>
    );
};

export default Intro;
