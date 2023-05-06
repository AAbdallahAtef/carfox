import React, { Component }  from "react";
import { Formik, Field } from "formik";

export default function upgradeYourAccount() {
      return (
        <form>
            <label className="Labels">upgrade Your account</label>
            <Field className="rInput" name="Ubgrade_Your_Account" type="radio" value="Regular" /><span className="rlabel">Regular</span><br/><br/>
            <Field className="rInput" name="Ubgrade_Your_Account" type="radio" value="Plan A" /><span className="rlabel">Plan A</span><br/><br/>
            <Field className="rInput" name="Ubgrade_Your_Account" type="radio" value="Plan B" /><span className="rlabel">Plan B</span><br/><br/><br/>
            <a href="#" className="view_plans_btn">View Plans</a>
        </form>
      ); 
  }
