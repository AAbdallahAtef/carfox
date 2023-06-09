import React, { useState } from 'react';
import "../Style/ViewProduct.css"
import FCar from "../Pic/download.jpeg";
import SCar from "../Pic/download (1).jpeg";
function ImgSwipe() {
    const images=[
        {id:0,value: FCar},
        {id:1,value: SCar},
        {id:2,value: FCar},
        {id:3,value: SCar},
      ]
    const [imgData,setImgData]=useState(images[0])
    const handleClick=(index)=>{
        console.log(index)
        const imgSlider=images[index];
        setImgData(imgSlider)
    }
  return (
    <div className="picWithSlider">
      <div className='nameNumberImg'>
        <div className='nameAndNumber'>
          <h2>Photos </h2>
          <p>{images.length}</p>  
        </div>
        <img className='choosedImg' src={imgData.value} alt='choosedPic' /> 
      </div>
      <div className='allImages'>
        {
          images.map((data, index) =>
          <div className="thumbnail" key={index} >
            <img className={imgData.id===index?"clicked":""} src={data.value} alt='thumbnail' onClick={()=>handleClick(index)} />
          </div>
          )
        }
      </div>
    </div>
  );
}

export default ImgSwipe;
