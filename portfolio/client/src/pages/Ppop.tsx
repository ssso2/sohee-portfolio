import "../styles/common.scss";
import "../styles/popup.scss";
import { viewtype, projectinfo, deslist } from "./Projectdata";

interface datatype {
    projectview: viewtype[];
    onClose: () => void;
}

const Ppop: React.FC<datatype> = ({ projectview, onClose }) => {
    if (!projectview || projectview.length === 0) {
        return <div>데이터가 없습니다.</div>;
    }
    console.log("projectview", projectview);
    const datalist = [
        {
            title: "개요",
            content:
                " 앱을 지원되는 기기에서 테스트하여 충돌 및 안정성문제를 식별한 후 다시 제출하세요. 문제 해결을 돕기위해 충돌 로그(crash logs)가 첨부되어 있습니다. 충돌문제 해결을 위한 단계 충돌 보고서(crash report)를 완전히 심볼화(symbolicate) 하세요. 방법은 Adding Identifiable Symbol Names to a Crash Report 문서 참고하세요",
        },
        {
            title: "배포링크",
            content:
                " 앱을 지원되는 기기에서 테스트하여 충돌 및 안정성문제를 식별한 후 다시 제출하세요. 문제 해결을 돕기위해 충돌 로그(crash logs)가 첨부되어 있습니다. 충돌문제 해결을 위한 단계 충돌 보고서(crash report)를 완전히 심볼화(symbolicate) 하세요. 방법은 Adding Identifiable Symbol Names to a Crash Report 문서 참고하세요",
        },
    ];
    return (
        <div className="projectpop">
            <div className="popclose" onClick={onClose}>
                <img src="/sohee-portfolio/img/icon/logo192.png" alt="close" />
            </div>
            {projectview.map(project => (
                <header key={project.id}>
                    <div className="subtitle1 black1">{project.title}</div>
                    <div className="imgwrap">
                        <img src={project.img} alt="silla" />
                    </div>
                </header>
            ))}
            <div className="deswrap flex">
                <aside>
                    <p className="subtitle1">{projectinfo[0].title}</p>
                    <p className="label1 gray4">{projectinfo[0].people}</p>
                    <p className="label1 gray4">기간 : 24.12 ~ 24.01</p>
                    <p className="label1 gray4">인원 : 5명</p>
                </aside>
                <main>
                    {deslist.map((data, index) => (
                        <div className="section" key={index}>
                            <div className="ptitle gray5 subtitle1">
                                {data.title}
                            </div>
                            <div className="des caption1">{data.content}</div>
                        </div>
                    ))}
                </main>
            </div>
        </div>
    );
};

export default Ppop;
