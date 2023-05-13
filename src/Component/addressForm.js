import React from "react";
import { Field, ErrorMessage} from "formik";

export default function addressForm(props) {
    return (
    <form className="firstHalf">
        <label className="Label">address</label>
        <div className="userForm">
            <div className="details">
                <label className="sub-label">city</label>
                <Field name="city" placeholder=" city"/>
                <ErrorMessage className="Error-Message" name='city' />
            </div>
            <div className="details">
                <label className="sub-label">country</label>
                <Field name="country" placeholder=" Country"/>
                <ErrorMessage className="Error-Message" name='country' />
            </div>
        </div>
    </form>
    ); 
}

