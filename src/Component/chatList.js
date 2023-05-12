import React from "react";
import { BsThreeDots } from 'react-icons/bs'
import user from "../Pic/user.jpg"
export default function chatList() {
    const allChatUser = [
        {
            name: "Ali Mohamed",
            pic: user,
            time: "3:30 pm",
        },
        {
            name: "Mohamed Atef",
            pic: user,
            time: "5:30 pm",
        },
        {
            name: "Laila Ahmed",
            pic: user,
            time: "1:30 am",
        },
        {
            name: "Ali Mohamed",
            pic: user,
            time: "3:30 pm",
        },
        {
            name: "Mohamed Atef",
            pic: user,
            time: "5:30 pm",
        },
        {
            name: "Laila Ahmed",
            pic: user,
            time: "1:30 am",
        },
        {
            name: "Ali Mohamed",
            pic: user,
            time: "3:30 pm",
        },
        {
            name: "Mohamed Atef",
            pic: user,
            time: "5:30 pm",
        },
        {
            name: "Laila Ahmed",
            pic: user,
            time: "1:30 am",
        },
        {
            name: "Ali Mohamed",
            pic: user,
            time: "3:30 pm",
        },
        {
            name: "Mohamed Atef",
            pic: user,
            time: "5:30 pm",
        },
        {
            name: "Laila Ahmed",
            pic: user,
            time: "1:30 am",
        }
    ]
      return (
        <div className='chatList'>
            <div className="topDiv">
                <h2>Chats</h2>
                <BsThreeDots className="chatIcon"/>
            </div>
            <div className="chatItemList">
                {
                    allChatUser.map((item, index)=>(
                        <div key={index} className="incomingMessage" activeclassName="active">
                            <div className="name_and_Pic">
                                <img src={item.pic} alt="user " className="pic" />
                                <div className="item_name">{item.name}</div>
                            </div>
                            <div className="time">{item.time}</div>
                            
                        </div>
                    ))
                }
            </div>
        </div>
      ); 
  }
