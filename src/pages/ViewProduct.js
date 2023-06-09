import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FirstDiv from "../Component/picAndSlider"
import SecondtDiv from "../Component/relatedItems"
import ThirdtDiv from "../Component/carDetails"
import TapsBar from "../Component/compositeDiv"
import Descripton from "../Component/descriptionTap";
import Details from "../Component/detailsTap";
import SellerInfo from "../Component/sellerInfoTap"
export default function viewProduct() {
    return (
        <div className="viewProductContainer">
            <div className="leftDivContainer">
                <FirstDiv />
                <SecondtDiv />
            </div>
            <div className="rightDivContainer">
                <ThirdtDiv />
                <BrowserRouter>
                    <TapsBar>
                        <Routes>
                            <Route path="/" element={<Descripton />} />
                            <Route path="/Descripton" element={<Descripton />} />
                            <Route path="/Details" element={<Details />} />
                            <Route path="/SellerInfo" element={<SellerInfo /> } />
                        </Routes>
                    </TapsBar>
                </BrowserRouter>
            </div>
        </div>
    ); 
}