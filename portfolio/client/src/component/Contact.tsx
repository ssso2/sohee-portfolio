import { useState } from "react";
import Conpop from "../pages/Conpop";
import "../styles/common.scss";
import "../styles/contact.scss";

const Contact: React.FC = () => {
    const [popup, setpopup] = useState<boolean>(false);
    const popClick = () => {
        setpopup(!popup);
    };
    return (
        <div className="contactwrapper" onClick={popClick}>
            <div className="contactwrap">
                <div className="round"> </div>
                <div className="contact black1">Contact</div>
            </div>
            {popup && <Conpop onclose={() => setpopup(false)} />}
        </div>
    );
};

export default Contact;
