import { useState, useEffect } from "react";

import star from "../Assets/Friends/Star-Still.png";

import "../Styles/MobileAbout.css";

function MobileAbout() {
    const [aboutIndex, setAboutIndex] = useState(0);

    const increment = () => {
        setAboutIndex(aboutIndex + 1);
    }

    return (
        <div className="MobileAboutContainer">
            <div className="MobileAboutTextRow">

            </div>
            <div className="MobileAboutFriendRow">
                <img className="MobileAboutFriendImg" src={star}/>
                <button className="NextAboutButton" onClick={increment}>
                    Next
                </button>
            </div>
        </div>
    );
}

export default MobileAbout;