import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import aboutstyles from "../styles/aboutstyles.module.css";

const About: React.FC = () => {
    return (
        <div>
            <div
                className={classNames(commonstyles.center, commonstyles.sample)}
            >
                <h1
                    className={classNames(
                        commonstyles.colorW,
                        aboutstyles.title
                    )}
                >
                    🔍 About Me
                </h1>

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
                    <div className={aboutstyles.imgwrap}></div>
                </div>
                <div className={aboutstyles.introWrap}>
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="teacher"
                    />
                </div>
            </div>
        </div>
    );
};

export default About;
