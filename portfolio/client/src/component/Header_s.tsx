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
        {
            name: "Feedback",
            section: null,
            link: "https://docs.google.com/forms/d/e/1FAIpQLSd9dvY8ZfOx2NNNkXmVFnfYbB6apGYqQKQcDi6WwRlK1u27vQ/viewform?usp=sharing",
        },
    ];
    const navigate = (section?: string) => {
        if (!section) return;
        const id = document.getElementById(section);
        if (id) {
            id.scrollIntoView({ behavior: "smooth" });
        }
    };
    const [hideheader, sethideheader] = useState(false);
    const [gagefill, setgagefill] = useState(0);
    let lastscrollY = 0;

    const scrollE = () => {
        const scrollTop = window.scrollY;
        console.log("헤더스크롤", scrollTop, "마지막스크롤", lastscrollY);
        if (scrollTop > lastscrollY && scrollTop > 0) {
            sethideheader(true);
        } else {
            sethideheader(false);
        }
        lastscrollY = scrollTop;
        const scrollHeight =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollpercent = (scrollTop / scrollHeight) * 100;
        setgagefill(scrollpercent);
    };
    useEffect(() => {
        window.addEventListener("scroll", scrollE);
        return () => {
            window.removeEventListener("scroll", scrollE);
        };
    }, []);

    return (
        <>
            <header className={`header ${hideheader ? "hidden" : ""}`}>
                <div className="logo">
                    <img
                        className="img"
                        src="/sohee-portfolio/img/icon/plogo.svg"
                        alt="Profile"
                    />
                </div>
                <ul className="nav">
                    {menus.map((item, index) => (
                        <li key={index} className="navli">
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
                    <li className="navli">
                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLSd9dvY8ZfOx2NNNkXmVFnfYbB6apGYqQKQcDi6WwRlK1u27vQ/viewform?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="linkto"
                            // title="설문지로 이동"
                        >
                            Feedback
                        </Link>
                    </li>
                </ul>
            </header>
        </>
    );
};

export default Header_s;
