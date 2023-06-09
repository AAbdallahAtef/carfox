import React from "react";

export default function detailsTaps() {
    return (
        <div className="detailsTapsContainer">
            <div className="leftDetailsContainer">
                <div>Brand: <span>BMW</span> </div>
                <div>Model: <span>A3</span> </div>
                <div>Price: <span>390,000</span> </div>
                <div>Year: <span>2022</span> </div>
                <div>Condition: <span>Old</span> </div>
                <div>Video: <span>No</span> </div>
                <div>Images: <span>3</span> </div>
            </div>
            <div className="rightDetailsContainer">
                <div>Category: <span>Sadan</span> </div>
                <div>Kind: <span>Sport</span> </div>
                <div>Transmission Type:</div>
                <div className="transmission">
                    <div className="transmissionType">
                        <input type="checkbox" checked disabled></input>
                        <p>Automatic</p>
                    </div>
                    <div className="transmissionType">
                        <input type="checkbox"  disabled></input>
                        <p>Manual</p>
                    </div>
                </div>
                <div>Color: <span>Gold</span> </div>
                <div>Fuel Type: <span>Benzine</span> </div>
            </div>

        </div>
    ); 
}