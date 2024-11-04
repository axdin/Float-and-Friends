import { useState } from "react";
import { useNavigate } from "react-router-dom";

import computer from "../Assets/Objects/Computer.png";
import mobile from "../Assets/Objects/Mobile.png";
import computerGif from "../Assets/Objects/Computer.gif";
import mobileGif from "../Assets/Objects/Mobile.gif";

import "../Styles/Landing.css";

function Landing() {
    const [isHoveringComputer, setIsHoveringComputer] = useState(false);
    const [isHoveringMobile, setIsHoveringMobile] = useState(false);

    const navigate = useNavigate();

    const enter = (isMobile) => {
        if (!isMobile) navigate("/Hub"); 
        else navigate("/Mobile/Hub");
    }

    return (
        <div className="OptionContainer">
            <button onClick={(() => enter(false))}
                onMouseEnter={() => setIsHoveringComputer(true)}
                onMouseLeave={() => setIsHoveringComputer(false)}
            className="OptionButton">
                { isHoveringComputer ? 
                    <img src={computerGif} className="OptionIcon"/> :
                    <img src={computer} className="OptionIcon"/>
                }
                <h1>Computer</h1>
            </button>
            <button onClick={(() => enter(true))}
                onMouseEnter={() => setIsHoveringMobile(true)}
                onMouseLeave={() => setIsHoveringMobile(false)}
                className="OptionButton">                
                { isHoveringMobile ? 
                    <img src={mobileGif} className="OptionIcon"/> :
                    <img src={mobile} className="OptionIcon"/>
                }
                <h1>Mobile</h1>
            </button>
        </div>
    )
}

export default Landing;