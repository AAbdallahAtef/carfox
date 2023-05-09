import React from 'react';
import user from "../Pic/user.jpg"
import {FaUserAlt, FaDropbox,} from "react-icons/fa";
import { MdFavorite, MdSettings, MdOutlineNotificationsActive, MdLogout } from "react-icons/md"
import {BsChatFill} from 'react-icons/bs'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const menuItem=[
        {
            path:"/",
            name:"User Info",
            icon:<FaUserAlt/>
        },
        {
            path:"/Favourites",
            name:"Favourites",
            icon:<MdFavorite/>
        },
        {
            path:"/Settings",
            name:"Settings",
            icon:<MdSettings/>
        },
        {
            path:"/Notification",
            name:"Notification",
            icon:<MdOutlineNotificationsActive/>
        },
        {
            path:"/Products",
            name:"Products",
            icon:<FaDropbox/>
        },
        {
            path:"/Chats",
            name:"Chats",
            icon:<BsChatFill/>
        }
    ]
    return (
        <div className="containerForSidebar">
           <div className="sidebar">
                <div>
                    <div className="top_section">
                        <div className="userImg">
                            <img src={user} alt='userImage'/>
                        </div>
                        <h4 className="userName">ahmed sayed</h4>
                    </div>
                    {
                        menuItem.map((item, index)=>(
                            <NavLink to={item.path} key={index} className="link" activeclassName="active">
                                <div className="icon">{item.icon}</div>
                                <div className="link_text">{item.name}</div>
                            </NavLink>
                        ))
                    }
                </div>    
                <NavLink to={"/LogOut"} className="logoutLink" >
                    <div className="loIcon"><MdLogout /></div>
                    <div className="loText">log out</div>
                </NavLink>
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;
 