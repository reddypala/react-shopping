import React from 'react';
import { useFormik } from 'formik';

export default function FormikValidation() {

    function verifyUserDetails(userDetails) {
        const errors = {};
        if (userDetails.UserName == "") {
            errors.UserName = "User Name Required";
        } else if (userDetails.UserName.length < 4) {
            errors.UserName = "Name is too short..";
        } else if (userDetails.UserName.length > 10) {
            errors.UserName = "Name is too long..";
        }
        if (userDetails.Age == "") {
            errors.Age = "Age Required";
        } else if (isNaN(userDetails.Age)) {
            errors.Age = "Age must be a number"
        }
        if (userDetails.Email == "") {
            errors.Email = "Email Required";
        } else if (userDetails.Email.indexOf("@") <= 2) {
            errors.Email = "Invalid Email";
        }
        if (userDetails.Mobile == "") {
            errors.Mobile = "Mobile Number Required";
        }
        else if (userDetails.Mobile.match(/\+91\d{10}/)) {
            errors.Mobile = "";
        } else {
            errors.Mobile = "Invalid Mobile Number";
        }

        return errors;
    }
    const formik = useFormik({
        initialValues: {
            UserName: '',
            Age: 0,
            Email: '',
            Mobile: ''
        },
        validate: verifyUserDetails,
        onSubmit: values => {
            alert(JSON.stringify(values));
        }
    })
    return (
        <div className='container-fluid'>
            <form onSubmit={formik.handleSubmit}>
                <h2>Register User</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input name='UserName' onChange={formik.handleChange} type='text'></input>
                    </dd>
                    <dd className='text-danger'>{formik.errors.UserName}</dd>
                    <dt>Age</dt>
                    <dd><input name='Age' onChange={formik.handleChange} type='text'></input></dd>
                    <dd className='text-danger'>{formik.errors.Age}</dd>
                    <dt>Email</dt>
                    <dd>
                        <input name='Email' onChange={formik.handleChange} type='email'></input>
                    </dd>
                    <dd className='text-danger'>{formik.errors.Email}</dd>
                    <dt>Mobile</dt>
                    <dd>
                        <input type='text' name='Mobile' onChange={formik.handleChange}></input>
                    </dd>
                    <dd className='text-danger'>{formik.errors.Mobile}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}