
function ExhibitIcon({ exhibit, size }) {

    return (
        <div className="ExhibitIconContainer">
            <img src={exhibit.icon} className="ExhibitIconImg" style={{ height: size }}/>
        </div>
    )
}

export default ExhibitIcon;