import PostCreator from "./PostCreator";
import PostViewer from "./PostViewer";

import Halo from "../Assets/Friends/Idle-Halo.gif";

import "../Styles/MessagePost.css";

function MessagePost() {

    return (
        <div className="MessagePost">
            <img src={Halo} className="MessageFriend"/>
            <PostViewer/>
            <PostCreator/>
        </div>
    );
}

export default MessagePost;