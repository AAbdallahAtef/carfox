import React from 'react';
import "../Style/ViewProduct.css"
import {BsStarFill, BsStarHalf} from "react-icons/bs"
export default function carDetails() {
    
  return (
    <div className="carDetails">
        <div className='smallDetailsContainer'>
            <h3>BMW A3</h3>
            <div className='Stars'>
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarFill />
                <BsStarHalf />
                <p>(4.5 Stars)</p>  
            </div>
            <div className='review'>
                <p>reviews</p>
                <p>256</p>
            </div>
            <button className='wishButton'>add to wish list</button>  
        </div>
        <div className='smallDetailsContainer'>
            <p className='price'>390,000</p>
            <button className="contactBtn" >contact the seller</button>  
        </div>  
    </div>
  );
}
