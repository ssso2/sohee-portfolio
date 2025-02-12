import { useState } from "react";
import "../styles/common.scss";
interface imgtype {
    current: string | null;
    imgclose: () => void;
}

const Imgpop: React.FC<imgtype> = ({ current, imgclose }) => {
    if (!current) return null;
    return (
        <div>
            {current && (
                <div className="imgpopup" onClick={imgclose}>
                    <div
                        className="popupcon"
                        // onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={current}
                            alt="확대화면"
                            className="popupimage"
                            onClick={e => e.stopPropagation()}
                        />
                        {/* <button
                            className="closebutton"
                            onClick={e => imgclose(e)}
                        >
                            <img
                                src="/sohee-portfolio/img/icon/closeb.svg"
                                alt="닫기"
                            />
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Imgpop;
