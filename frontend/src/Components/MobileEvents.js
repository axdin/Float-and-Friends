import { useState, useEffect } from "react";

import EventCard from "./EventCard";

import "../Styles/MobileEvents.css";

const colors = ["blue", "red", "green", "violet"];

function MobileEvents() {
    const [eventIndex, setEventIndex] = useState(0);

    const advanceEvent = () => {
        setEventIndex(eventIndex + 1);
    }

    return (
        <div className="MobileEventsPage">
            { eventIndex < colors.length ? 
                <div className="MobileEventContainer">
                    <EventCard color={colors[eventIndex]}/>
                    <button className="NextEventButton" onClick={advanceEvent}>
                        Next
                    </button>

                </div>
                :
                <div>
                </div>
            }
            
        </div>
    );
}

export default MobileEvents;