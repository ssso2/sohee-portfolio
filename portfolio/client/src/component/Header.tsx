import { Link } from "react-router-dom";
import styles from "../styles/common.module.css";

const Header = (): JSX.Element => {
    const menus = [
        { name: "About", path: "about" },
        { name: "Experience", path: "experience" },
        { name: "Project", path: "project" },
        { name: "Feedback", path: "feedback" },
    ];
    return (
        <header className={styles.header}>
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
                        <Link className={styles.link} to={item.path}>
                            {item.name}
                        </Link>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Header;
