import "../styles/common.scss";
import "../styles/about.scss";
import { useEffect } from "react";

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
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores vel, sapiente quaerat tempora debitis quidemlibero dolorum amet ut, quod assumenda obcaecati impedit minima odit? Nam asperiores ducimus enim veniam!",
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
    //옵저버
    useEffect(() => {
        const observerOptions: IntersectionObserverInit = {
            root: null,
            threshold: 0.5,
        };

        const observerCallback: IntersectionObserverCallback = entries => {
            entries.forEach(entry => {
                // console.log("디버깅", entry.target, entry.isIntersecting);
                const target = entry.target as HTMLElement;
                if (entry.isIntersecting) {
                    target.classList.add("visible");
                } else {
                    target.classList.remove("visible");
                }
            });
        };

        const observer = new IntersectionObserver(
            observerCallback,
            observerOptions
        );

        // useEffect 내부에서 직접 요소 선택
        const elements: NodeListOf<HTMLElement> =
            document.querySelectorAll(".zoomin");
        // console.log("줌인선택?", elements);

        elements.forEach(el => observer.observe(el));

        //cleanup 함수 추가
        // return () => {
        //     elements.forEach(el => observer.unobserve(el));
        //     observer.disconnect();
        // };
    }, []); // 빈 의존성 배열 유지

    return (
        <div id="about" className="aboutwrapper flexC">
            <div className="white aboutwrap">
                <div className="maintitle flex">
                    <img
                        src="/sohee-portfolio/img/icon/SpeechBalloon.svg"
                        alt="aboutme"
                    />
                    <div className="header2">About me</div>
                </div>
                {aboutdata.map((data, index) => (
                    <div className="introWrap zoomin hidden" key={index}>
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
