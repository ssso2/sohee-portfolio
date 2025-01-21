import { useState } from "react";
import Conpop from "../pages/Conpop";
import "../styles/common.scss";
import "../styles/contact.scss";

const Contact: React.FC = () => {
    const [popup, setpopup] = useState<boolean>(false);
    const [popclose, setpopclose] = useState<boolean>(false);
    const clickbtn = () => {
        if (popup) {
            setpopclose(true);
            setTimeout(() => {
                setpopup(false);
                setpopclose(false);
            }, 500);
        } else {
            setpopup(true);
        }
    };

    return (
        <div className="contactwrapper" onClick={clickbtn}>
            <div className="contactwrap">
                <div className="round"> </div>
                <div className="contact black1">Contact</div>
            </div>
            {popup && <Conpop popclose={popclose} onclose={clickbtn} />}
        </div>
    );
};

export default Contact;
