import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import prstyles from "../styles/project.module.css";

const Project: React.FC = () => {
    return (
        <>
            <div
                id="project"
                className={classNames(
                    commonstyles.center,
                    commonstyles.colorW,
                    commonstyles.flexC,
                    prstyles.sample
                )}
            >
                <h1 className={prstyles.title}> PROJECT</h1>
                <div className={prstyles.line}>
                    <div className={prstyles.imgwrap}>
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="silla"
                        />
                        <span className={prstyles.des}>
                            <p>신라호텔 서울</p>
                            <p>
                                리뉴얼하여 더욱 직관적이고 효율적인 예약 환경을
                                제공했습니다
                            </p>
                        </span>
                    </div>
                    <div className={prstyles.imgwrap}>
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="jomalone"
                        />
                        <span className={prstyles.des}>
                            <p>조말론</p>
                            <p>
                                API하여 더욱 직관적이고 효율적인 예약 환경을
                                제공했습니다
                            </p>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project;
