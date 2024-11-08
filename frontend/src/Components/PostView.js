import "../Styles/PostView.css";

function PostView({ shape }) {
    return (
        <div className="PostViewContainer">
            <img src={shape} className="PostViewImg"/>
        </div>
    )
}

export default PostView;