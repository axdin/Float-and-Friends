import { useNavigate } from "react-router-dom";

import Lamp from "./Lamp";
import Friend from "./Friend";
import CloudGroup from "./CloudGroup";

import "../Styles/FloatHub.css"

function FloatHub () {
    const navigate = useNavigate();

    return (
        <div>
            <div className="Sky">
                <div className="LampBlock">
                    <Lamp/>
                </div>
                <div className="Friends">
                    <Friend name="Star" pos={[500, 60]} dialogue="ZzzzzZzzZzzz"/>
                    <Friend name="Halo" pos={[10,350]} dialogue="You look nice, what's your name? :~)"/>
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