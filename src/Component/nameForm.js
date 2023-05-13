import React from "react";
import { Field, ErrorMessage} from "formik";

export default function nameForm(props) {
    return (
        <form className="completeOne"> 
            <label className="Label">name</label>
            <div className="userForm">
                <div className="details">
                    <label className="sub-label">first name</label>
                    <Field name="fName" placeholder=" First Name" />
                    <ErrorMessage className="Error-Message" name='fName' />
                </div>
                <div className="details">
                    <label className="sub-label">last name</label>
                    <Field name="lName" placeholder=" Last Name" />
                    <ErrorMessage className="Error-Message" name='lName' />
                </div>
                <div className="details">
                    <label className="sub-label">user name</label>
                    <Field name="uName" placeholder=" User Name" />
                    <ErrorMessage className="Error-Message" name='uName' />
                </div>
            </div>
        </form>
    ); 
}

