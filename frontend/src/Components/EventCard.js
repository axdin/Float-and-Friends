import { useState, useEffect } from "react";

import flipButton from "../Assets/Icons/FlipButton.png";

import "../Styles/EventCard.css";

function EventCard({ front, back }) {
    const [isFront, setIsFront] = useState(true);

    const flip = () => {
        setIsFront(!isFront);
    }

    return (
        <div className="EventCardContainer">
            { isFront ? 
                <img className="EventCardImg" src={front}/> : <img className="EventCardImg" src={back}/>
            }
            <button className="FlipCardButton" onClick={flip}>
                <img className="FlipCardImg" src={flipButton}/>
            </button>
        </div>
    );
}

export default EventCard;