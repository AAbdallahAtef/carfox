import React from "react"
import '../Style/Settings.css'
import { Formik, Field} from "formik";
import ContactMethodForm from "../Component/contactMethodForm"
import CreatePasswordForm from "../Component/createPasswordForm";
import UpgradeYourAccount from "../Component/upgradeYourAccount";
import * as Yup from "yup"; 
const onSubmit = (values) => {
    console.log(values);
};
const schema = () => {
    const schema = Yup.object().shape({
        newPassword: Yup.string().required("please enter the new password"),
        confirmNewPassword: Yup.string().required("passwords should be match"),
    });
    return schema;
};
export default function Settings() {
    return (
        <div className="containersForSetting">
            <div className="Header">
                <h1>Settings</h1>
            </div>
            <div className="Contact_method">
                <Formik
                initialValues={{
                    Contact_Method: "both",
                }}
                >{<ContactMethodForm/>}</Formik>
            </div>
            <div className="Upgrade_Your_Account">
                <Formik
                initialValues={{
                    Ubgrade_Your_Account: "Regular",
                }}
                >{<UpgradeYourAccount/>}</Formik>
            </div>
            <div className="Create_Password">
                <Formik
                initialValues={{
                    newPassword: "",
                    confirmNewPassword: "",
                }}
                onSubmit = {onSubmit}
                validationSchema = {schema()}
                >{<CreatePasswordForm/>}</Formik>
            </div>
            
        </div>
    )
    
}