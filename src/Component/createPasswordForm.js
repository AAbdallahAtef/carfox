import React from "react";
import { Field, ErrorMessage} from "formik";

export default function CreatePasswordForm(props) {
      return (
        <form onSubmit={props.handleSubmit} > 
            <label className="Labels">Create Password</label>
            <div className="Create_Password_Form">
                <label className="sub-labels">new Password</label>
                <br />
                <Field name="newPassword" type= "Password" placeholder="  New Password"/>
                <br />
                <ErrorMessage className="Error-Message" name='newPassword' />
                <br />
                <p className="Constrains"><br/>Use minimum 6 characters, and at least one letter <br/>and one number</p>  
                <br />  
                <label className="sub-labels">confirm new Password</label>
                <br />
                <Field name="confirmNewPassword" type = "Password" placeholder="  Confirm New Password"/>
                <br />
                <ErrorMessage className="Error-Message" name='confirmNewPassword' /><br />
                <button type='Submit' className="Submit_Button">Create New Password</button>  
            </div>
          </form>
      ); 
  }
