import React from 'react';
import { NavLink } from 'react-router-dom';
const tapsBar = ({children}) => {
    const tapsItem=[
        {
            path:"/",
            name:"Descripton"
        },
        {
            path:"/Details",
            name:"Details"
        },
        {
            path:"/SellerInfo",
            name:"Seller Info"
        }
    ]
    return (
        <div className="containerForTapsItem">
           <div className="tapsItem">
                {
                    tapsItem.map((item, index)=>(
                        <NavLink to={item.path} key={index} className="tap" >
                            <div className="tap_text">{item.name}</div>
                        </NavLink>
                    ))
                }    
           </div>
           {children}
        </div>
    );
};

export default tapsBar;
 