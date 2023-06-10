import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "./App.css"
import UserInfo from "./pages/UserInfo"
import Favourites from "./pages/Favourites"
import Settings from "./pages/Settings"
import Notification from "./pages/Notification"
import Products from './pages/product';
import Chat from "./pages/Chat"
import Sidebar from "./Component/Sidebar"
import Report from "./pages/Report"
import PicAndSlider from "./Component/picAndSlider"
import ViewProduct from './pages/ViewProduct';
import AboutUS from './pages/AboutUs';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<UserInfo />} />
              <Route path="/UserInfo" element={<UserInfo />} />
              <Route path="/Favourites" element={<Favourites />} />
              <Route path="/Settings" element={<Settings /> } />
              <Route path="/Notification" element={<Notification />} />
              <Route path="/Products" element={<Products />} />
              <Route path="/Chats" element={<Chat />} />
              <Route path="/LogOut" element={<Products />} />
            </Routes>
          </Sidebar>

         
        </BrowserRouter>
        <Report/>
          <PicAndSlider/> */}
        {/* <ViewProduct/> */}
        <AboutUS/>
      </div>
    )
  };
}

export default App;
