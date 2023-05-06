import React, { Component }  from "react";
import { Formik, Field } from "formik";

export default function ContactMethodForm() {
      return (
        <form>
          <label className="Labels">Contact method</label>
          <div className="Contact_Method_Form">
            <Field  className="rInput" name="Contact_Method" type="radio" value="phone number"/><span className="rlabel">Phone Number</span>
            <Field  className="rInput" name="Contact_Method" type="radio" value="chat"/><span className="rlabel">Chat</span>
            <Field  className="rInput" name="Contact_Method" type="radio" value="both"/><span className="rlabel">Both</span>
          </div>
        </form>
      ); 
  }
