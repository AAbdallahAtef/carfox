import React from "react"
import { Formik } from "formik";
import "../Style/Report.css"
import ReportForm from "../Component/ReportForm"
import * as Yup from "yup"; 

const onSubmit = (values) => {
    console.log(values);
  }
const schema = () => {
    const schema = Yup.object().shape({
        Email: Yup.string().required(),
        FName: Yup.string().required("First Name is a required field"),
        LName: Yup.string().required("Last Name is a required field"),
        phoneNumber: Yup.number().typeError("Phone Number must be a number type").required("Phone Number is a required field"),
        theReport: Yup.string().required("Report Describtion is required").min(10, "Report Describtion must be at least 10 characters"),
    });
    return schema;
}
export default function Notification() {
    return (
        <div className="containersForReport">
            <div className="Header">
                <h1>Report</h1>
            </div>
            <div className="reportForm">
                <Formik
                    initialValues={{
                        Email: "",
                        FName: "",
                        LName: "",
                        phoneNumber: "",
                        theReport: "",
                    }}
                    onSubmit={onSubmit}
                    validationSchema={schema()}
                >{<ReportForm/>}</Formik>
            </div>
        </div>
    );
}
