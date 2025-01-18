// import styles from "../styles/common.module.scss";
import { useState } from "react";
import { deslist, destype } from "./Projectdata";
import classNames from "classnames";
interface rendertype {
    content: destype["content"];
}

const Poprender: React.FC<rendertype> = ({ content }) => {
    const [select, setselect] = useState<string | null>(null);
    // const desshow =()=>{
    //     setaccordion(true)
    // }
    // 화면캡쳐
    if (content === null) {
        return (
            <div className="flexC screen">
                <div className="flex">
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                </div>
                <div className="flex">
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                    <img
                        src="/sohee-portfolio/img/sub/study61.png"
                        alt="site"
                    />
                </div>
            </div>
        );
    }
    // 개요
    if (typeof content === "string") {
        return <p>{content}</p>;
    }

    // 배열-배포링크, 작업기여도
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
                        <div key={idx}>
                            {Object.entries(c).map(([key, value], i) => (
                                <div key={i}>
                                    <div className="flex">
                                        <img
                                            src="/sohee-portfolio/img/icon/finger.svg"
                                            alt="finger"
                                            className="fingericon"
                                        ></img>
                                        <p
                                            className="body1 accordion"
                                            onClick={() =>
                                                setselect(
                                                    select === key ? null : key
                                                )
                                            }
                                        >
                                            {key}
                                        </p>
                                    </div>
                                    <div className={`${select ? "on" : "off"}`}>
                                        {select === key &&
                                            value.map(
                                                (item: string, num: number) => (
                                                    <div key={num}>
                                                        <p className="caption1">
                                                            {item}
                                                        </p>
                                                    </div>
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
