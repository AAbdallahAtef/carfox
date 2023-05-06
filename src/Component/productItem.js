import React from "react";
import car from '../Pic/jeep.jpg'
import '../Style/Product.css'
export default function ProductItem() {
    return (
        <div className="Card">
            <img src={car}alt="jeep" />
            <div className="Card_body">
                <h5 className="Card-title">Details</h5>
                <div className="Details">
                    <div className="left-details">
                        <p>Brand :  BMW</p> 
                        <p>Model :  A3</p>
                        <p>Price :  100</p>
                        <p>Year :  2022</p>
                    </div>
                    <div className="right-details">
                        <p>Condition :  old</p>
                        <p>Video :  yes</p>
                        <p>Images :  6</p>
                        <p>Views :  200</p>            
                    </div>
                </div>
         
                <a href="#" className="edit_btn">Edit</a>

            </div>
        </div>
    )
}