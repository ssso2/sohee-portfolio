import styles from "../styles/common.module.css";

interface gagefillProps {
    gagefill: number;
}

const Scroll: React.FC<gagefillProps> = ({ gagefill }) => {
    return (
        <div className={styles.scrollwrap}>
            <div className={styles.scrollbar}>
                <div className={styles.barTxt}>Start</div>
                <div className={styles.gaugeContainer}>
                    <div
                        className={styles.gaugeFill}
                        style={{ height: `${gagefill}%` }}
                    ></div>
                </div>
                <span className={styles.percentage}>
                    {Math.round(gagefill)}%
                </span>
                <div className={styles.barTxt}>End</div>
            </div>
        </div>
    );
};

export default Scroll;
