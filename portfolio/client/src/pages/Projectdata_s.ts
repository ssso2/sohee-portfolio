export interface viewtype {
    id: number;
    title: string;
    description: string;
    img: string;
    people: string;
    date: string;
    num: string;
}
export const projectview: viewtype[] = [
    {
        id: 1,
        title: "서울 신라호텔",
        description:
            "시맨틱 마크업, 사이트 이동 간소화, 예약 시스템 최적화, 반응형 디자인을 도입한 서울신라호텔 리뉴얼 프로젝트를 진행했습니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 24.12 ~ 25.01",
        num: "인원 : 5명",
    },
    {
        id: 2,
        title: "포트폴리오 사이트",
        description:
            "저의 경험과 프로젝트를 담아 React로 구현한 반응형 포트폴리오 사이트입니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.01 ~ 25.01",
        num: "인원 : 1명",
    },
    {
        id: 3,
        title: "조말론",
        description: "리뉴얼 프로젝트를 진행했습니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.01 ~ 25.01",
        num: "인원 : 4명",
    },
    {
        id: 4,
        title: "다이어리",
        description: "다이어리 서비스입니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.01 ~ 25.01",
        num: "인원 : 1명",
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
        title: "서울 신라호텔",
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
/////새로 구조화
export interface imgtype {
    id: number;
    src: string;
    alt: string;
    comment: string;
}
export interface contenttype {
    id?: number;
    title?: string;
    content?: string | string[] | { [key: string]: string[] }[];
    imges?: imgtype[];
}
type plisttype = contenttype[][];
export const projectlist: plisttype = [
    [
        {
            id: 1,
            title: "개요",
            content:
                "기존 '서울신라호텔'은 이미지 기반 구조로 검색엔진 최적화(SEO)가 미흡했고, 예약 시 통합 사이트로 페이지가 전환되는 불편함이 있었습니다. 또한 반응형 웹 디자인이 적용되지 않아 디바이스 호환성이 부족했습니다. 이러한 문제점들을 개선하기위해 시맨틱 마크업으로  검색엔진 최적화를 강화하고, 예약 시스템 연동 최적화 및 반응형 디자인을 도입하여 사용자 경험을 크게 개선했습니다.",
        },
        {
            title: "배포링크",
            content: [
                "깃허브 : https://www.",
                "사이트 : https://www.",
                "https://www.",
            ],
        },
        {
            title: "주요기능",
            content: [
                "사용자 유형(회원, 비회원, 관리자)에 따라 2depth 접근처리",
                "스페셜오퍼 필터 검색 및 상품 예약",
                "객실예약 및 취소",
                "문의하기와 공지사항게시판 CRUD기능 지원",
                "카드와 리스트 개수에 따라 페이지네이션 처리",
                "관리자페이지 - 대시보드, 고객관리, 객식관리, 게시판관리, 매출현황",
                "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
            ],
        },
        {
            title: "기술스택",
            content: [
                "javascript",
                "scss, react, axios",
                "node.js, express, mariadb",
            ],
        },
        {
            title: "작업기여도",
            content: [
                "스페셜오퍼 상품을 다중 필터링 검색하는 기능을 구현했습니다.",
                "이벤트 페이지에 다양한 디바이스에 최적화된 반응형 레이아웃을 적용했습니다.",
                "공지사항의 제목과 내용을 기준으로 검색할 수 있는 기능을 추가했습니다.",
                "사용자가 계정 정보를 쉽게 복구할 수 있도록 아이디/비밀번호 찾기  프로세스를 구현했습니다.",
                "관리자 공지사항관리(등록,수정,삭제) 시스템을 구축했습니다.",
                "게시판 글 등록시 파일 업로드 및 출력 기능을 추가했습니다.",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "스페셜 오퍼 필터링 기능에서 조건에 맞는 상품 미출력": [
                        "문제점 : 3가지 필터(기간조회, 유형구분, 키워드)가 변경될 때마다 상품이 올바르게 출력되어야하지만 필터링이 제대로 되지않는 오류가 있었습니다. ",
                        "해결방법 : 백엔드 쿼리를 반복적으로 수정하면서 해결했습니다.",
                    ],
                },
                {
                    "스페셜 오퍼 객실 패키지 마감기간 설정": [
                        "문제점 : 상품 마감일이 24일인 경우, 실제 예약일을 24일 체크아웃으로 제한할지 24일에 예약해서 25일 체크아웃까지 허용할지에 대한 고민이 있었습니다.",
                        "해결방법 : 팀원들과 회의후에 상품 마감기간까지 출력하고 다음 날 체크아웃을 허용하도록 결정했습니다.",
                    ],
                },
                {
                    "공지사항 상세페이지 빈 화면 오류": [
                        "문제점 : 공지사항 상세페이지를 클릭했을 때 데이터 로딩 타이밍 문제로 빈 화면이 표시되는 오류가 발생했습니다.",
                        "해결방법 : axios 비동기 처리에서 타이밍 문제를 확인하고 수정해서 데이터를 정상적으로 로드되도록 개선했습니다.",
                    ],
                },
                {
                    "디자인 통일성 문제": [
                        "문제점 : 역할 분담받은 페이지를 미리 작업했으나 이후 다른 팀원들 페이지와 디자인 일관성이 맞지 않았습니다.",
                        "해결방법 : 팀장님 의견에 따라 관리자 페이지의 전체적인 디자인과 레이아웃 통일성을 맞추는 방향으로 수정했습니다.",
                    ],
                },
            ],
        },
        {
            imges: [
                {
                    id: 1,
                    src: "/sohee-portfolio/img/sub/hotel.49.25.png",
                    alt: "프로젝트 작업화면",
                    comment: "메인화면",
                },
                {
                    id: 2,
                    src: "/sohee-portfolio/img/sub/hotel.77.png",
                    alt: "프로젝트 작업화면",
                    comment: "객실상세페이지",
                },
                {
                    id: 3,
                    src: "/sohee-portfolio/img/sub/hotel.50.19.png",
                    alt: "프로젝트 작업화면",
                    comment: "스페셜오퍼페이지",
                },
                {
                    id: 4,
                    src: "/sohee-portfolio/img/sub/hotel.54.04.png",
                    alt: "프로젝트 작업화면",
                    comment: "예약페이지",
                },
                {
                    id: 5,
                    src: "/sohee-portfolio/img/sub/hotel.54.57.png",
                    alt: "프로젝트 작업화면",
                    comment: "문의하기게시판",
                },
                {
                    id: 6,
                    src: "/sohee-portfolio/img/sub/hotel.57.27.png",
                    alt: "프로젝트 작업화면",
                    comment: "관리자",
                },
            ],
        },
    ],
    [
        {
            id: 2,
            title: "개요",
            content:
                "기존 '서울신라호텔'은 이미지 기반 구조로 검색엔진 최적화(SEO)가 미흡했고, 예약 시 통합 사이트로 페이지가 전환되는 불편함이 있었습니다. 또한 반응형 웹 디자인이 적용되지 않아 디바이스 호환성이 부족했습니다. 이러한 문제점들을 개선하기위해 시맨틱 마크업으로  검색엔진 최적화를 강화하고, 예약 시스템 연동 최적화 및 반응형 디자인을 도입하여 사용자 경험을 크게 개선했습니다.",
        },
        {
            title: "배포링크",
            content: [
                "깃허브 : https://www.",
                "사이트 : https://www.",
                "https://www.",
            ],
        },
        {
            title: "주요기능",
            content: [
                "사용자 유형(회원, 비회원, 관리자)에 따라 2depth 접근처리",
                "스페셜오퍼 필터 검색 및 상품 예약",
                "객실예약 및 취소",
                "문의하기와 공지사항게시판 CRUD기능 지원",
                "카드와 리스트 개수에 따라 페이지네이션 처리",
                "관리자페이지 - 대시보드, 고객관리, 객식관리, 게시판관리, 매출현황",
                "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
            ],
        },
    ],
];

////여기까지
export interface destype {
    title: string;
    content: null | string | string[] | { [key: string]: string[] }[];
    // | Record<string, string[]>[];
}
export const deslist: destype[] = [
    {
        title: "개요",
        content:
            "기존 '서울신라호텔'은 이미지 기반 구조로 검색엔진 최적화(SEO)가 미흡했고, 예약 시 통합 사이트로 페이지가 전환되는 불편함이 있었습니다. 또한 반응형 웹 디자인이 적용되지 않아 디바이스 호환성이 부족했습니다. 이러한 문제점들을 개선하기위해 시맨틱 마크업으로  검색엔진 최적화를 강화하고, 예약 시스템 연동 최적화 및 반응형 디자인을 도입하여 사용자 경험을 크게 개선했습니다.",
    },
    {
        title: "배포링크",
        content: [
            "깃허브 : https://www.",
            "사이트 : https://www.",
            "https://www.",
        ],
    },
    {
        title: "주요기능",
        content: [
            "사용자 유형(회원, 비회원, 관리자)에 따라 2depth 접근처리",
            "스페셜오퍼 필터 검색 및 상품 예약",
            "객실예약 및 취소",
            "문의하기와 공지사항게시판 CRUD기능 지원",
            "카드와 리스트 개수에 따라 페이지네이션 처리",
            "관리자페이지 - 대시보드, 고객관리, 객식관리, 게시판관리, 매출현황",
            "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
        ],
    },
    {
        title: "기술스택",
        content: [
            "javascript",
            "scss, react, axios",
            "node.js, express, mariadb",
        ],
    },
    {
        title: "작업기여도",
        content: [
            "스페셜오퍼 상품을 다중 필터링 검색하는 기능을 구현했습니다.",
            "이벤트 페이지에 다양한 디바이스에 최적화된 반응형 레이아웃을 적용했습니다.",
            "공지사항의 제목과 내용을 기준으로 검색할 수 있는 기능을 추가했습니다.",
            "사용자가 계정 정보를 쉽게 복구할 수 있도록 아이디/비밀번호 찾기  프로세스를 구현했습니다.",
            "관리자 공지사항관리(등록,수정,삭제) 시스템을 구축했습니다.",
            "게시판 글 등록시 파일 업로드 및 출력 기능을 추가했습니다.",
        ],
    },
    {
        title: "트러블슈팅",
        content: [
            {
                "스페셜 오퍼 필터링 기능에서 조건에 맞는 상품 미출력": [
                    "문제점 : 3가지 필터(기간조회, 유형구분, 키워드)가 변경될 때마다 상품이 올바르게 출력되어야하지만 필터링이 제대로 되지않는 오류가 있었습니다. ",
                    "해결방법 : 백엔드 쿼리를 반복적으로 수정하면서 해결했습니다.",
                ],
            },
            {
                "스페셜 오퍼 객실 패키지 마감기간 설정": [
                    "문제점 : 상품 마감일이 24일인 경우, 실제 예약일을 24일 체크아웃으로 제한할지 24일에 예약해서 25일 체크아웃까지 허용할지에 대한 고민이 있었습니다.",
                    "해결방법 : 팀원들과 회의후에 상품 마감기간까지 출력하고 다음 날 체크아웃을 허용하도록 결정했습니다.",
                ],
            },
            {
                "공지사항 상세페이지 빈 화면 오류": [
                    "문제점 : 공지사항 상세페이지를 클릭했을 때 데이터 로딩 타이밍 문제로 빈 화면이 표시되는 오류가 발생했습니다.",
                    "해결방법 : axios 비동기 처리에서 타이밍 문제를 확인하고 수정해서 데이터를 정상적으로 로드되도록 개선했습니다.",
                ],
            },
            {
                "디자인 통일성 문제": [
                    "문제점 : 역할 분담받은 페이지를 미리 작업했으나 이후 다른 팀원들 페이지와 디자인 일관성이 맞지 않았습니다.",
                    "해결방법 : 팀장님 의견에 따라 관리자 페이지의 전체적인 디자인과 레이아웃 통일성을 맞추는 방향으로 수정했습니다.",
                ],
            },
        ],
    },
    {
        title: "스크린샷",
        content: null,
    },
];
