import { V } from "react-router/dist/development/fog-of-war-DLtn2OLr";
import "../styles/common.scss";
interface closeprops {
    onclose: () => void;
}
const Conpop: React.FC<closeprops> = ({ onclose }) => {
    interface contype {
        conicon: string;
        method: string;
        name: string;
        copyicon: string;
        link?: string;
    }
    const contacs: contype[] = [
        {
            conicon: "/sohee-portfolio/img/icon/email.svg",
            method: "Email",
            name: "1234@gmail.com",
            copyicon: "/sohee-portfolio/img/icon/copy.svg",
        },
        {
            conicon: "/sohee-portfolio/img/icon/githubfill.svg",
            method: "GitHub",
            name: "oooo12345",
            copyicon: "/sohee-portfolio/img/icon/Vectorb.svg",
            link: "http://www.google.com",
        },
        {
            conicon: "/sohee-portfolio/img/icon/simplevelog.svg",
            method: "velog",
            name: "velog.io/@whatever/posts",
            copyicon: "/sohee-portfolio/img/icon/Vectorb.svg",
            link: "http://www.google.com",
        },
    ];
    const copyemail = (text: string) => {
        navigator.clipboard
            .writeText(text)
            .then(() => {
                alert("이메일이 복사되었습니다.");
            })
            .catch(error => {
                alert("이메일 복사에 실패했습니다. 다시 시도해주세요.");
            });
    };
    return (
        <div className="conpopwrapper" onClick={e => e.stopPropagation()}>
            <div className="conpopwrap">
                <div className="popclose" onClick={onclose}>
                    {" "}
                    <img src="/sohee-portfolio/img/icon/close.svg" alt="닫기" />
                </div>
                <div className="conitems">
                    <div className="contitle">
                        <p className="header1">
                            저의 사이트와 프로젝트에 대해 더 궁금하신가요?
                        </p>
                    </div>
                    <div className="conitemwrap">
                        {contacs.map(item => (
                            <div className="conitem" key={item.method}>
                                <div className="conmethod">
                                    <img
                                        src={item.conicon}
                                        alt="이메일"
                                        className="conicon"
                                    />
                                    <p className="subtitle1 mname">
                                        {item.method}
                                    </p>
                                </div>
                                <div className="conname">
                                    <p className="subtitle2">{item.name}</p>
                                    <img
                                        src={item.copyicon}
                                        alt="복사"
                                        className="copy"
                                        onClick={() => {
                                            if (item.method === "Email") {
                                                copyemail(item.name);
                                            } else if (item.link) {
                                                window.open(item.link);
                                                // window.location.href =
                                                // item.link;
                                            }
                                        }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Conpop;
