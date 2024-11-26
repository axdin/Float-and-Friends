import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";

import { db } from "../firebase";

import chiffon from "../Assets/Friends/Chiffon_Still.png";


import "../Styles/MobileContact.css";

const intro = "Reach out to Float and Friends to provide feedback or just say hi! I'll deliver the message in no time! And don't forget to follow their socials while you're here.";

function MobileContact() {
    const [isInputing, setIsInputing] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");


    const switchMode = () => {
        setIsInputing(!isInputing);
    }

    const submitMessage = async(e) => {
        e.preventDefault(); 

        try {
            const docRef = await addDoc(collection(db, "emails"), {
                from: name,
                email: email,
                content: message
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }

    return (
        <div className="MobileContactContainer">
            <div className="MobileContactTextRow">
                { !isInputing ? 
                    <div className="MobileContactText">
                        {intro}
                    </div> :
                    <div className="MobileContactText">
                        <label className="MobileContactNameLabel">
                            What do we call you?
                            <input className="MobileContactNameInput" onChange={(e)=>setName(e.target.value)}/>
                        </label>
                        <label className="MobileContactEmailLabel">
                            How can we reach you?
                            <input className="MobileContactEmailInput" onChange={(e)=>setEmail(e.target.value)}/>
                        </label>
                        <label className="MobileContactMessageLabel">
                            What do you have to say?
                            <textarea 
                                type="text" 
                                className="MobileContactMessageInput" 
                                maxlength="150" 
                                onChange={(e)=>setMessage(e.target.value)}/>
                        </label>
                    </div>
                }
            </div>
            <div className="MobileContactFriendRow">
                <img className="MobileContactFriendImg" src={chiffon}/>
                { !isInputing ?
                    <button className="SwitchContactButton" onClick={switchMode}>
                        Begin message
                    </button> :
                    <button className="SubmitMessageButton" onClick={submitMessage}>
                        Submit for shipment!
                    </button>
                }
                <div className="MobileSocialMediaContainer">


                </div>
            </div>
        </div>
    );
}

export default MobileContact;