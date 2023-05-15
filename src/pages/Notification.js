import React, { useState } from "react"
import "../Style/Notifications.css"
import TheSwitch from "../Component/theSwitch"
export default function Notification() {
        // const [toggle, setToggle] = useState(false);
        // const toggler = () => {
        //     toggle ? setToggle(false) : setToggle(true);
        // }
    return (
        <div className="containersForNotification">
            <div className="Header">
                <h1>Notification</h1>
            </div>
            <div className="notifySetting">
                <div className="component">
                    <div className="labelAndDesc">
                        <h4 className="componentLabel">Special communications & offers</h4>
                        <p className="describtion">Receive updates, offers and more</p>
                    </div> 
                    <TheSwitch/>
                </div>
                <hr/>
                <div className="component">
                    <div className="labelAndDesc">
                        <h4 className="componentLabel">Recommendations</h4>
                        <p className="describtion">Receive recommendations based on your activity</p>
                    </div> 
                    <TheSwitch/>
                </div>
                <hr/>
                <div className="component">
                    <div className="labelAndDesc">
                        <h4 className="componentLabel">Chat Safety Tips</h4>
                        <p className="describtion">Receive safety tips based on your chat activity</p>
                    </div> 
                    <TheSwitch/>
                </div>
            </div>
        </div>
    );
    
}
