import { useEffect, useState } from "react";
import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import introstyles from "../styles/intro.module.css";
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
                <div className={commonstyles.center}>
                    <div
                        className={classNames(
                            introstyles.intro,
                            commonstyles.flex
                        )}
                    >
                        {/* <div className="intro flex"> */}
                        {/* <div className="intro-loading"> */}
                        <div className={introstyles.introloading}>
                            <svg
                                className="loading-spinner"
                                // className={introstyles.loading - spinner}
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
                                    className={introstyles.progress}
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
                        <div
                            className={classNames(
                                introstyles.introtxt,
                                commonstyles.flex
                            )}
                        >
                            <p className={introstyles.uptxt}>Sohee's</p>
                            <p className={introstyles.uptxt}>
                                Front-end Developer
                            </p>
                            <p className={introstyles.uptxt}>Portfolio</p>
                        </div>
                    </div>
                    <div className={introstyles.Ybar}>
                        <div className={introstyles.bar}></div>
                        <div className={introstyles.bar}></div>
                        <div className={introstyles.bar}></div>
                        <div className={introstyles.bar}></div>
                        <div className={introstyles.bar}></div>
                        <div className={introstyles.bar}></div>
                    </div>
                </div>
            ) : (
                <Main />
            )}
        </>
    );
};

export default Intro;
