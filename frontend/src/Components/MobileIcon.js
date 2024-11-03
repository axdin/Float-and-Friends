import "../Styles/MobileIcon.css";

function MobileIcon({ name, icon }) {
    return (
        <div className="MobileIconContainer">
            <img src={icon} className="MobileIconFriend"/>
        </div>
    )
}

export default MobileIcon;