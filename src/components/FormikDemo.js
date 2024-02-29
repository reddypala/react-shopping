import { useFormik } from "formik"
import React from 'react'

export default function FormikDemo() {

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Password: '',
            City: '',
            Subscribe:true
        },
        onSubmit: values => {
            alert(`${values.UserName}\nSubscibe: ${(values.Subscribe===true)?'subscribed':'not subscribed'}`);
        }
    })
    return (
        <div className="container-fluid">
         
                <form onSubmit={formik.handleSubmit}>
                    <h2>Register User</h2>
                    <dl>
                        <dt>UserName</dt>
                        <dd>
                            <input name="UserName" type="text" onChange={formik.handleChange} value={formik.values.UserName}></input>
                        </dd>
                        <dt>Password</dt>
                        <dd><input name="Password" onChange={formik.handleChange} type="password" value={formik.values.Password}></input></dd>
                        <dt>City</dt>
                        <dd>
                            <select name="City" onChange={formik.handleChange} value={formik.values.City}>
                                <option>Delhi</option>
                                <option>Hyderabad</option>
                            </select>
                        </dd>
                        <dt>Subscribe</dt>
                        <dd className="form-switch">
                            <input className="form-check-input" onChange={formik.handleChange} checked={formik.values.Subscribe} name="Subscribe" type="checkbox"></input> Yes
                        </dd>
                    </dl>
                    <button>Register</button>
                </form>
            
            <h2>
                UserDetails
            </h2>
            {formik.values.UserName}
        </div>
    )
}