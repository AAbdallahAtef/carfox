import React from "react";
import { Field} from "formik";

export default function verifyForm(props) {
    return (
        <form className="completeOne"> 
            <label className="Label">your account is being verified</label>
            <div className="verifyForm">
                <Field name= "slider" type="range" min="1" max="5" value="3" className="verifySlider" disabled/>
                <p>complete entering your data</p>
            </div>
        </form>
      ); 
  }
