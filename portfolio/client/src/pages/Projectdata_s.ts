export interface viewtype {
    id: number;
    title: string;
    description: string;
    img: string;
    people: string;
    date: string;
    num: string;
    logo: string;
}
export const projectview: viewtype[] = [
    {
        id: 1,
        title: "서울 신라호텔",
        description:
            "시맨틱 마크업, 사이트 이동 간소화, 예약 시스템 최적화, 반응형 디자인을 도입한 서울신라호텔 리뉴얼 프로젝트를 진행했습니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 24.11.26 ~ 24.12.13",
        num: "인원 : 5명",
        logo: "/sohee-portfolio/img/icon/silla.svg",
    },
    {
        id: 2,
        title: "포트폴리오 사이트",
        description:
            "저의 경험과 프로젝트를 담아 React로 구현한 반응형 포트폴리오 사이트입니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.01.xx ~ 25.01.xx",
        num: "인원 : 1명",
        logo: "/sohee-portfolio/img/icon/perfume.svg",
    },
    {
        id: 3,
        title: "조말론 런던",
        description:
            "리뉴얼 프로젝트를 진행하며 간편로그인, 결제, 배송조회등 다양한 외부 API를 연동하여 사용자 편의성을 높였습니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.01.02 ~ 25.01.15",
        num: "인원 : 4명",
        logo: "/sohee-portfolio/img/icon/silla.svg",
    },
    {
        id: 4,
        title: "다이어리",
        description: "다이어리 서비스입니다.",
        img: "/sohee-portfolio/img/sub/study61.png",
        people: "Font-End Developer",
        date: "기간 : 25.02 ~ 25.01",
        num: "인원 : 1명",
        logo: "/sohee-portfolio/img/icon/silla.svg",
    },
];

// export interface infotype {
//     title: string;
//     people: string;
//     date: string;
//     num: string;
// }
// export const projectinfo: infotype[] = [
//     {
//         title: "서울 신라호텔",
//         people: "Font-End Developer",
//         date: "기간 : 24.12 ~ 25.01",
//         num: "인원 : 5명",
//     },
//     {
//         title: "포트폴리오",
//         people: "Font-End Developer",
//         date: "기간 : 25.01 ~ 25.01",
//         num: "인원 : 1명",
//     },
//     {
//         title: "조말론",
//         people: "Font-End Developer",
//         date: "기간 : 25.01 ~ 25.01",
//         num: "인원 : 4명",
//     },
// ];

export interface imgtype {
    id: number;
    src: string;
    alt: string;
    comment: string;
}
export interface contenttype {
    id?: number;
    title?: string;
    content?:
        | string
        | string[]
        | { [key: string]: string[] }[]
        | null
        | undefined
        | imgtype[];
    // imges?: imgtype[];
}
type plisttype = contenttype[][];
export const projectlist: plisttype = [
    //신라호텔
    [
        {
            id: 1,
            title: "개요",
            content:
                "기존 '서울신라호텔'은 이미지 기반 구조로 검색엔진 최적화(SEO)가 미흡했고, 예약 시 통합 사이트로 페이지가 전환되는 불편함이 있었습니다. 또한 반응형 웹 디자인이 적용되지 않아 디바이스 호환성이 부족했습니다. 이러한 문제점들을 개선하기위해 시맨틱 마크업으로  검색엔진 최적화를 강화하고, 예약 시스템 연동 최적화 및 반응형 디자인을 도입하여 사용자 경험을 개선했습니다.",
        },
        {
            title: "배포링크",
            content: [
                "사이트 : https://www.",
                "깃허브 : https://www.",
                "벨로그 : https://www.",
            ],
        },
        {
            title: "주요기능",
            content: [
                "사용자 유형(회원, 비회원, 관리자)에 따라 2depth 접근처리",
                "스페셜오퍼 필터 검색 및 상품 예약",
                "객실예약 및 취소 시스템",
                "문의하기와 공지사항게시판 CRUD기능 지원",
                "카드와 리스트 개수에 따라 페이지네이션 처리",
                "관리자페이지 - 대시보드, 고객관리, 객식관리, 게시판관리, 매출현황",
                "다양한 디바이스와 브라우저에 최적화된 반응형 구현",
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
                "date range picker, selectbox, checkbox를 활용한 다중 필터링 검색 기능을 구현했습니다.",
                "다양한 디바이스 환경에 맞춘 반응형 이벤트 페이지를 구현했습니다.",
                "공지사항을 제목과 내용으로 검색할 수 있는 기능을 추가했습니다.",
                "사용자가 계정 정보를 쉽게 복구할 수 있도록 아이디/비밀번호 찾기  프로세스를 구현했습니다.",
                "관리자 공지사항관리 시스템(등록,수정,삭제)을 구축했습니다.",
                "게시판 글 등록시 파일 업로드 및 조회 기능을 추가했습니다.",
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
                    "공지사항 상세페이지 빈 화면 오류": [
                        "문제점 : 공지사항 상세페이지를 클릭했을 때 데이터없이 빈 화면이 표시되는 오류가 발생했습니다.",
                        "해결방법 : axios 비동기 처리에서 타이밍 문제를 확인하고 수정해서 데이터를 정상적으로 로드되도록 개선했습니다.",
                    ],
                },
                {
                    "스페셜 오퍼 객실 패키지 마감기간 설정": [
                        "문제점 : 스페셜오퍼 상품 마감일에 대한 검색 로직과 체크인 허용 기준에 대한 고민이 있었습니다.",
                        "해결방법 : 팀원들과 회의후에 마감일 당일까지 출력하고 다음 날 체크아웃을 허용하도록 결정했습니다.",
                    ],
                },
                {
                    "디자인 통일성 문제": [
                        "문제점 : 역할 분담받은 페이지를 미리 작업했으나 이후 다른 팀원들 페이지와 디자인 통일성이 부족했습니다.",
                        "해결방법 : 팀장님 의견에 따라 관리자 페이지의 전체적인 디자인과 레이아웃 통일성을 맞추는 방향으로 수정했습니다.",
                    ],
                },
            ],
        },
        {
            title: "스크린샷 ",
            content: [
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
    //포트폴리오
    [
        {
            id: 2,
            title: "개요",
            content:
                "팀 프로젝트 경험을 토대로 전반적인 웹 개발 역량을 강화하고자 포트폴리오를 제작했습니다. React와 여러 라이브러리를 활용하고, 반응형 웹 구현으로 다양한 환경에서 접근성을 높였습니다. 피드백을 반영해서 지속적으로 개선하고 발전시켜 나갈 예정입니다.",
        },
        {
            title: "배포링크",
            content: ["깃허브 : https://www.", "벨로그 : https://www."],
        },
        {
            title: "주요기능",
            content: [
                "스크롤 위치에 따른 페이지 진행도 표시",
                "헤더 GNB와 contact/top 플로팅 버튼 구현",
                "intro, main, about, experience, project, review로 섹션 구성",
                "사이트 개선을 위한 피드백 설문 시스템 연동",
                "다양한 디바이스와 브라우저에 최적화된 반응형 구현",
            ],
        },
        {
            title: "기술스택",
            content: ["typecript", "scss, react"],
        },
        {
            title: "작업기여도",
            content: [
                "기획 / 디자인 / 개발 전반을 담당했습니다.",
                "헤더 GNB의 앵커 태그(#)를 사용해 섹션 간 이동을 구현했습니다.",
                "프로젝트에 대한 자세한 내용은 모달 팝업으로 구현했습니다.",
                "애니메이션과 스와이퍼로 역동적인 ui를 구현했습니다.",
                "contact/top 플로팅 버튼으로 접근성을 높였습니다.",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "타입스크립트 타입 오류": [
                        "문제점 : 독학으로 배워서 적용하다보니 타입오류 많이 마주함 ",
                        "해결방법 : 오류해석하면서 하나씩 알아감.",
                    ],
                },
                {
                    "프로젝트 데이터구조화 문제": [
                        "문제점 : 하나의 데이터를 예시로 구조화하였는데 다중데이터일경우 해당 구조로는 출력이 불가함.",
                        "해결방법 : 다중데이터일경우 해당 구조로는 출력이 불가해서 다시 구조화작업.",
                    ],
                },
                {
                    "스크롤 이벤트 처리 오류": [
                        "문제점 : 스크롤이 해당 영역에 왔을 때 처리방법 고민했습니다.",
                        "해결방법 : 공부하여 옵저브로 처리했습니다.",
                    ],
                },
            ],
        },
        {
            title: "스크린샷 ",
            content: [
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
                    comment: "소개페이지",
                },
                {
                    id: 3,
                    src: "/sohee-portfolio/img/sub/hotel.50.19.png",
                    alt: "프로젝트 작업화면",
                    comment: "학력,경력페이지",
                },
                {
                    id: 4,
                    src: "/sohee-portfolio/img/sub/hotel.54.04.png",
                    alt: "프로젝트 작업화면",
                    comment: "프로젝트리스트",
                },
                {
                    id: 5,
                    src: "/sohee-portfolio/img/sub/hotel.54.57.png",
                    alt: "프로젝트 작업화면",
                    comment: "프로젝트상세",
                },
                {
                    id: 6,
                    src: "/sohee-portfolio/img/sub/hotel.57.27.png",
                    alt: "프로젝트 작업화면",
                    comment: "리뷰페이지",
                },
            ],
        },
    ],
    //조말론
    [
        {
            id: 3,
            title: "개요",
            content:
                "기존 조말론 사이트는 지도 정보 오류, 잦은 서버 다운으로 인한 사이트 안정성 문제, 리뷰 필터링 부재등 다양한 개선이 필요했습니다. 고객 편의성과 신뢰도 향상을 위해 웹사이트 리뉴얼을 진행했으며, 다양한 외부 API를 연동하여 사용자 경험을 개선했습니다.",
        },
        {
            title: "배포링크",
            content: [
                "사이트 : https://www.",
                "깃허브 : https://www.",
                "벨로그 : https://www.",
            ],
        },
        {
            title: "주요기능",
            content: [
                "카테고리 & 검색어를 통해 상품검색",
                "센트파인더로 나에게 어울리는 향수찾기 및 공유",
                "배송조회",
                "베송지변경 도로명주소 조회",
                "옵션별 구매 및 장바구니, 결제, 주문취소",
                "회원가입 및 카카오 간편로그인",
                "매장안내지도",
                "1:1 문의 답변 이메일 전송",
                "관리자페이지 - 대시보드, 회원관리, 주문관리, 제품관리, 게시판관리, 매출분석",
                "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
            ],
        },
        {
            title: "기술스택",
            content: [
                "javascript",
                "scss, react, axios, swiper, fontawesome",
                "node.js, express, mariadb",
            ],
        },
        {
            title: "작업기여도",
            content: [
                "상품을 장바구니에 담는 기능을 구현했습니다.",
                "결제기능에 토스API를 연동했습니다.",
                "결제수단으로 카드결제와 계좌이체를 구현했습니다.",
                "고객이 마이페이지에서 주문취소할경우 토스결제내역과 테이블에서 결제취소 상태처리",
                "고객이 반품하는경우 관리자가 환불접수 처리 후 토스로 환불요청해서 상태 업데이트",
                "관리자 환불접수 백에서 응답으로 환불완료 처리/마이페이지에도 주문상태 업데이트",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "API에서 제공하지않는 데이터 전달 처리": [
                        "문제점 : 주문정보를 보내야하는데 정해진 키가 아니여서 고민 ",
                        "해결방법 : 가이드 meta-dat로 해결",
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
            title: "스크린샷 ",
            content: [
                {
                    id: 1,
                    src: "/sohee-portfolio/img/sub/perfume7.44.png",
                    alt: "프로젝트 작업화면",
                    comment: "메인화면",
                },
                {
                    id: 2,
                    src: "/sohee-portfolio/img/sub/perfume8.46.png",
                    alt: "프로젝트 작업화면",
                    comment: "센트파인더페이지",
                },
                {
                    id: 3,
                    src: "/sohee-portfolio/img/sub/perfume6.34.png",
                    alt: "프로젝트 작업화면",
                    comment: "매장정보",
                },
                {
                    id: 4,
                    src: "/sohee-portfolio/img/sub/perfume9.56.png",
                    alt: "프로젝트 작업화면",
                    comment: "결제화면",
                },
                {
                    id: 5,
                    src: "/sohee-portfolio/img/sub/perfume8.21.png",
                    alt: "프로젝트 작업화면",
                    comment: "배송조회",
                },
                {
                    id: 6,
                    src: "/sohee-portfolio/img/sub/perfume6.30.png",
                    alt: "프로젝트 작업화면",
                    comment: "관리자",
                },
            ],
        },
    ],
    //영화다이어라
    [
        {
            id: 4,
            title: "개요",
            content: "다이어리 서비스를 만들었습니다.",
        },
        {
            title: "배포링크",
            content: [
                "사이트 : https://www.",
                "깃허브 : https://www.",
                "벨로그 : https://www.",
            ],
        },
        {
            title: "주요기능",
            content: [
                "영화검색",
                "다이어리 CRUD",
                "캘린더 출력",
                "로그인기능",
                "관리자페이지 - 대시보드, 고객관리, 객식관리, 게시판관리, 매출현황",
                "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
            ],
        },
        {
            title: "기술스택",
            content: ["typescript", "scss, react", "node.js"],
        },
        {
            title: "작업기여도",
            content: [
                "API를 연동하여 영화검색 기능을 구현했습니다.",
                "API를 연동하여 영화검색 기능을 구현했습니다.",
                "API를 연동하여 영화검색 기능을 구현했습니다.",
                "API를 연동하여 영화검색 기능을 구현했습니다.",
                "API를 연동하여 영화검색 기능을 구현했습니다.",
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
            title: "스크린샷 ",
            content: [
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
                    comment: "로그인페이지",
                },
                {
                    id: 3,
                    src: "/sohee-portfolio/img/sub/hotel.50.19.png",
                    alt: "프로젝트 작업화면",
                    comment: "마이페이지",
                },
                {
                    id: 4,
                    src: "/sohee-portfolio/img/sub/hotel.54.04.png",
                    alt: "프로젝트 작업화면",
                    comment: "다이어리 작성화면",
                },
                {
                    id: 5,
                    src: "/sohee-portfolio/img/sub/hotel.54.57.png",
                    alt: "프로젝트 작업화면",
                    comment: "게시판",
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
];
