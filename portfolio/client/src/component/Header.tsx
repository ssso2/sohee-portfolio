import { Link } from "react-router-dom";
import styles from "../styles/common.module.css";
import { useEffect, useState } from "react";
import Scroll from "./Scroll";
import classNames from "classnames";

const Header = (): JSX.Element => {
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
            <header
                className={`${styles.header} ${
                    hideheader ? styles.hidden : ""
                }`}
            >
                <div className={styles.logo}>
                    <img
                        className={styles.img}
                        src="/sohee-portfolio/img/sub/profile.png"
                        alt="Profile"
                    />
                </div>
                <ul className={styles.nav}>
                    {menus.map((item, index) => (
                        <li key={index} className={styles.navli}>
                            <button
                                className={classNames(styles.link, {
                                    txt: item.link,
                                })}
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
                    <li className={styles.navli}>
                        <Link
                            to="https://docs.google.com/forms/d/e/1FAIpQLSd9dvY8ZfOx2NNNkXmVFnfYbB6apGYqQKQcDi6WwRlK1u27vQ/viewform?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.linkto}
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

export default Header;
