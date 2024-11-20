import { useState, useEffect } from "react";

import "../Styles/EventCard.css";

function EventCard({ color }) {
    const [isFront, setIsFront] = useState(true);

    return (
        <div className="EventCardContainer" style={{backgroundColor: color}}>
            
            
        </div>
    );
}

export default EventCard;