// import { Link } from "react-router-dom";
import styles from "../styles/common.module.css";
import { useEffect, useState } from "react";
import Scroll from "./Scroll";

const Header = (): JSX.Element => {
    const menus = [
        { name: "About", section: "about" },
        { name: "Experience", path: "#experience" },
        { name: "Project", path: "#project" },
        { name: "Feedback", path: "#feedback" },
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
                                className={styles.link}
                                onClick={() => navigate(item.section)}
                            >
                                {item.name}
                            </button>

                            {/* <Link className={styles.link} to={item.path}>
                                {item.name}
                            </Link> */}
                        </li>
                    ))}
                </ul>
            </header>
            {/* <Scroll gagefill={gagefill} /> */}
        </>
    );
};

export default Header;
