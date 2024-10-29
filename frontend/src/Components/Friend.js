import { useState, useEffect } from "react";

import FriendInteraction from "./FriendInteraction";

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";

import "../Styles/Friend.css";

function Friend({ name, pos, dialogue }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [idle, setIdle] = useState({});
    const [speaking, setSpeaking] = useState(false);
    const [interacting, setInteracting] = useState(false);

    useEffect(() => {
        switch(name) {
            case "Star":
                setIdle(Star);
                break;
            case "Halo":
                setIdle(Halo);
                break;
            case "Bear":
                setIdle(Bear);
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
        setSpeaking(false);
    }

    const handleClick = () => {
        setInteracting(true);
    }

    return (
        <div className="CharacterContainer" 
            style={{transform: `translate(${x}px, ${y}px)`}}>
            <img src={idle} className="CharacterIdle"
                onMouseEnter={speak}
                onMouseLeave={dontSpeak}
                onClick={handleClick}/>
            {speaking && 
                <div className="DialogueContainer">
                    <h2>{dialogue}</h2>
                </div>
            }
            {interacting &&
                <div className="InteractionContainer">
                    <FriendInteraction name={name}/>
                </div>
            }
        </div>
    );
}

export default Friend;