import MobileIcon from "./MobileIcon";

import Star from "../Assets/Friends/Idle-Star.gif";
import Halo from "../Assets/Friends/Idle-Halo.gif";
import Bear from "../Assets/Friends/Idle-Bear.gif";

import "../Styles/MobileHub.css";

function MobileHub() {
    return (
        <div className="HubContainer">
            <MobileIcon name="Bear" icon={Star}/>
            <MobileIcon name="Halo" icon={Halo}/>
            <MobileIcon name="Star" icon={Bear}/>
        </div>
    )
}

export default MobileHub;