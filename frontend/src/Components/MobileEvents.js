import { useState, useEffect } from "react";

import EventCard from "./EventCard";

import testFront from "../Assets/EventCards/EventCardFront-Test.png";
import testBack from "../Assets/EventCards/EventCardBack-Test.png";

import "../Styles/MobileEvents.css";

const colors = ["blue", "red", "green", "violet"];

function MobileEvents() {
    const [eventIndex, setEventIndex] = useState(0);

    const increment = () => {
        setEventIndex(eventIndex + 1);
    }

    return (
        <div className="MobileEventsPage">
            { eventIndex < colors.length ? 
                <div className="MobileEventContainer">
                    <EventCard front={testFront} back={testBack}/>
                    <button className="NextEventButton" onClick={increment}>
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