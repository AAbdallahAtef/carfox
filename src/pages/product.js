import React from "react"
import ProductItem from "../Component/productItem"
import '../App.css'

export default function Products() {
     
    return (
        <div>
            <div className="Header">
                <h1>Products</h1>
                <a href="#">+ Add Product</a>
            </div>
            <div className="Container"> 
            <p className="prod_no">you have <span>6</span> products</p><br/>
            <div className="inside_Container">
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
                <div className="for scrool"><ProductItem /></div>
            </div>
            </div>
            
        </div>
        )
    
}