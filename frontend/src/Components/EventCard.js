import { useState, useEffect } from "react";

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
            <button className="FlipCardButton" onClick={flip}>Flip</button>
        </div>
    );
}

export default EventCard;