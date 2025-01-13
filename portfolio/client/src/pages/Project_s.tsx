import "../styles/common.scss";
import "../styles/project.scss";

const Project_s: React.FC = () => {
    return (
        <>
            <div id="project" className="center colorW flexC">
                <div className="projectwrap">
                    <h1 className="title"> PROJECT</h1>
                    <div className="line">
                        <div className="imgwrap">
                            <img
                                src="/sohee-portfolio/img/sub/study61.png"
                                alt="silla"
                            />
                            <span className="des">
                                <p>신라호텔 서울</p>
                                <p>
                                    리뉴얼하여 더욱 직관적이고 효율적인 예약
                                    환경을 제공했습니다
                                </p>
                            </span>
                            <button className="black1 detaillink">
                                {" "}
                                자세히보기
                            </button>
                        </div>
                        <div className="imgwrap">
                            <img
                                src="/sohee-portfolio/img/sub/study61.png"
                                alt="jomalone"
                            />
                            <span className="des">
                                <p>조말론</p>
                                <p>
                                    API하여 더욱 직관적이고 효율적인 예약 환경을
                                    제공했습니다
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Project_s;
