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
            des: "저는 8년 동안 유치원 교사로 근무하며 교원능력개발평가에서 5점 만점 중 4.93점을 받아 원내에서 가장 높은 평가를 받는 교사였습니다. 교직 경험을 통해 PPT 활용의 불편함과 기존 교육 플랫폼의 한계를 직접 경험하며, 이를 개선하고자 프론트엔드 개발자로 전향했습니다. 유아 개별 맞춤형 교육을 실천했던 경험은 사용자 중심의 UI/UX 설계에 대한 깊은 이해를 제공하며, 실제 사용자의 문제를 해결하는 것이 개발자로서 가장 중요한 가치라는 것을 깨닫게 되었습니다. 또한, 교육 현장에서 다양한 이해관계자들과 협업하며 쌓아온 커뮤니케이션 능력은 개발자로서 성장하는 데 중요한 자산이 되고 있습니다.",
            img: "/sohee-portfolio/img/sub/about1.jpeg",
            alt: "teacher",
        },
        {
            title: "02. 탐구형 개발자",
            des: "웹 개발의 매력에 빠져 사용자 경험을 깊이 고민하고, 더 나은 사용성을 제공하기 위해 노력하는 프론트엔드 개발자 김소희입니다. HTML, CSS, JavaScript부터 React까지 단계적으로 학습하며, 기술 트렌드에 맞춰 TypeScript와 Tailwind CSS를 익히고 프로젝트에 적용하고 있습니다. 부족한 부분은 추가 강의와 기술 블로그, 다른 개발자의 코드를 참고하며 보완했고, 배운 내용을 블로그에 기록하며 문제 해결 능력을 키웠습니다. 팀원들과 원활하게 소통하며 협업하는 과정에서 성장하고 있으며, 사용자 경험을 최우선으로 고민하는 프론트엔드 개발자로 나아가고 있습니다.",
            img: "/sohee-portfolio/img/sub/dev.jpg",
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

                    <p className="caption2">
                        #책임감 #성실함 #사용자경험이해 #문제해결능력 #협업
                    </p>
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
