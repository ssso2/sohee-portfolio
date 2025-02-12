import "../styles/common.scss";
import "../styles/review.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Review_s: React.FC = () => {
    const cards = [
        {
            id: 1,
            title: "이**",
            description:
                "소희님은 교육과정동안 질문을 많이 하시던 모습이 기억에 남아요. 단순히 궁금한 걸 물어보는 게 아니라 스스로 고민하고 답을 찾으려는 모습이 인상적이었고, 기술을 배우고자 하는 열정이 돋보여서 알려주는 입장에서 같이 즐거웠습니다.",
            position: "강사님",
        },
        {
            id: 2,
            title: "손**",
            description:
                "처음에 역할분배를 할 때 미처 파트를 분배하지 못한 페이지가 있었는데 추가 페이지 작업을 흔쾌히 맡아주셔서 감사합니다. 덕분에 프로젝트를 기간 내에 잘 마무리할 수 있었어요! 팀 전체의 성공을 위한 태도가 멋있었어요 굿뜨!",
            position: "팀장",
        },
        {
            id: 3,
            title: "유**",
            description:
                "기능 구현하면서 사용자를 위해 계속 고민하는 모습이 멋있었어요. 새로운 아이디어도 제시하고 늘 열심히 하시는 것 같아요.",
            position: "팀원",
        },
        {
            id: 4,
            title: "이**",
            description:
                "기능 연결된 부분을 먼저 이해하고 설명해주셔서 감사합니다.",
            position: "팀원",
        },
        {
            id: 5,
            title: "이**",
            description:
                "컴포넌트를 재사용할 수 있게 정리해줘서 덕분에 제 페이지에서도 잘 활용했어요.",
            position: "팀원",
        },
        {
            id: 6,
            title: "권**",
            description:
                "회의때마다 항상 메모와 정리를 꼼꼼히 해주셔서 협업할 때 편했습니다. J성향이셔서 저 뿐아니라 팀원들이 많이 도움받았습니다.",
            position: "팀장",
        },
        {
            id: 7,
            title: "박**",
            description: "오류에 맞서고 집중해서 해결하는 열정이 멋있으세요.",
            position: "팀원",
        },
        {
            id: 8,
            title: "윤**",
            description: "프로젝트기간동안 늘 책임감있는 모습 좋았습니다!",
            position: "팀원",
        },
        {
            id: 9,
            title: "이**",
            description:
                "본인 파트가 아닌데 제 페이지도 함께 고민해주셔서 감사합니다. 협업하면서 서로 도움되고 좋았어요.",
            position: "팀원",
        },
    ];
    return (
        <div className="reviewwrapper flex">
            <div id="review" className="reviewWrap white flexC">
                {/* <div className="titlewrap white flex">
                    <img
                        src="/sohee-portfolio/img/icon/Pencil.svg"
                        alt="feedback"
                    />
                    <div className="header3">Feedback</div>
                </div> */}
                <div className="maintitle flexC">
                    <img
                        src="/sohee-portfolio/img/icon/reviewicon.svg"
                        alt="review"
                    />
                    <div>
                        <p className="header3">R</p>
                        <p className="header3">eview</p>
                    </div>
                    <p className="caption2">
                        함께 작업한 동료들의 솔직한 평가입니다.
                    </p>
                </div>
                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={1.3}
                    spaceBetween={22}
                    breakpoints={{
                        520: {
                            slidesPerView: 2.5,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1280: {
                            slidesPerView: 3.5,
                        },
                    }}
                    autoplay={{ delay: 0, disableOnInteraction: false }} // 자동 슬라이드
                    speed={2500} // 슬라이드 전환 속도
                    className="slidewrap"
                >
                    {cards.map(card => (
                        <SwiperSlide key={card.id}>
                            <div className="card">
                                <div className="subtitle1">
                                    <img
                                        src="/sohee-portfolio/img/icon/man.svg"
                                        alt="person"
                                    />
                                    <p>{card.title}</p>
                                    <p>{card.position}</p>
                                </div>
                                <p className="body2">{card.description}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <div className="subimg">
                <img src="/sohee-portfolio/img/icon/phone.svg" alt="find" />
            </div>
        </div>
    );
};

export default Review_s;
