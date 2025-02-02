import "../styles/common.scss";
import "../styles/about.scss";
import { useEffect, useRef, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const About_s: React.FC = () => {
    interface aboutype {
        title: string;
        des: string;
        img: string;
        alt: string;
    }
    const aboutdata: aboutype[] = [
        {
            title: "01. 새로운 배움",
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores vel, sapiente quaerat tempora debitis quidemlibero dolorum amet ut, quod assumenda obcaecati impedit minima odit? Nam asperiores ducimus enim veniam!",
            img: "/sohee-portfolio/img/sub/about1.jpeg",
            alt: "teacher",
        },
        {
            title: "02. 개발자",
            des: " Lorem ipsum dolor sit amet consectetur adipisicing elit.Maiores vel, sapiente quaerat tempora debitis quidemlibero dolorum amet ut, quod assumenda obcaecati impedit minima odit? Nam asperiores ducimus enim veniam!",
            img: "/sohee-portfolio/img/sub/study61.png",
            alt: "developer",
        },
    ];
    useEffect(() => {
        AOS.init({
            duration: 1000, // 애니메이션 지속 시간
            once: false, // 스크롤 시 한 번만 애니메이션
        });
    }, []);
    // //옵저버
    // const sectionRefs = useRef<(HTMLDivElement | null)[]>([]); // 소개div 참조

    // useEffect(() => {
    //     // 콜백 함수
    //     const callback = (entries: IntersectionObserverEntry[]) => {
    //         //인자는 배열
    //         entries.forEach(entry => {
    //             if (entry.isIntersecting) {
    //                 // 요소가 화면에 보이면 visible 클래스 추가
    //                 entry.target.classList.add("visible");
    //                 entry.target.classList.remove("hidden");
    //             } else {
    //                 // 화면에서 사라지면 hidden 클래스 추가
    //                 entry.target.classList.remove("visible");
    //                 entry.target.classList.add("hidden");
    //             }
    //         });
    //     };

    //     // Intersection Observer 생성
    //     const observer = new IntersectionObserver(callback, {
    //         threshold: 0.5, // 50% 이상 보일 때만
    //     });

    //     // 참조된 모든요소 관찰
    //     sectionRefs.current.forEach(ref => {
    //         if (ref) observer.observe(ref);
    //     });

    //     // 컴포넌트 언마운트 시 관찰 해제
    //     return () => {
    //         sectionRefs.current.forEach(ref => {
    //             if (ref) observer.unobserve(ref);
    //         });
    //     };
    // }, []);

    return (
        <div id="about" className="aboutwrapper flexC">
            <div className="white aboutwrap flexC">
                <div className="maintitle flexC">
                    <img
                        src="/sohee-portfolio/img/icon/abouticon.svg"
                        alt="aboutme"
                    />
                    <div>
                        <p className="header3">About</p>
                        <p className="header3">me</p>
                    </div>

                    <p className="caption2">저는 ENFJ입니다</p>
                </div>
                {aboutdata.map((data, index) => (
                    <div
                        className="introWrap"
                        key={index}
                        data-aos="fade-up"
                        // ref={e => (sectionRefs.current[index] = e)}
                    >
                        <div className="subtitle1">{data.title}</div>
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
