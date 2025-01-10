import classNames from "classnames";
import commonstyles from "../styles/common.module.css";
import fbstyles from "../styles/feedback.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Feedback: React.FC = () => {
    const cards = [
        {
            id: 1,
            title: "강사 이**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다. 단순히 묻는 게 아니라 스스로 고민하고 답을 찾아보는 적극적인 태도가 돋보였고, 기술 습득에 대한 열정이 남달랐습니다..",
        },
        {
            id: 2,
            title: "팀장 손**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 3,
            title: "팀원 유**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 4,
            title: "팀원 이**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 5,
            title: "팀원 이**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 6,
            title: "팀원 박**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 7,
            title: "팀원 유**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
        {
            id: 8,
            title: "팀원 윤**",
            description:
                "프로젝트 진행 과정에서 질문이 끊이지 않았던 점이 특히 인상 깊었습니다",
        },
    ];
    return (
        <>
            <div
                className={classNames(
                    commonstyles.center,
                    commonstyles.colorW,
                    commonstyles.flexC,
                    fbstyles.sample
                )}
            >
                <h1 className={fbstyles.title}>Feedback</h1>
                <Swiper
                    modules={[Autoplay]}
                    loop={true} // 무한 반복
                    slidesPerView={5.5} // 한 번에 보여줄 카드 수
                    spaceBetween={30} // 카드 간 간격
                    autoplay={{ delay: 0, disableOnInteraction: false }} // 자동 슬라이드
                    speed={2500} // 슬라이드 전환 속도
                    className={fbstyles.slidewrap}
                >
                    {cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <div className={fbstyles.card}>
                                <h4>{card.title}</h4>
                                <p>{card.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                {/* <div className={fbstyles.slidewrap}>
                    <div className={fbstyles.slide}>
                        <img
                            src="/sohee-portfolio/img/sub/study61.png"
                            alt="feedback"
                        />
                    </div>
                </div> */}
            </div>
        </>
    );
};

export default Feedback;
