import { useState } from "react";

import Menu from "./Menu";
import EventCard from "./EventCard";

import testFront from "../Assets/EventCards/EventCardFront-Test.png";
import testBack from "../Assets/EventCards/EventCardBack-Test.png";
import nextButton from "../Assets/Icons/NextButton.png";
import prevButton from "../Assets/Icons/PrevButton.png";


import "../Styles/MobileEvents.css";

const colors = ["blue", "red", "green", "violet"];

function MobileEvents() {
    const [eventIndex, setEventIndex] = useState(0);

    const increment = () => {
        setEventIndex(eventIndex + 1);
    }
    const decrement = () => {
        setEventIndex(eventIndex - 1);
    }

    return (
        <div className="MobileEventsPage">
            <div className="MobileEventsHeaderRow">
                <Menu isMobile={true}/>
            </div>
            { eventIndex < colors.length + 1 && 
                <div className="MobileEventContainer">
                    <EventCard front={testFront} back={testBack}/>
                    <div className="MobileEventsButtonRow">
                        { eventIndex > 0 && 
                            <button className="ShuffleEventButton" onClick={decrement}>
                                <img className="ShuffleEventButtonImg" src={prevButton}/>
                            </button>
                        }
                        { eventIndex < colors.length && 
                            <button className="ShuffleEventButton" onClick={increment}>
                                <img className="ShuffleEventButtonImg" src={nextButton}/>
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default MobileEvents;