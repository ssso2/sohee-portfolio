import { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/intro.scss";
import Main from "./Main_s";

const Intro_s: React.FC = () => {
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
                            <svg
                                className="loading"
                                width="70"
                                height="70"
                                viewBox="0 0 70 70"
                            >
                                <circle
                                    cx="35"
                                    cy="35"
                                    r="30"
                                    stroke="#dbdbdb"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray="188.4"
                                    strokeDashoffset="0"
                                ></circle>
                                <circle
                                    className="progress red"
                                    cx="35"
                                    cy="35"
                                    r="30"
                                    stroke="#0054ff"
                                    strokeWidth="8"
                                    fill="none"
                                    strokeDasharray="188.4"
                                    strokeDashoffset="188.4"
                                ></circle>
                            </svg>
                        </div>
                        <div className="intro-txt flex">
                            <p className="uptxt  black1">Sohee's</p>
                            <p className="uptxt  black1">Front-end Developer</p>
                            <p className="uptxt  black1">Portfolio</p>
                        </div>
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

// const Intro_s = () => {
//     const [showIntro, setShowIntro] = useState(true);
//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowIntro(false);
//         }, 4000);
//         return () => clearTimeout(timer);
//     }, []);
//     return (
//         <>
//             {showIntro ? (
//                 <div className="center">
//                     <div>
//                         <div className="intro flex">
//                             <div className="intro-loading">
//                                 <svg
//                                     className="loading"
//                                     width="88"
//                                     height="88"
//                                     viewBox="0 0 88 88"
//                                 >
//                                     <circle
//                                         cx="25"
//                                         cy="25"
//                                         r="20"
//                                         stroke="#c2c2c2"
//                                         strokeWidth="5"
//                                         fill="none"
//                                         strokeDasharray="125.6"
//                                         strokeDashoffset="0"
//                                     ></circle>
//                                     <circle
//                                         className="progress red"
//                                         cx="25"
//                                         cy="25"
//                                         r="20"
//                                         stroke="#e74c3c"
//                                         strokeWidth="5"
//                                         fill="none"
//                                         strokeDasharray="125.6"
//                                         strokeDashoffset="125.6"
//                                     ></circle>
//                                 </svg>
//                             </div>
//                             <div className="intro-txt flex">
//                                 <p className="uptxt title2 black1">Sohee's</p>
//                                 <p className="uptxt title2 black1">
//                                     Front-end Developer
//                                 </p>
//                                 <p className="uptxt title2 black1">Portfolio</p>
//                             </div>
//                         </div>
//                     </div>
//                     <div className="Ybar">
//                         <div className="bar"></div>
//                         <div
//                             className="
//                             bar"
//                         ></div>
//                         <div className="bar"></div>
//                         <div
//                             className="
//                             bar"
//                         ></div>
//                         <div className="bar"></div>
//                         <div
//                             className="
//                             bar"
//                         ></div>
//                     </div>
//                 </div>
//             ) : (
//                 <Main />
//             )}
//         </>
//     );
// };

// export default Intro_s;
