import React, { Component } from 'react';
import Products from './pages/product';
import Settings from "./pages/Settings"
import * as Yup from "yup"; 
// import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        {/* <Products/> */}
        <Settings/>
      </div>
    )
  };
}

export default App;
