import "../Styles/PostView.css";

function PostView({ shape, addressee }) {
    return (
        <div className="PostViewContainer">
            <button className="PostViewButton">
                <img src={shape} className="PostViewImg"/>
                <div className="PostViewAddressee">
                    {addressee}
                </div>
            </button>
            
        </div>
    )
}

export default PostView;