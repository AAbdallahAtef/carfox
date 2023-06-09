import React from "react";
import { Field, ErrorMessage} from "formik";

export default function nameForm(props) {
    return (
        <form onSubmit={props.handleSubmit} > 
            <label className="ReportLabel">Report Details</label>
            <div className="interiorField">
                {/* <div className="reportDetails">
                    <label className="sub-label">Email: </label>
                    <Field name="Email" placeholder=" E-mail" />
                    <ErrorMessage className="Error-Message" name='Email' />
                </div>
                <div className="reportDetails">
                    <label className="sub-label">first name: </label>
                    <Field name="FName" placeholder=" First Name" />
                    <ErrorMessage className="Error-Message" name='FName' />
                </div>
                <div className="reportDetails">
                    <label className="sub-label">last name: </label>
                    <Field name="LName" placeholder=" Last Name" />
                    <ErrorMessage className="Error-Message" name='LName' />
                </div>
                <div className="reportDetails">
                    <label className="sub-label">Phone Number: </label>
                    <Field name="phoneNumber" placeholder=" Phone Number" />
                    <ErrorMessage className="Error-Message" name='phoneNumber' />
                </div> */}
                <div className="theReport">
                    <label className="sub-label">Report Description: </label>
                    <Field
                        as="textarea"
                        name="theReport"
                        rows={23} 
                    />
                    <ErrorMessage className="Error-Message" name='theReport' />
                </div>
                <button className="Sbutton" type='Submit'>send</button>
            </div>
        </form>
    ); 
}

