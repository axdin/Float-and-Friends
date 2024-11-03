import { useNavigate } from "react-router-dom";

import computer from "../Assets/Objects/Computer.png";
import mobile from "../Assets/Objects/Mobile.png";

import "../Styles/Landing.css";

function Landing() {
    const navigate = useNavigate();

    const enter = (isMobile) => {
        if (!isMobile) navigate("/Hub");
    }

    return (
        <div className="OptionContainer">
            <button onClick={(() => enter(false))} className="OptionButton">
                <img src={computer} className="OptionIcon"/>
            </button>
            <button onClick={(() => enter(false))} className="OptionButton">
                <img src={mobile} className="OptionIcon"/>
            </button>
        </div>
    )
}

export default Landing;