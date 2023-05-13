import React from "react";

export default function modelForm(props) {
    return (
        <div className="secondHalf">
            <label className="Label">mode</label>
            <div className="buttonDetails">
                <button className="lightMode">light mode</button>
                <button className="darkMode">dark mode</button>
            </div>
        </div>
    ); 
}