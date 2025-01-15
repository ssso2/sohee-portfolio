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
    content: string;
}
export const deslist: destype[] = [
    {
        title: "개요",
        content:
            " 앱을 지원되는 기기에서 테스트하여 충돌 및 안정성문제를 식별한 후 다시 제출하세요. 문제 해결을 돕기위해 충돌 로그(crash logs)가 첨부되어 있습니다. 충돌문제 해결을 위한 단계 충돌 보고서(crash report)를 완전히 심볼화(symbolicate) 하세요. 방법은 Adding Identifiable Symbol Names to a Crash Report 문서 참고하세요",
    },
    {
        title: "배포링크",
        content: "https://www.google.com/",
    },
];
