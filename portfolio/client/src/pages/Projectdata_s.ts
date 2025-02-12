export interface floatingtype {
    name: string;
    url: string;
    icon: string;
    title: string;
}
export interface viewtype {
    id: number;
    title: string;
    description: string;
    bg: string;
    img: string;
    people: string;
    date: string;
    num: string;
    logo: string;
    floatingLinks: floatingtype[];
}

export const projectview: viewtype[] = [
    {
        id: 1,
        title: "서울 신라호텔",
        description:
            "시맨틱 마크업, 사이트 이동 간소화, 예약 시스템 최적화, 반응형 디자인을 도입한 서울신라호텔 리뉴얼 프로젝트를 진행했습니다.",
        bg: "/sohee-portfolio/img/sub/projectbg1.svg",
        img: "/sohee-portfolio/img/sub/sillanew.svg",
        people: "Front-End Developer",
        date: "기간 : 24.11.26 ~ 24.12.24",
        num: "인원 : 5명",
        logo: "/sohee-portfolio/img/icon/silla.svg",
        floatingLinks: [
            {
                name: "GitHub",
                url: "https://github.com/ssso2/hotel_renewal",
                icon: "/sohee-portfolio/img/icon/github.svg",
                title: "깃허브로 이동",
            },
            {
                name: "Velog",
                url: "https://velog.io/@ssssso2/series/%ED%98%B8%ED%85%94-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
                icon: "/sohee-portfolio/img/icon/blogger.svg",
                title: "벨로그로 이동",
            },
            {
                name: "Link",
                url: "http://gagaclub.cafe24app.com/",
                icon: "/sohee-portfolio/img/icon/siteicon.svg",
                title: "사이트로 이동",
            },
        ],
    },
    {
        id: 2,
        title: "조말론 런던",
        description:
            "리뉴얼 프로젝트를 진행하며 간편로그인, 결제, 배송조회등 다양한 외부 API를 연동하여 사용자 편의성을 높였습니다.",
        bg: "/sohee-portfolio/img/sub/projectbg2.svg",
        img: "/sohee-portfolio/img/sub/projectframe2.svg",
        people: "Front-End Developer",
        date: "기간 : 25.01.02 ~ 25.01.15",
        num: "인원 : 4명",
        logo: "/sohee-portfolio/img/icon/perfume.svg",
        floatingLinks: [
            {
                name: "GitHub",
                url: "https://github.com/ssso2/perfume_renewal",
                icon: "/sohee-portfolio/img/icon/github.svg",
                title: "깃허브로 이동",
            },
            {
                name: "Velog",
                url: "https://velog.io/@ssssso2/series/%ED%96%A5%EC%88%98%EC%87%BC%ED%95%91%EB%AA%B0-%EB%A6%AC%EB%89%B4%EC%96%BC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
                icon: "/sohee-portfolio/img/icon/blogger.svg",
                title: "벨로그로 이동",
            },
            {
                name: "Link",
                url: "https://web-jomaloneclonefront-m5w8vc08a2903486.sel4.cloudtype.app/",
                icon: "/sohee-portfolio/img/icon/siteicon.svg",
                title: "사이트로 이동",
            },
        ],
    },
    {
        id: 3,
        title: "포트폴리오",
        description:
            "저의 경험과 프로젝트를 담아 React로 구현한 반응형 포트폴리오 사이트입니다.",
        bg: "/sohee-portfolio/img/sub/pbg.svg",
        img: "/sohee-portfolio/img/sub/pframe.svg",
        people: "Front-End Developer",
        date: "기간 : 25.01.13 ~ 25.02.05",
        num: "인원 : 1명",
        logo: "/sohee-portfolio/img/icon/portpolio.svg",
        floatingLinks: [
            {
                name: "GitHub",
                url: "https://github.com/ssso2/sohee-portfolio",
                icon: "/sohee-portfolio/img/icon/github.svg",
                title: "깃허브로 이동",
            },
            {
                name: "Velog",
                url: "https://velog.io/@ssssso2/series/%ED%8F%AC%ED%8A%B8%ED%8F%B4%EB%A6%AC%EC%98%A4",
                icon: "/sohee-portfolio/img/icon/blogger.svg",
                title: "벨로그로 이동",
            },
            // {
            //     name: "Link",
            //     url: "https://www.nate.com",
            //     icon: "/sohee-portfolio/img/icon/siteicon.svg",
            //     title: "사이트로 이동",
            // },
        ],
    },
    {
        id: 4,
        title: "씬-기록 (진행중)",
        description:
            "내가 감상한 영화와 드라마의 순간들을 기록하고 감정을 남기는 아카이빙 플랫폼입니다.",
        bg: "/sohee-portfolio/img/sub/diarybg.svg",
        img: "/sohee-portfolio/img/sub/diaryframe.svg",
        people: "Product Designer Front-End Developer ",
        date: "기간 : 25.02.01 ~ 진행중",
        num: "인원 : 2명",
        logo: "/sohee-portfolio/img/icon/diarylogo.svg",
        floatingLinks: [
            {
                name: "GitHub",
                url: "https://github.com/ssso2",
                icon: "/sohee-portfolio/img/icon/github.svg",
                title: "깃허브로 이동",
            },
            {
                name: "Velog",
                url: "https://velog.io/@ssssso2/series/%EB%8B%A4%EC%9D%B4%EC%96%B4%EB%A6%AC-%ED%94%84%EB%A1%9C%EC%A0%9D%ED%8A%B8",
                icon: "/sohee-portfolio/img/icon/blogger.svg",
                title: "벨로그로 이동",
            },
        ],
    },
];

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
            title: "주요기능",
            content: [
                "사용자 유형(회원, 비회원, 관리자)에 따라 2depth 접근처리",
                "스페셜오퍼 필터 검색 및 상품 예약",
                "객실예약 및 취소 시스템",
                "문의하기와 공지사항게시판 CRUD기능 지원",
                "카드와 리스트 개수에 따라 페이지네이션 처리",
                "관리자페이지 - 대시보드, 고객관리, 객실관리, 게시판관리, 매출현황",
                "다양한 디바이스와 브라우저에 최적화된 반응형 구현",
            ],
        },
        {
            title: "기술스택",
            content: ["Javascript, SCSS", "React", "Node.js, MariaDB"],
        },
        {
            title: "작업기여도",
            content: [
                "Date Range Picker, Select Box, Checkbox를 활용한 다중 검색 필터기능을 구현했습니다.",
                "다양한 디바이스 환경에 맞춘 반응형 이벤트 페이지를 구현했습니다.",
                "제목과 내용으로 공지사항과 문의글을 검색할 수 있는 공통 컴포넌트를 구현했습니다.",
                "사용자가 계정 정보를 쉽게 복구할 수 있도록 아이디/비밀번호 찾기 프로세스를 구현했습니다.",
                "관리자 공지사항관리 시스템(등록,수정,삭제)을 구축했습니다.",
                "게시판 글 등록시 파일 업로드 및 조회 기능을 추가했습니다.",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "스페셜 오퍼 필터링 기능에서 조건에 맞는 상품 미출력": [
                        "문제점 : 3가지 필터(기간조회, 유형구분, 키워드)가 변경될 때마다 상품이 올바르게 출력되어야하지만, 필터링이 정상적으로 동작하지 않는 오류가 있었습니다.",
                        "해결방법 : 백엔드 쿼리에서 WHERE 절을 동적 조건으로 적용하고, 반복적인 수정 과정을 거쳐 최적화했습니다.",
                    ],
                },
                {
                    "공지사항 상세페이지 빈 화면 오류": [
                        "문제점 : 공지사항 상세페이지를 클릭했을 때 데이터없이 빈 화면이 표시되는 오류가 발생했습니다.",
                        "해결방법 : axios 비동기 처리에서 타이밍 문제를 확인하고 수정해서 데이터를 정상적으로 로드되도록 개선했습니다.",
                    ],
                },
                {
                    "공지사항 상세페이지 이전글, 다음글 표시 불가": [
                        "문제점 : 공지사항 상세 페이지에서는 현재 글의 ID만 상태로 관리하고 있어, 이전글과 다음글을 불러올 수 없었습니다. 이를 해결하기 위해 전체 ID 목록을 불러오는 방식으로 상태 관리를 개선할 필요성을 느꼈습니다.",
                        "해결방법 : 기존 공지사항 데이터를 Redux로 전역 상태 관리하도록 변경했습니다. 그 결과, 여러 컴포넌트에서 일관된 상태 유지가 가능해졌고 원하는 내비게이션 기능을 구현할 수 있었습니다.",
                    ],
                },
            ],
        },
        {
            title: "스크린샷 ",
            content: [
                {
                    id: 1,
                    src: "/sohee-portfolio/img/sub/sillanew.svg",
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

    //조말론
    [
        {
            id: 2,
            title: "개요",
            content:
                "기존 조말론 사이트는 지도 정보 오류, 잦은 서버 다운으로 인한 사이트 안정성 문제, 리뷰 필터링 부재등 다양한 개선이 필요했습니다. 고객 편의성과 신뢰도 향상을 위해 웹사이트 리뉴얼을 진행했으며, 다양한 외부 API를 연동하여 사용자 경험을 개선했습니다.",
        },
        {
            title: "주요기능",
            content: [
                "회원가입 및 카카오 간편로그인",
                "카테고리 & 검색어를 통해 상품검색",
                "센트파인더로 나에게 어울리는 향수찾기 및 공유",
                "옵션별 구매 및 장바구니, 결제, 주문취소, 배송조회",
                "매장안내지도",
                "1:1 문의 답변 이메일 전송",
                "관리자페이지 - 대시보드, 회원관리, 주문관리, 제품관리, 게시판관리, 매출분석",
                "다양한 브라우저 환경에서 최적화된 반응형 사이트 제공",
            ],
        },
        {
            title: "기술스택",
            content: ["Javascript, SCSS", "React", "Node.js, MariaDB"],
        },
        {
            title: "작업기여도",
            content: [
                "토스결제시스템을 연동하여 장바구니에서 결제 기능을 완성했습니다.",
                "카드결제와 계좌이체 결제방식을 도입했습니다.",
                "주문 취소 및 환불 프로세스를 구현했습니다.",
                "관리자 페이지에서 주문/환불 상태를 실시간으로 관리할 수 있도록 구현했습니다.",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "API에서 제공하지않는 데이터 전달 처리": [
                        "문제점 : 사이트 내 주문정보를 전송할 때 api에 정해진 키값이 없어서 데이터 전달에 어려움이 있었습니다.",
                        "해결방법 : meta-data를 활용하여 필요한 데이터를 전달하도록 구현했습니다.",
                    ],
                },
                {
                    "주문번호 이중 관리 시스템 구현": [
                        "문제점 : 토스 결제시스템이 생성하는 랜덤 주문번호와 별개로 사이트 내 순차적인 주문번호가 필요했습니다.",
                        "해결방법 : 결제 시점에 마지막 주문번호를 확인해서 newOrderId를 생성하고 DB에 저장하도록 구현했습니다.",
                    ],
                },
                {
                    "관리자 페이지 주문정보 undefined 오류": [
                        "문제점 : 관리자 페이지에서 order_id가 undefined로 표시되는 오류가 발생했습니다.",
                        "해결방법 : 주문 데이터 유무를 확인하는 조건문을 추가하여 데이터가 정상적으로 표시되도록 수정했습니다.",
                    ],
                },
                {
                    "환불 상태 업데이트 로직 충돌": [
                        "문제점 : 환불 접수 후 상태 변경이 정상적으로 처리되지 않았습니다.",
                        "해결방법 : 프론트엔드의 중복 요청을 제거하고, 백엔드에서 환불처리 완료 후 상태가 자동으로 업데이트되는 방식으로 변경했습니다.",
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
                    src: "/sohee-portfolio/img/sub/perfume8.461.png",
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
    //포트폴리오
    [
        {
            id: 3,
            title: "개요",
            content:
                "팀 프로젝트 경험을 토대로 전반적인 웹 개발 역량을 강화하고자 포트폴리오를 제작했습니다. React와 여러 라이브러리를 활용하고, 반응형 웹 구현으로 다양한 환경에서 접근성을 높였습니다. 피드백을 반영해서 지속적으로 개선하고 발전시켜 나갈 예정입니다.",
        },
        {
            title: "주요기능",
            content: [
                "Intro, Main, About, Experience, Project, Review로 섹션 구성",
                "헤더 GNB와 Contact 플로팅 버튼 구현",
                "스크롤 위치에 따른 페이지 진행도 표시",
                "프로젝트 상세 정보 모달 팝업",
                "사이트 개선을 위한 피드백 설문 시스템 연동",
                "다양한 디바이스와 브라우저에 최적화된 반응형 구현",
            ],
        },
        {
            title: "기술스택",
            content: ["Typescript, SCSS", "React"],
        },
        {
            title: "작업기여도",
            content: [
                "기획 / 디자인 / 개발 전반을 담당했습니다.",
                "헤더 GNB의 앵커 태그를 활용해 섹션 간 이동을 구현했습니다.",
                "현재 페이지 위치를 직관적으로 파악하도록 스크롤 진행도를 구현했습니다.",
                "contact 플로팅 버튼으로 접근성을 높였습니다.",
                "프로젝트 상세 내용을 모달 팝업으로 구현하여 정보 가독성을 높였습니다.",
                "애니메이션과 스와이퍼로 역동적인 ui를 구현했습니다.",
                "반응형 웹 디자인으로 다양한 디바이스 환경에 대응했습니다.",
            ],
        },
        {
            title: "트러블슈팅",
            content: [
                {
                    "타입스크립트 타입 오류": [
                        "문제점 : 컴포넌트의 props 전달, 상태 관리, 이벤트 핸들러 등 다양한 상황에서 타입 오류가 발생했습니다.",
                        "해결방법 : 데이터 구조에 맞는 인터페이스를 정의하고 유니온 타입을 활용하여 타입 안정성을 확보했습니다.",
                    ],
                },
                {
                    "프로젝트 데이터구조화 문제": [
                        "문제점 : 단일 데이터 기준으로 설계한 구조가 다중 데이터 처리 시 적합하지 않았습니다.",
                        "해결방법 : 배열 기반의 데이터 구조로 재설계해서 다중 데이터를 효율적으로 처리할 수 있도록 개선했습니다.",
                    ],
                },
                {
                    "스크롤 기반 애니메이션 구현": [
                        "문제점 : 스크롤이 특정 섹션에 왔을 때 애니메이션 처리방법 고민했습니다.",
                        "해결방법 : Intersection Observer API를 활용하여 섹션 진입 시점을 확인 후 애니메이션을 처리했습니다. 페이지 전환시 매끄럽지 못한 부분 발생하여 AOS라이브러리를 활용하여 재수정하였습니다.",
                    ],
                },
            ],
        },
        {
            title: "스크린샷 ",
            content: [
                {
                    id: 1,
                    src: "/sohee-portfolio/img/sub/pp1.png",
                    alt: "프로젝트 작업화면",
                    comment: "메인화면",
                },
                {
                    id: 2,
                    src: "/sohee-portfolio/img/sub/pp2.png",
                    alt: "프로젝트 작업화면",
                    comment: "소개페이지",
                },
                {
                    id: 3,
                    src: "/sohee-portfolio/img/sub/pp3.png",
                    alt: "프로젝트 작업화면",
                    comment: "학력,경력페이지",
                },
                {
                    id: 4,
                    src: "/sohee-portfolio/img/sub/pp4.png",
                    alt: "프로젝트 작업화면",
                    comment: "프로젝트리스트",
                },
                {
                    id: 5,
                    src: "/sohee-portfolio/img/sub/pp5.png",
                    alt: "프로젝트 작업화면",
                    comment: "프로젝트상세",
                },
                {
                    id: 6,
                    src: "/sohee-portfolio/img/sub/pp6.png",
                    alt: "프로젝트 작업화면",
                    comment: "리뷰페이지",
                },
            ],
        },
    ],
    //영화다이어리
    [
        {
            id: 4,
            title: "개요",
            content:
                "영화와 드라마를 사랑하지만 시간이 지나면 기억이 흐려지는 경험에서 출발해, 기억에 남는 장면과 감상평, 감정을 체계적으로 기록할 수 있도록 아이디어를 구체화하고 기능을 설계했습니다. API 연동을 통해 영화 및 드라마 정보를 제공하며 사용자가 저장한 내용을 바탕으로 개인화된 통계를 생성해 자신의 감상 패턴을 확인할 수 있도록 구성하고있습니다. 또한, 비슷한 취향을 가진 사용자들과 감상을 공유할 수 있는 커뮤니티 기능도 고려하고 있습니다.",
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
                    내용: ["문제점 : 있었습니다. ", "해결방법 : 해결했습니다."],
                },
                {
                    내용: ["문제점 : 있었습니다. ", "해결방법 : 해결했습니다."],
                },
                {
                    내용: ["문제점 : 있었습니다. ", "해결방법 : 해결했습니다."],
                },
                {
                    내용: ["문제점 : 있었습니다. ", "해결방법 : 해결했습니다."],
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
