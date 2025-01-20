import { useState } from "react";

import Menu from "./Menu";
import PostCreator from "./PostCreator";
import PostViewer from "./PostViewer";

import "../Styles/MobileMessagePost.css";

function MobileMessagePost() {
    const [createMode, setCreateMode] = useState(false);

    return (
        <div className="MobileMessagePostPage">
            <div className="MobileMessagePostHeaderRow">
                <Menu isMobile={true}/>
                <button onClick={() => setCreateMode(!createMode)}>
                    Create Post
                </button>
            </div>
            { !createMode ? 
                <div className="MobileMessagePostContainer">
                    <PostViewer width={200}/>
                </div> :
                <div className="MobileMessagePostContainer">
                    <PostCreator/>
                </div>
            
            }
        </div>
    );
}

export default MobileMessagePost;