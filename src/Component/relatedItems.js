import React from 'react';
import "../Style/ViewProduct.css"
import FCar from "../Pic/download.jpeg";

export default function relatedItems() {
    
  return (
    <div className="relatedItems">
        <h2>related items</h2>
        <div className='PicAndDetails'>
            <img className='relatedItemCar' src={FCar} alt='car' />
            <div className='middleDiv'>
                <div className='nameAndSuv'>
                    <h2>BMW A3</h2>
                    <button>SUV</button>  
                </div>
                <div className='rate'>
                    <div>4.6</div>  
                    <h4>good</h4> 
                </div>  
            </div>  
            <button className='moreButton'>view more</button>  
        </div>  
    </div>
  );
}
