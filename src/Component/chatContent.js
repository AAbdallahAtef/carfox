import React, { Component } from "react";
import user from "../Pic/SUser.jpeg"
import { BsThreeDots } from 'react-icons/bs'
import {RiSendPlaneFill} from "react-icons/ri"
class chatContent extends Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          messages: [
            { text: "hello", timestamp: "2023-02-01", className: "Other" },
            { text: "hello", timestamp: "2023-05-01", className: "Me" },
            { text: " dude how are u", timestamp: "2023-01-01", className: "Other" }
          ],
          inputValue: '',
        };
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSendMessage = this.handleSendMessage.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
      }
    
      handleInputChange(e) {
        this.setState({ inputValue: e.target.value });
      }
    
      handleSendMessage() {
        if (this.state.inputValue.trim()) {
          const message = {
            text: this.state.inputValue.trim(),
            timestamp: Date.now(),
            className: "Me",
          };
    
          // Add the message to the local state
          this.setState((prevState) => ({
            messages: [...prevState.messages, message],
            inputValue: '',
          })
          );
        }
    }
    handleKeyPress(e) {
        if (e.key === "Enter") {
            this.handleSendMessage();
        }
      }
    
    render(){
      return (
        <div className='chatContent'>
            <div className="chatHeader">
                <div className="img_Name_LS">
                    <img src={user} alt='userImage' className="userImage"/>
                    <div className="Name_LS">
                        <h4>ali mohamed</h4>
                        <p>last seen<span>23 min</span>ago</p>
                    </div>      
                </div>
                <BsThreeDots className="chatIcon"/>
            </div>
                <div className="chatWindow">
                    {this.state.messages.map((message, index) => (
                        <div key={index} >
                            <p className="messageDate">{new Date(message.timestamp).toLocaleDateString()}</p>
                            <p className={message.className}>{message.text}</p> 
                        </div>  
                        ))
                    }
                </div>
            <div className="chatFooter">
                <div className="type_send" onKeyDown={this.handleKeyPress}>
                    <input
                    type="text"
                    value={this.state.inputValue}
                    onChange={this.handleInputChange}
                    placeholder="Type A Message Here"
                    className="sendText"
                    />
                    <RiSendPlaneFill onClick={this.handleSendMessage} className="sendIcon"/>
                </div>
            </div>  
        </div>
        );
    }  
}
export default chatContent;

