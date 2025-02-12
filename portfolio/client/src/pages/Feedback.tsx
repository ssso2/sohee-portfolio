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
                "소희님은 교육과정동안 질문을 많이 하시던 모습이 기억에 남아요. 단순히 궁금한 걸 물어보는 게 아니라 스스로 고민하고 답을 찾으려는 모습이 인상적이었고, 기술을 배우고자 하는 열정이 돋보여서 알려주는 입장에서 같이 즐거웠습니다.",
        },
        {
            id: 2,
            title: "팀장 손**",
            description:
                "처음에 역할분배를 할 때 미처 파트를 분배하지 못한 페이지가 있었는데 추가 페이지 작업을 흔쾌히 맡아주셔서 감사합니다. 덕분에 프로젝트를 기간 내에 잘 마무리할 수 있었어요! 팀 전체의 성공을 위한 태도가 멋있었어요 굿뜨!",
        },
        {
            id: 3,
            title: "팀원 유**",
            description:
                "기능 구현하면서 사용자를 위해 계속 고민하는 모습이 대단했어요. 새로운 아이디어도 제시하고 늘 열심히 하시는 것 같아요.",
        },
        {
            id: 4,
            title: "팀원 이**",
            description:
                "기능 연결된 부분을 먼저 이해하고 설명해주셔서 감사합니다.",
        },
        {
            id: 5,
            title: "팀원 이**",
            description:
                "컴포넌트를 재사용할 수 있게 정리해줘서 덕분에 제 페이지에서도 잘 활용했어요.",
        },
        {
            id: 6,
            title: "팀장 권**",
            description:
                "프로젝트 회의때마다 항상 메모와 정리를 꼼꼼히 해주셔서 협업할 때 편했습니다. J성향이셔서 저 뿐아니라 팀원들이 많이 도움받았습니다.",
        },
        {
            id: 7,
            title: "팀원 박**",
            description: "오류에 맞서고 집중해서 해결하는 열정이 멋있으세요.",
        },
        {
            id: 8,
            title: "팀원 윤**",
            description: "프로젝트기간내에 늘 책임감있는 모습이셨습니다!",
        },
        {
            id: 9,
            title: "팀원 이**",
            description:
                "본인 파트가 아닌데 제 페이지도 함께 고민해 주시고 의견주셔서 감사했습니다. 혼자 생각했다면 놓쳤을 부분을 더 신경써서 완성도를 높일 수 있었어요.",
        },
    ];
    return (
        <>
            <div
                id="review"
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
                    slidesPerView={4.5} // 한 번에 보여줄 카드 수
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
            </div>
        </>
    );
};

export default Feedback;
