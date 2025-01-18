import "../styles/common.scss";
import "../styles/about.scss";

const About_s: React.FC = () => {
    interface aboutype {
        title: string;
        des: string;
        img: string;
        alt: string;
    }
    const aboutdata: aboutype[] = [
        {
            title: "1. 새로운 배움",
            des: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores vel, sapiente quaerat tempora debitis quidemlibero dolorum amet ut, quod assumenda obcaecati impedit minima odit? Nam asperiores ducimus enim veniam!",
            img: "/sohee-portfolio/img/sub/study61.png",
            alt: "teacher",
        },
        {
            title: "2. 개발자",
            des: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores vel, sapiente quaerat tempora debitis quidemlibero dolorum amet ut, quod assumenda obcaecati impedit minima odit? Nam asperiores ducimus enim veniam!",
            img: "/sohee-portfolio/img/sub/study61.png",
            alt: "developer",
        },
    ];
    return (
        <div className="aboutwrapper flexC">
            <div id="about" className="white aboutwrap">
                <div className="maintitle flex">
                    <img
                        src="/sohee-portfolio/img/icon/SpeechBalloon.svg"
                        alt="aboutme"
                    />
                    <div className="title1 sectionH">About Me</div>
                </div>
                {aboutdata.map((data, index) => (
                    <div className="introWrap" key={index}>
                        <div className="title2">{data.title}</div>
                        <div className="body2">{data.des}</div>
                        <div className="aboutimg">
                            <img src={data.img} alt={data.alt} />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default About_s;
