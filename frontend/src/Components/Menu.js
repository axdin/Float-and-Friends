import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "../Styles/Menu.css";

function Menu({ isMobile }) {
    const [isExpanded, setIsExpanded] = useState(false);
    const navigate = useNavigate();

    const reroute = (loc) => {
        navigate(loc);
    }

    const toggleMenuExpansion = () => {
        setIsExpanded(!isExpanded);
        console.log(isExpanded);
        console.log(isMobile);
    }

    return (
        <div className="MenuContainer">
            <button className="MenuContainerButton" onClick={toggleMenuExpansion}>
                Menu
            </button>
            { isExpanded && 
                (isMobile ? 
                    <div className="MobileMenu">
                        <button className="MenuButton" onClick={() => reroute("/MobileHub")}>
                            Home
                        </button>
                    </div> 
                    :
                    <div className="ComputerMenu">
                        <button className="MenuButton" onClick={() => reroute("/Hub")}>
                            Home
                        </button>
                        <button className="MenuButton" onClick={() => reroute("/MessagePost")}>
                            Message Post
                        </button>
                    </div>
                )
            }
            
        </div>
    );
}

export default Menu;