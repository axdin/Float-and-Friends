import { useState, useEffect } from "react";

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";

import "../Styles/Friend.css";

function Friend({ name, pos, dialogue }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [idle, setIdle] = useState({});
    const [speaking, setSpeaking] = useState(false);

    useEffect(() => {
        switch(name) {
            case "Star":
                setIdle(Star);
                break;
            case "Halo":
                setIdle(Halo);
                break;
            default:
                break;
        }

        setX(pos[0]);
        setY(pos[1]);

    }, [])

    const speak = () => {
        setSpeaking(true);
    }
    const dontSpeak = () => {
        console.log("left");
        setSpeaking(false);
    }

    return (
        <div className="CharacterContainer" 
            style={{transform: `translate(${x}px, ${y}px)`}}>
            <img src={idle} className="CharacterIdle"
                onMouseEnter={speak}
                onMouseLeave={dontSpeak}/>
            {speaking ? 
                <div className="DialogueContainer">
                    <h2>{dialogue}</h2>
                </div>
                :
                <div>

                </div>
            }
        </div>
    );
}

export default Friend;