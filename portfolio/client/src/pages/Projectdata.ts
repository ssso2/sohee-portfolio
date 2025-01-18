export interface viewtype {
    id: number;
    title: string;
    description: string;
    img: string;
}
export const projectview: viewtype[] = [
    {
        id: 1,
        title: "신라호텔 서울",
        description:
            "리뉴얼하여 더욱 직관적이고 효율적인 예약환경을 제공했습니다",
        img: "/sohee-portfolio/img/sub/study61.png",
    },
    {
        id: 2,
        title: "포트폴리오",
        description:
            "리뉴얼하여 더욱 직관적이고 효율적인 예약환경을 제공했습니다",
        img: "/sohee-portfolio/img/sub/study61.png",
    },
];

export interface infotype {
    title: string;
    people: string;
    date: string;
    num: string;
}
export const projectinfo: infotype[] = [
    {
        title: "신라호텔 서울",
        people: "Font-End Developer",
        date: "기간 : 24.12 ~ 25.01",
        num: "인원 : 5명",
    },
    {
        title: "포트폴리오",
        people: "Font-End Developer",
        date: "기간 : 25.01 ~ 25.01",
        num: "인원 : 1명",
    },
    {
        title: "조말론",
        people: "Font-End Developer",
        date: "기간 : 25.01 ~ 25.01",
        num: "인원 : 4명",
    },
];

export interface destype {
    title: string;
    content: null | string | string[] | { [key: string]: string[] }[];
    // | Record<string, string[]>[];
}
export const deslist: destype[] = [
    {
        title: "개요",
        content: "리뉴얼을 통해 더 직관적이고 편리한 예약 환경을 만들었습니다.",
    },
    {
        title: "배포링크",
        content: ["https://www.", "https://www.", "https://www."],
    },
    {
        title: "주요기능",
        content: [
            "스페셜오퍼필터검색",
            "객실예약 및 취소",
            "문의게시판",
            "관리자페이지",
        ],
    },
    {
        title: "기술스택",
        content: ["html scss javascript", "scss"],
    },
    {
        title: "작업기여도",
        content: [
            {
                스페셜오퍼필터검색: ["문제점", "해결"],
            },
            {
                아이디비밀번호찾기: ["문제점", "해결"],
            },
            {
                문의게시판: ["문제점", "해결"],
            },
            {
                관리자페이지: ["문제점", "해결"],
            },
        ],
    },
    {
        title: "트러블슈팅",
        content: [
            {
                스페셜오퍼: ["문제점", "해결"],
            },
            {
                타이밍: ["문제점", "해결"],
            },
            {
                디자인통일성: ["문제점", "해결"],
            },
        ],
    },
    {
        title: "스크린샷",
        content: null,
    },
];
