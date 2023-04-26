import React, { Component } from 'react';
import Products from './pages/product';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Products/>
      </div>

    );
  }
 
}

export default App;
