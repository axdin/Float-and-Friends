import MobileIcon from "./MobileIcon";

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";

import "../Styles/MobileHub.css";

function MobileHub() {
    return (
        <div className="HubContainer">
            <MobileIcon name="About Float and Friends" loc="/Mobile/About" icon={Star}/>
            <MobileIcon name="Post a Message!" loc="/Mobile/MessagePost" icon={Halo}/>
            <MobileIcon name="Upcoming Community Events" loc="/Mobile/Events" icon={Bear}/>
        </div>
    )
}

export default MobileHub;