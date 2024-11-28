import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Menu from "./Menu"

import star from "../Assets/Friends/Star-Still.png";
import intro from "../Assets/Backgrounds/MobileAboutIntro.gif";

import "../Styles/MobileAbout.css";

const texts = [
    "",
    "We exist as a virtual (and sometimes physical) third space for people who want to create things - any things!",
    "Through workshops, socials, and structured programs, our focus is on artmaking as a communal practice",
    "Check out our events page to see what cool stuff we have coming up!"
];

function MobileAbout() {
    const [aboutIndex, setAboutIndex] = useState(0);
    const navigate = useNavigate();

    const increment = () => {
        setAboutIndex(aboutIndex + 1);
    }

    const restart = () => {
        setAboutIndex(0);
    }

    const goHome = () => {
        navigate("/Mobile/Hub")
    }

    return (
        <div className="MobileAboutContainer">
            <div className="MobileAboutHeaderRow">
                <Menu isMobile={true}/>
            </div>
            <div className="MobileAboutTextRow">
                { aboutIndex < texts.length && (
                    aboutIndex === 0 ? 
                        <img className="MobileAboutTextImg" src={intro}/> :
                        <div className="MobileAboutText">
                            {texts[aboutIndex]}
                        </div>
                )}
            </div>
            <div className="MobileAboutFriendRow">
                <img className="MobileAboutFriendImg" src={star}/>
                { aboutIndex < texts.length - 1 ? 
                    <button className="NextAboutButton" onClick={increment}>
                        Next
                    </button> :
                    <div>
                        <button className="RestartAboutButton" onClick={restart}>
                            Start Over
                        </button>
                        <button className="GoHomeAboutButton" onClick={goHome}>
                            Return to Hub
                        </button>
                    </div>
                }
            </div>
        </div>
    );
}

export default MobileAbout;