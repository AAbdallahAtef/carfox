import React from "react"
import "../Style/Favourite.css"
import car from '../Pic/jeep.jpg'
export default function Favourite() {
    const tableItem=[
        {
            photo: <img src={car}alt="jeep" />,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },{
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },{
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
        {
            photo:<img src={car} alt="jeep"/>,
            name:"BMW",
            type: "Car",
            time: "sunday 11 pm"
        },
    ]
    return (
        
        <div className="containersForFav">
            <div className="favHeader">
                <h1>Favourites</h1>
                <a  href="#">search in 21</a>
            </div>
            <div className="favouriteSetting">
                <div className="tapleHeaders">
                    <div className="favPhoto">photo</div>
                    <div className="name">Name</div>
                    <div className="type">Type</div>
                    <div className="deleteAndView">Delete & View</div>
                    <div className="addTime">Time</div>                        
                </div>
                <div className="tableItems">
                    {
                        tableItem.map((item, index)=>(
                            <div key={index} className="itemDetails" >
                                <div className="favPhoto">{item.photo}</div>
                                <div className="name">{item.name}</div>
                                <div className="type">{item.type}</div>
                                <div className="deleteAndViewLinks">
                                    <a href="#">delete</a>
                                    <a href="#">view more details</a>
                                </div>
                                <div className="addTime">{item.time}</div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
