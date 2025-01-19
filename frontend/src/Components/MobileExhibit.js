import { useState, useEffect } from "react";

import Menu from "./Menu";
import ExhibitIcon from "./ExhibitIcon";

import loveLetter from "../Assets/Exhibits/LoveLetterExhibitIcon.png";

import nextButton from "../Assets/Icons/NextButton.png";
import prevButton from "../Assets/Icons/PrevButton.png";

import "../Styles/MobileExhibit.css";

function MobileExhibit() {
    const [exhibitIndex, setExhibitIndex] = useState(0);
    const [exhibits, setExhibits] = useState([]);

    useEffect(() => {
        setExhibits([
            {
                title: "Love Letters to a Friend",
                icon: loveLetter
            }
        ])
    }, [])
    
    const increment = () => {
        setExhibitIndex(exhibitIndex + 1);
    }
    const decrement = () => {
        setExhibitIndex(exhibitIndex - 1);
    }

    return (
        <div className="MobileExhibitPage">
            <div className="MobileEventsHeaderRow">
                <Menu isMobile={true}/>
            </div>
            { exhibits.length > 0 &&
                <div className="MobileExhibitContainer">
                    <div className="CurrentExhibitContainer">
                        <ExhibitIcon exhibit={exhibits[exhibitIndex]} size={250}/>
                    </div>
                    <div className="MobileExhibitButtonRow">
                        { exhibitIndex > 0 && 
                            <button className="ShuffleExhibitButton" onClick={decrement}>
                                <img className="ShuffleExhibitButtonImg" src={prevButton}/>
                            </button>
                        }
                        { exhibitIndex < exhibits.length && 
                            <button className="ShuffleExhibitButton" onClick={increment}>
                                <img className="ShuffleExhibitButtonImg" src={nextButton}/>
                            </button>
                        }
                    </div>
                </div>
            }
        </div>
    );
}

export default MobileExhibit;