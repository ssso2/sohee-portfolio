import { Link } from "react-router-dom";
import "../styles/common.scss";
import "../styles/intro.scss";
import { useEffect, useState } from "react";

const Header_s = (): JSX.Element => {
    type menutype = {
        name: string;
        section: string | null;
        link?: string;
    };
    const menus: menutype[] = [
        { name: "About", section: "about" },
        { name: "Experience", section: "experience" },
        { name: "Project", section: "project" },
        { name: "Review", section: "review" },
        // {
        //     name: "Feedback",
        //     section: null,
        //     link: "https://docs.google.com/forms/d/e/1FAIpQLSd9dvY8ZfOx2NNNkXmVFnfYbB6apGYqQKQcDi6WwRlK1u27vQ/viewform?usp=sharing",
        // },
    ];
    const navigate = (section?: string) => {
        if (!section) return;
        const id = document.getElementById(section);
        if (id) {
            id.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [hideheader, sethideheader] = useState(false);
    const [headerbg, setheaderbg] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false); // 햄버거 메뉴 상태
    let lastscrollY = 0;

    const scrollE = () => {
        const scrollTop = window.scrollY;
        console.log("헤더스크롤", scrollTop, "마지막스크롤", lastscrollY);
        if (scrollTop > lastscrollY && scrollTop > 0) {
            sethideheader(true);
        } else {
            sethideheader(false);
        }
        if (scrollTop > 80) {
            setheaderbg(true);
        } else {
            setheaderbg(false);
        }
        lastscrollY = scrollTop;
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollE);
        return () => {
            window.removeEventListener("scroll", scrollE);
        };
    }, []);

    return (
        <>
            <header
                className={`header white ${hideheader ? "hidden" : ""} ${
                    headerbg ? "headerbgc" : ""
                }`}
            >
                <div className="logo">
                    <img
                        className="img"
                        src="/sohee-portfolio/img/icon/plogo.svg"
                        alt="Profile"
                    />
                </div>
                {/* 햄버거 버튼 */}
                <button
                    className={`hamburger ${menuOpen ? "open" : ""}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* 네비게이션 메뉴 */}
                <nav className={`nav ${menuOpen ? "active" : ""}`}>
                    <ul className="navul">
                        {menus.map((item, index) => (
                            <li
                                key={index}
                                className="navli subtitle1"
                                onClick={() => setMenuOpen(false)}
                            >
                                <button
                                    className={"link txt" ? "link" : ""}
                                    onClick={() => {
                                        if (item.link) {
                                            window.open(item.link, "_blank");
                                        } else if (item.section) {
                                            navigate(item.section);
                                        }
                                    }}
                                    title={item.link ? "설문지로 이동" : ""}
                                >
                                    {item.name}
                                </button>

                                {/* <Link className={styles.link} to={item.path}>
                                {item.name}
                            </Link> */}
                            </li>
                        ))}
                        <li className="navli subtitle1">
                            <Link
                                to="#"
                                // "https://docs.google.com/forms/d/e/1FAIpQLSd9dvY8ZfOx2NNNkXmVFnfYbB6apGYqQKQcDi6WwRlK1u27vQ/viewform?usp=sharing"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="linkto"
                                // title="설문지로 이동"
                            >
                                Feedback
                            </Link>
                            <img
                                src="/sohee-portfolio/img/icon/Vector.svg"
                                alt=""
                            />
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header_s;
