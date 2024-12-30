import React from "react";
import "../styles/main.scss";

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <img src="/sohee-portfolio/img/sub/profile.png" alt="Profile" />
            </div>
            <ul className="nav">
                <li className="nav-li">About</li>
                <li className="nav-li">Experience</li>
                <li className="nav-li">Project</li>
                <li className="nav-li">Feedback</li>
            </ul>
        </header>
    );
};

export default Header;
