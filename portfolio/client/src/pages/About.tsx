import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import aboutstyles from "../styles/about.module.css";

const About: React.FC = () => {
    return (
        <>
            <div
                id="about"
                className={classNames(
                    commonstyles.center,
                    commonstyles.colorW,
                    commonstyles.flexC,
                    aboutstyles.sample
                )}
            >
                <h1 className={classNames(aboutstyles.title)}>🔍 About Me</h1>

                <div className={aboutstyles.introWrap}>
                    <div className={aboutstyles.introTitle}>
                        01. 새로운 배움
                    </div>
                    <div className={aboutstyles.des}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores vel, sapiente quaerat tempora debitis quidem
                        libero dolorum amet ut, quod assumenda obcaecati impedit
                        minima odit? Nam asperiores ducimus enim veniam!
                    </div>
                    <div className={aboutstyles.imgwrap}>
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="teacher"
                            className={aboutstyles.img}
                        />
                    </div>
                </div>
                <div className={aboutstyles.introWrap}>
                    <div className={aboutstyles.introTitle}>02. 개발자</div>
                    <div className={aboutstyles.des}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores vel, sapiente quaerat tempora debitis quidem
                        libero dolorum amet ut, quod assumenda obcaecati impedit
                        minima odit? Nam asperiores ducimus enim veniam!
                    </div>
                    <div className={aboutstyles.imgwrap}>
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="teacher"
                            className={aboutstyles.img}
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About;
