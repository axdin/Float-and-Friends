import "../Styles/ExhibitIcon.css";

function ExhibitIcon({ exhibit, size }) {

    return (
        <div className="ExhibitIconContainer">
            <img src={exhibit.icon} className="ExhibitIconImg"/>
        </div>
    )
}

export default ExhibitIcon;