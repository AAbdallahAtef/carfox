import React from "react"
import '../Style/UserInfo.css'
import user from "../Pic/user.jpg"
import { Formik } from "formik";
import { BsChatDots } from "react-icons/bs"
import {MdModeEditOutline} from "react-icons/md"
import VerifyForm from "../Component/verifyForm"
import NameForm from "../Component/nameForm"
import AddressForm from "../Component/addressForm"
import EmailForm from "../Component/emailForm"
import PhoneNumberForm from "../Component/phoneNumberForm"
import PasswordForm from "../Component/passwordForm"
import ModeForm from "../Component/modeForm"
import * as Yup from "yup"; 

const schema = () => {
    const schema = Yup.object().shape({
        fName: Yup.string().required("please enter your first name"),
        lName: Yup.string().required("please enter your last name"),
        uName: Yup.string().required("please enter your user name"),
        city: Yup.string().required("please enter your city"),
        country:  Yup.string().required("please enter your country"),
        email: Yup.string().required("please enter your email"),
        privatePhoneNumber: Yup.string().required("please enter your private phone number"),
        workPhoneNumber: Yup.string().required("please enter your work phone number"),
    });
    return schema;
};
export default function UserInfo() {

    return (
        
        <div className="containersForUserInfo">
            <div className="leftContent">
                <div className="userHeader">
                    <h1>User Info</h1>
                </div>
                <div className="photo">
                        <label className="Label"> photo</label>
                        <div className="imgAndIcon">
                            <img src={user} alt="user" />
                            <MdModeEditOutline className="editIcon"/>
                        </div>
                </div>
                <div className="help">
                        <label className="Label">need help...?</label>
                        <BsChatDots className="contactIcon"/>
                        <p>chat with us so we can see your problem and fix it with you  </p>
                        <button className="contactButton">Contact Us</button>
                </div>
            </div>
            <div className="rightContent">
                <div >
                    <Formik
                    initialValues={{
                        slider: "",
                    }}
                    >{<VerifyForm/>}</Formik>
                </div>
                <div >
                        <Formik
                            initialValues={{
                                fName: "",
                                lName: "",
                                uName: "",
                            }}
                            validationSchema = {schema()}
                        >{<NameForm/>}</Formik>
                </div>
                <div className="containers">
                        <div >
                            <Formik
                                initialValues={{
                                    city: "",
                                    country: "",
                                }}
                                validationSchema = {schema()}
                            >{<AddressForm/>}</Formik>
                        </div>
                        <div >
                            <Formik
                                initialValues={{
                                    email: "",
                                }}
                                validationSchema = {schema()}
                            >{<EmailForm/>}</Formik>
                        </div>
                </div>
                <div>
                        <Formik
                            initialValues={{
                                privatePhoneNumber: "",
                                workPhoneNumber: "",
                            }}
                            validationSchema = {schema()}
                        >{<PhoneNumberForm/>}</Formik>
                </div>
                <div className="containers">
                        <PasswordForm/>
                        <ModeForm/>
                </div>
            </div>

        </div>
    );

}
