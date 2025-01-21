// import styles from "../styles/common.module.scss";
import { useState } from "react";
import { deslist, destype } from "./Projectdata";
import Imgpop from "./Imgpop";
interface rendertype {
    content: destype["content"];
}

const Poprender: React.FC<rendertype> = ({ content }) => {
    const images = [
        {
            id: 1,
            src: "/sohee-portfolio/img/sub/hotel.49.25.png",
            alt: "프로젝트 작업화면",
            comment: "메인화면",
        },
        {
            id: 2,
            src: "/sohee-portfolio/img/sub/hotel.77.png",
            alt: "프로젝트 작업화면",
            comment: "객실상세페이지",
        },
        {
            id: 3,
            src: "/sohee-portfolio/img/sub/hotel.50.19.png",
            alt: "프로젝트 작업화면",
            comment: "스페셜오퍼페이지",
        },
        {
            id: 4,
            src: "/sohee-portfolio/img/sub/hotel.54.04.png",
            alt: "프로젝트 작업화면",
            comment: "예약페이지",
        },
        {
            id: 5,
            src: "/sohee-portfolio/img/sub/hotel.54.57.png",
            alt: "프로젝트 작업화면",
            comment: "문의하기게시판",
        },
        {
            id: 6,
            src: "/sohee-portfolio/img/sub/hotel.57.27.png",
            alt: "프로젝트 작업화면",
            comment: "관리자",
        },
    ];
    const [current, setcurrent] = useState<string | null>(null);
    const imgclick = (src: string) => {
        setcurrent(src); // 클릭된 이미지 src 저장
    };
    const closePopup = () => {
        setcurrent(null); // 팝업 닫기
    };
    // 화면캡쳐
    if (content === null) {
        return (
            <div className="flexC screen">
                <p className="gray4">
                    이미지를 클릭하면 작업화면을 크게 볼 수 있습니다.
                </p>
                <div className="flex">
                    {images.map(img => (
                        <div className="siteimg" key={img.id}>
                            <img
                                src={img.src}
                                alt={img.alt}
                                onClick={() => imgclick(img.src)}
                            />
                            <p className="imgdes gray4">{img.comment}</p>
                        </div>
                    ))}
                </div>
                <Imgpop current={current} imgclose={closePopup} />
            </div>
        );
    }
    // 개요
    if (typeof content === "string") {
        return <p className="caption1">{content}</p>;
    }

    // 배열-배포링크, 주요기능, 작업기여도
    if (Array.isArray(content)) {
        if (typeof content[0] === "string") {
            return (
                <ul>
                    {content.map((con, index) => (
                        <li key={index} className="caption1">{`${con}`}</li>
                    ))}
                </ul>
            );
        } else {
            return (
                <div>
                    {content.map((c, idx) => (
                        <div key={idx} className="list">
                            {Object.entries(c).map(([key, value], i) => (
                                <div key={i}>
                                    <div className="flex">
                                        <img
                                            src="/sohee-portfolio/img/icon/finger.svg"
                                            alt="finger"
                                            className="fingericon"
                                        ></img>
                                        <p
                                            className="caption1 accordion"
                                            // onClick={() =>
                                            //     setselect(
                                            //         select === key ? null : key
                                            //     )
                                            // }
                                        >
                                            {key}
                                        </p>
                                    </div>
                                    {/* <div className={`${select ? "on" : "off"}`}> */}
                                    <div className="select">
                                        {value.map(
                                            (item: string, num: number) => (
                                                <ul key={num}>
                                                    <li className="caption1">
                                                        {item}
                                                    </li>
                                                </ul>
                                            )
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            );
        }
    }
    return <p>지원하지 않는 타입</p>;
};

export default Poprender;
