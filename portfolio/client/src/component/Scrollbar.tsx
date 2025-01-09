import React, { useEffect, useState } from "react";
import styles from "../styles/common.module.css";

const Scrollbar: React.FC = () => {
    const [gagefill, setgagefill] = useState(0);

    useEffect(() => {
        const scrollE = () => {
            const scrollTop = window.scrollY;
            console.log("스크롤위치", scrollTop);
            const scrollHeight =
                document.documentElement.scrollHeight - window.innerHeight;
            console.log("스크롤가능전체높이", scrollHeight);
            const scrollpercent = (scrollTop / scrollHeight) * 100;
            console.log("스크롤퍼센트", scrollpercent);
            setgagefill(scrollpercent);
        };
        window.addEventListener("scroll", scrollE);
        return () => {
            window.removeEventListener("scroll", scrollE);
        };
    }, []);
    return (
        <div className={styles.scrollbar}>
            <div className={styles.barTxt}>Start</div>
            <div className={styles.gaugeContainer}>
                <div
                    className={styles.gaugeFill}
                    style={{ height: `${gagefill}%` }}
                ></div>
            </div>
            <span className={styles.percentage}>{Math.round(gagefill)}%</span>
            <div className={styles.barTxt}>End</div>
        </div>
    );
};

export default Scrollbar;
