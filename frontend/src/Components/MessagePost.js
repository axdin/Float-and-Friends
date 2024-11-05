import PostCreator from "./PostCreator";

import messagePost from "../Assets/Backgrounds/MessagePost.png";
import Halo from "../Assets/Friends/Idle-Halo.gif";

import "../Styles/MessagePost.css";

function MessagePost() {

    return (
        <div className="MessagePost">
            <img src={Halo} className="MessageFriend"/>
            <img src={messagePost} className="MessagePostImg"/>
            <PostCreator/>
        </div>
    );
}

export default MessagePost;