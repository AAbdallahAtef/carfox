import React from "react";
import { Field, ErrorMessage} from "formik";

export default function emailForm(props) {
    return (
        <form className="secondHalf">
            <label className="Label">e-mail</label>
            <Field name="email" type="email" placeholder=" E-mail" />
            <ErrorMessage className="Error-Message" name='email' />
        </form>
    ); 
}