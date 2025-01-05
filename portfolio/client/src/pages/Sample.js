import React from "react";
import "../styles/common.scss";
import Scrollbar from "../component/Scrollbar";

const Sample = () => {
    return (
        <>
            <Scrollbar />
            <div className="center">
                <div className="scrollheight">
                    <img
                        className="gif"
                        src="/sohee-portfolio/img/sub/IMG_3194.GIF"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
};

export default Sample;
