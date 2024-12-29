import "../styles/common.scss";
import "../styles/intro.scss";

const Intro = () => {
    return (
        <>
            <div className="center">
                <div className="intro flex">
                    <div className="intro-loading">
                        {/* <span className="loading"></span> */}
                        <svg
                            class="loading-spinner"
                            width="88"
                            height="88"
                            viewBox="0 0 50 50"
                        >
                            <circle
                                cx="25"
                                cy="25"
                                r="20"
                                stroke="#c2c2c2"
                                stroke-width="5"
                                fill="none"
                            ></circle>
                            <circle
                                className="progress"
                                cx="25"
                                cy="25"
                                r="20"
                                stroke="#e74c3c"
                                stroke-width="5"
                                fill="none"
                                stroke-dasharray="125.6" // 원 둘레
                                stroke-dashoffset="125.6" //초기 상태 (0% 채움)
                                // stroke-linecap="round"
                            ></circle>
                        </svg>
                    </div>
                    <div className="intro-txt flex">
                        <p> Sohee's</p>
                        <p>front-end developer</p>
                        <p>portfolio</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Intro;
