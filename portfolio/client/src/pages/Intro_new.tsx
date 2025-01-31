import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/intro.scss";
import Main from "./Main_s";
import ReactTypingEffect from "react-typing-effect";

const Intro_s: React.FC = () => {
    const [showIntro, setShowIntro] = useState(true);
    const [boxvisible, setboxvisible] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setboxvisible(true);
        }, 2000);
        const ttimer = setTimeout(() => {
            setShowIntro(false);
        }, 4000);
        return () => clearTimeout(ttimer);
    }, []);
    // interface typingtype[
    //    {text : string,
    //     images : []}
    // ]
    // const typingtxt = [
    //     {
    //         text: "Sohee's Portfolio",
    //         // images: {
    //         //     src: "/sohee-portfolio/img/icon/hand.svg",
    //         //     alt: "deveploer",
    //         // },
    //     },
    //     {
    //         text: "Front-end Developer",
    //         images: {
    //             src: "/sohee-portfolio/img/icon/dev.svg",
    //             alt: "JavaScript",
    //         },
    //     },
    // ];
    const typingimg = [
        // {
        //     text: "Sohee's Portfolio",
        // },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/hand.svg",
                alt: "greeting",
            },
        },

        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/teacher.svg",
                alt: "teacher",
            },
        },
        // {
        //     text: "  ",
        //     images: {
        //         src: "/sohee-portfolio/img/icon/rainbow.svg",
        //         alt: "rainbow",
        //     },
        // },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/fire.svg",
                alt: "fire",
            },
        },
        // {
        //     text: "  ",
        //     images: {
        //         src: "/sohee-portfolio/img/icon/airplane.svg",
        //         alt: "airplane",
        //     },
        // },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/sparkles.svg",
                alt: "sparkles",
            },
        },
        // {
        //     text: "  ",
        //     images: {
        //         src: "/sohee-portfolio/img/icon/lifting.svg",
        //         alt: "lifting",
        //     },
        // },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/abouticon.svg",
                alt: "eye",
            },
        },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/reviewicon.svg",
                alt: "rocket",
            },
        },
        {
            text: "  ",
            images: {
                src: "/sohee-portfolio/img/icon/dev.svg",
                alt: "develpoer",
            },
        },
    ];
    return (
        <>
            {showIntro ? (
                <div className="center">
                    <div className="intro flex">
                        <div className="intro-loading">
                            {/* <img
                            src="/sohee-portfolio/img/icon/hand.gif"
                            alt="greeting"
                            className="helloicon"
                        /> */}
                            {/* <ReactTypingEffect
                            text={typingtxt.map(item => item.text)}
                            className="comment"
                            speed={100}
                            eraseSpeed={50}
                            typingDelay={100}
                            eraseDelay={300}
                            displayTextRenderer={(text, index) => {
                                const currentItem = typingtxt[index];
                                return (
                                    <p>
                                        {text}
                                        {currentItem && (
                                            <img
                                                src={currentItem.images.src}
                                                alt={currentItem.images.alt}
                                                style={{
                                                    width: "36px",
                                                    height: "36px",
                                                    marginLeft: "5px",
                                                }}
                                            />
                                        )}
                                    </p>
                                );
                            }}
                        /> */}
                            <ReactTypingEffect
                                text={typingimg.map(item => item.text)}
                                className="comment"
                                speed={10}
                                eraseSpeed={50}
                                typingDelay={50}
                                eraseDelay={100}
                                displayTextRenderer={(text, index) => {
                                    const currentItem = typingimg[index];

                                    return (
                                        <p>
                                            {text}
                                            {currentItem.images && (
                                                <img
                                                    src={currentItem.images.src}
                                                    alt={currentItem.images.alt}
                                                    style={{
                                                        width: "36px",
                                                        height: "36px",
                                                        marginLeft: "5px",
                                                    }}
                                                />
                                            )}
                                        </p>
                                    );
                                }}
                            />
                            {/* {boxvisible && <div className="hidden"></div>} */}
                        </div>
                        {boxvisible && (
                            <div className="intro-txt flex">
                                <p className="uptxt  black1">Sohee's</p>
                                <p className="uptxt  black1">
                                    Front-end Developer
                                </p>
                                <p className="uptxt  black1">Portfolio</p>
                            </div>
                        )}
                    </div>
                    <div className="Ybar">
                        <div className="bar"></div>
                        <div
                            className="
                            bar"
                        ></div>
                        <div className="bar"></div>
                        <div
                            className="
                            bar"
                        ></div>
                        <div className="bar"></div>
                        <div
                            className="
                            bar"
                        ></div>
                    </div>
                </div>
            ) : (
                <Main />
            )}
        </>
    );
};
export default Intro_s;
