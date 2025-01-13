import { useEffect, useState } from "react";
import "../styles/common.scss";

const Topbtn: React.FC = () => {
    const [showtop, setshowtop] = useState(false);

    const topE = () => {
        if (window.scrollY > 0) {
            setshowtop(true);
            // console.log("탑버튼스크롤확인용", window.scrollY);
        } else setshowtop(false);
    };

    const topclick = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth", // 부드럽게 스크롤
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", topE);
        return () => {
            window.removeEventListener("scroll", topE);
        };
    }, []);

    return (
        <>
            {showtop && (
                <div className="twrap" onClick={topclick}>
                    <img
                        className="top"
                        src="/sohee-portfolio/img/icon/icon-arrow.png"
                        alt="top"
                    />
                </div>
            )}
        </>
    );
};

export default Topbtn;
