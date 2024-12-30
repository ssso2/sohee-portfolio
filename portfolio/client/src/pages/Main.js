import "../styles/common.scss";
import Header from "../component/Header";
import Scrollbar from "../component/Scrollbar";
import "../styles/main.scss";

export const Main = () => {
    return (
        <div className="main">
            <Header />
            <Scrollbar />
            <div className="center">
                <div className="main-txt color-w">
                    <p>안녕하세요.</p>
                    <p>프론트엔드 개발자 김소희입니다.</p>
                    <p>웹 개발의 매력에 빠져 배움을 즐기고,</p>
                    <p>소통과 협업에서 가치를 느끼는 개발자입니다.</p>
                </div>
            </div>
        </div>
    );
};
