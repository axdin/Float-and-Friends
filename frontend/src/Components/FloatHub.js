import Lamp from "./Lamp";
import CloudGroup from "./CloudGroup";

import "../Styles/FloatHub.css"

function FloatHub () {
    return (
        <div>
            <div className="Sky">
                <div className="LampBlock">
                    <Lamp/>
                </div>
                <div className="Friends">

                </div>
                <div className="CloudLayerBehind">
                    <CloudGroup inFront={false}/>
                </div>
                <div className="CloudLayerFront">
                    <CloudGroup inFront={true}/>
                </div>
            </div>           
        </div>
    );
}

export default FloatHub;