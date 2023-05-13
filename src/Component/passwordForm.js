import React from "react";

export default function passwordForm(props) {
    return (
        <div className="firstHalf">
            <label className="Label">password</label>
            <div className="buttonDetails">
                <button className="passwordButton">reset password</button>
                <button className="passwordButton">send old password to my e-mail</button>
            </div>
        </div>
    ); 
}