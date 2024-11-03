import { useState, useEffect } from "react";

import FriendInteraction from "./FriendInteraction";
import FriendGreeting from "./FriendGreeting";

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";

import "../Styles/Friend.css";

const starInteractions = ["We are FLOAT AND FRIENDS, a virtual third space connecting you to your next artistic internet best friend.", 
    "Our mission is to create a welcoming virtual third-space for anyone with an idea. Our goal is to foster community, provide resources, and support your ideas from start to finish.",
    "Through workshops, socials, and structured programs, our focus is on artmaking as a communal practice. In a world continuously pushing us to monetize our art, and squishing that art into “content,” FLOAT AND FRIENDS aims to remind us that art can be done for art’s sake, and creativity is in our very human nature. At the same time, we provide workshops, guides, speaker nights, portfolio building opportunities, and other resources to help reveal often hidden steps for those who are interested in a creative career."
]
const bearInteractions = ["*Snoreee*", "*Snoooore Snoore Snoore*", "*SNOOOOORE snoore SNOORE SNORE*"];
const haloInteractions = ["Hello! I'm just admiring the wonderful messages left here on this lamp post. Seems like no matter who or where or when you are, you can leave something here and be certain that the person you've left it for will find it!",
    "Would you like to leave a message?"
];

function Friend({ name, pos, dialogue }) {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    const [idle, setIdle] = useState({});
    const [speaking, setSpeaking] = useState(false);
    const [interacting, setInteracting] = useState(false);
    const [interactions, setInteractions] = useState("");

    useEffect(() => {
        switch(name) {
            case "Star":
                setIdle(Star);
                setInteractions(starInteractions);
                break;
            case "Halo":
                setIdle(Halo);
                setInteractions(haloInteractions);
                break;
            case "Bear":
                setIdle(Bear);
                setInteractions(bearInteractions);
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

    const startInteraction = () => {
        setInteracting(true);
    }
    const endInteraction = () => {
        setInteracting(false);
    }

    return (
        <div className="CharacterContainer">
            <img src={idle} className="CharacterIdle"
                onMouseEnter={speak}
                onMouseLeave={dontSpeak}
                onClick={startInteraction}
                style={{transform: `translate(${x}px, ${y}px)`}}/>
            {speaking && 
                <div className="DialogueContainer" style={{transform: `translate(${x + 150}px, ${y - 50}px)`}}>
                    <FriendGreeting greeting={dialogue}/>
                </div>
            }
            {interacting &&
                <div className="InteractionContainer">
                    <FriendInteraction name={name} contents={interactions} end={endInteraction}/>
                </div>
            }
        </div>
    );
}

export default Friend;