import { useState } from "react";
import "../styles/common.scss";
interface imgtype {
    popshow: boolean;
    imgclose: () => void;
}

const Imgpop: React.FC<imgtype> = ({ popshow, imgclose }) => {
    if (!popshow) return null;
    return (
        <div>
            {popshow && (
                <div className="imgpopup" onClick={imgclose}>
                    <div
                        className="popupcon"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src="/sohee-portfolio/img/sub/hotel.49.25.png"
                            alt="확대화면"
                            className="popupimage"
                        />
                        <button className="closebutton" onClick={imgclose}>
                            <img
                                src="/sohee-portfolio/img/icon/closeb.svg"
                                alt="닫기"
                            />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Imgpop;
