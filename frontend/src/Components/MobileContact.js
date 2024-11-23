import { useState } from "react";

import chiffon from "../Assets/Friends/Chiffon_Still.png";

import "../Styles/MobileContact.css";

const intro = "Reach out to Float and Friends to provide feedback or just say hi! I'll deliver the message in no time! And don't forget to follow their socials while you're here.";

function MobileContact() {
    const [isInputing, setIsInputing] = useState(false);

    const switchMode = () => {
        setIsInputing(!isInputing);
    }

    return (
        <div className="MobileContactContainer">
            <div className="MobileContactTextRow">
                { !isInputing ? 
                    <div className="MobileContactText">
                        {intro}
                    </div> :
                    <div className="MobileContactMessageContainer">

                    </div>
                }
            </div>
            <div className="MobileContactFriendRow">
                <img className="MobileContactFriendImg" src={chiffon}/>
                <button className="SwitchContactButton" onClick={switchMode}>
                    Begin message
                </button>
            </div>
        </div>
    );
}

export default MobileContact;