// import styles from "../styles/common.module.scss";
import { useState } from "react";
import { contenttype, imgtype } from "./Projectdata_s";
import Imgpop from "./Imgpop_new";
interface rendertype {
    content: contenttype["content"];
}
const Poprender: React.FC<rendertype> = ({ content }) => {
    const [current, setcurrent] = useState<string | null>(null);
    const imgclick = (src: string) => {
        setcurrent(src); // 클릭된 이미지 src 저장
    };
    const closePopup = () => {
        // if (e) {
        //     e.stopPropagation();
        // }
        setcurrent(null); // 팝업 닫기
    };

    // 개요
    if (typeof content === "string") {
        return <p className="body2 outline">{content}</p>;
    }

    // 배열-배포링크, 주요기능, 작업기여도, 스크린샷
    if (Array.isArray(content)) {
        if (typeof content[0] === "string") {
            return (
                <ul>
                    {content.map((con, index) => (
                        <li key={index} className="body2">{`${con}`}</li>
                    ))}
                </ul>
            );
        }
        if (typeof content[0] === "object" && "src" in content[0]) {
            return (
                <div className="flexC screen">
                    <p className="gray4">
                        이미지를 클릭하면 작업화면을 크게 볼 수 있습니다.
                    </p>
                    <div className="flex">
                        {(content as imgtype[]).map(img => (
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
                                        <p className="subtitle1 accordion">
                                            {key}
                                        </p>
                                    </div>
                                    {/* <div className={`${select ? "on" : "off"}`}> */}
                                    <div className="select">
                                        {value.map(
                                            (item: string, num: number) => (
                                                <ul key={num}>
                                                    <li className="body2">
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
    return <p>지원하지 않는 타입입니다.</p>;
};

export default Poprender;
