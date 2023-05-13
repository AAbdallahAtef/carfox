import React from "react";
import { Field, ErrorMessage} from "formik";

export default function phoneNumberForm(props) {
    return (
        <form className="completeOne">
            <label className="Label">phone number</label>
            <div className="userForm">
                <div className="details">
                    <label className="sub-label">private phone number</label>
                    <Field name="privatePhoneNumber" placeholder=" Private Phone Number"/>
                    <ErrorMessage className="Error-Message" name='privatePhoneNumber' />
                </div>
                <div className="details">
                    <label className="sub-label">work phone number</label>
                    <Field name="workPhoneNumber" placeholder=" Work Phone Number"/>
                    <ErrorMessage className="Error-Message" name='workPhoneNumber' />
                </div>
            </div>
        </form>
    ); 
}