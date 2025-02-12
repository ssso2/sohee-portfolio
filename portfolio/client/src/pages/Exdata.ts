export interface extype {
    name: string;
    date: string;
    info: string;
    des1: string;
    // des2: string;
}

export const exdata: extype[] = [
    {
        name: "순천향대학교",
        date: "2012.03 ~ 2016.02",
        info: "사범계열 유아교육과",
        des1: "유아발달과정, 교육이론, 다양한 교수법 학습, 교구제작, 현장실습, 동아리운영리더",
    },
    {
        name: "푸른동산유치원",
        date: "2016.03 ~ 2019.02",
        info: "담임교사",
        des1: "유아지도, 학급운영, 포트폴리오제작, 수업계획, 수업자료준비, 교재교구개발, 영상편집, 학부모상담",
    },
    {
        name: "한서유치원",
        date: "2019.03 ~ 2024.02",
        info: "담임교사 / 주임교사",
        des1: "교사교육, 학부모상담, 행사기획 및 실행, 교육과정관리, 학급운영총괄, 문제해결 및 의사결정",
    },
    {
        name: "더조은컴퓨터아카데미",
        date: "2024.07 ~ 2025.02",
        info: "프론트엔드개발자교육과정",
        des1: "웹 기초 기술 습득, API 활용 및 CRUD 기능 구현,  Redux를 활용한 상태 관리, 반응형 웹 구현 및 배포, GitHub를 활용한 협업 프로젝트, React와 React Native 통합 학습",
    },
];

export interface icontype {
    name: string;
    src: string;
}
export const icons: icontype[] = [
    { name: "html", src: "/sohee-portfolio/img/icon/html.svg" },
    { name: "css", src: "/sohee-portfolio/img/icon/css.svg" },
    {
        name: "javascript",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567008394/noticon/ohybolu4ensol1gzqas1.png",
    },
    {
        name: "typescript",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566913457/noticon/eh4d0dnic4n1neth3fui.png",
    },
    {
        name: "react",
        src: "/sohee-portfolio/img/icon/logo192.png",
    },

    {
        name: "reactnative",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1613069004/noticon/ugcstxkq5uzhbhknrr80.png",
    },
    {
        name: "scss",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567007298/noticon/zcszelqcacn0cyqpcmjm.png",
    },
    {
        name: "nodejs",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1566557264/noticon/eyhvbmh82nhdoydl4j2a.png",
    },
    {
        name: "mariadb",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1579928281/noticon/wfykhuhsg5hfddh6ok0o.png",
    },
    {
        name: "github",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1567128822/noticon/osiivsvhnu4nt8doquo0.png",
    },
    {
        name: "figma",
        src: "https://noticon-static.tammolo.com/dgggcrkxq/image/upload/v1640982247/noticon/tpvr26zp02angin4t0jv.png",
    },
];
