import React, { useEffect, useState } from "react";
import "../styles/common.scss";
import "../styles/intro.scss";

const Scrollbar_s: React.FC = () => {
    const [gagefill, setgagefill] = useState(0);

    useEffect(() => {
        const scrollE = () => {
            const scrollTop = window.scrollY;
            // console.log("스크롤위치", scrollTop);
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            // console.log("스크롤가능전체높이", scrollHeight);
            const scrollpercent = (scrollTop / scrollHeight) * 100;
            // console.log("스크롤퍼센트", scrollpercent);
            setgagefill(scrollpercent);
        };
        window.addEventListener("scroll", scrollE);
        return () => {
            window.removeEventListener("scroll", scrollE);
        };
    }, []);
    return (
        <div className="scrollwrap">
            <div className="scrollbar">
                <div className="barTxt">Start</div>
                <div className="gaugeContainer">
                    <div
                        className="gaugeFill"
                        style={{ height: `${gagefill}%` }}
                    ></div>
                </div>
                <span className="percentage">{Math.round(gagefill)}%</span>
                <div className="barTxt">End</div>
            </div>
        </div>
    );
};

export default Scrollbar_s;
