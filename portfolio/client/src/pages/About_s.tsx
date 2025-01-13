import "../styles/common.scss";
import "../styles/about.scss";

const About_s: React.FC = () => {
    return (
        <>
            <div id="about" className="center colorW flexC aboutwrap">
                <h1 className="title">🔍 About Me</h1>
                <div className="introWrap">
                    <div className="introTitle">01. 새로운 배움</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores vel, sapiente quaerat tempora debitis quidem
                        libero dolorum amet ut, quod assumenda obcaecati impedit
                        minima odit? Nam asperiores ducimus enim veniam!
                    </div>
                    <div className="imgwrap">
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="teacher"
                            className="img"
                        />
                    </div>
                </div>
                <div className="introWrap">
                    <div className="introTitle">02. 개발자</div>
                    <div className="des">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Maiores vel, sapiente quaerat tempora debitis quidem
                        libero dolorum amet ut, quod assumenda obcaecati impedit
                        minima odit? Nam asperiores ducimus enim veniam!
                    </div>
                    <div className="imgwrap">
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="teacher"
                            className="img"
                        />
                    </div>
                </div>
            </div>
        </>
    );
};

export default About_s;
