import { useState, useEffect } from "react";

import Menu from "./Menu";
import EventCard from "./EventCard";

import testFront from "../Assets/EventCards/EventCardFront-Test.png";
import testBack from "../Assets/EventCards/EventCardBack-Test.png";
import wfFront from "../Assets/EventCards/PostCardFront-WF.png";
import wfBack from "../Assets/EventCards/PostCardBack-WF.png";

import nextButton from "../Assets/Icons/NextButton.png";
import prevButton from "../Assets/Icons/PrevButton.png";


import "../Styles/MobileEvents.css";

function MobileEvents() {
    const [eventIndex, setEventIndex] = useState(0);
    const [events, setEvents] = useState([]);

    useEffect(() => {
        setEvents([
            {
                title: "Writer's Float",
                front: wfFront,
                back: wfBack
            },
            {
                title: "Cloud Cafe",
                front: testFront,
                back: testBack
            }
        ])
    }, [])

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
            { (events.length > 0 && eventIndex < events.length) &&
                <div className="MobileEventContainer">
                    <EventCard front={events[eventIndex].front} back={events[eventIndex].back}/>
                    <div className="MobileEventsButtonRow">
                        { eventIndex === events.length - 1 && 
                            <div className="ShuffleButtonPlaceholder"></div>
                        }
                        { eventIndex > 0 && 
                            <button className="ShuffleEventButton" onClick={decrement}>
                                <img className="ShuffleEventButtonImg" src={prevButton}/>
                            </button>
                        }
                        { eventIndex < events.length - 1 && 
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