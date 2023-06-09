import React from "react";
import user from "../Pic/SUser.jpeg"

export default function detailsTaps() {
    return (
        <div className="sellerInfoTapsContainer">
            <div className="leftSellerDetailsContainer">
                <img src={user} alt="seller pic"/>
                <h4>john tancerid</h4>
                <p>New York</p>
            </div>
            <div className="rightSellerDetailsContainer">
                <p>how to contact with me</p>
                <div className="sellerContactInfo">
                    <div>Phone Number: <span>+20 01000100101</span></div>
                    <div>E-mail: <span> john_tancerid2121@gmail.com</span></div>
                    <div>the CarFox Chat: <span>Opened</span></div>
                </div>
            </div>
        </div>
    ); 
}