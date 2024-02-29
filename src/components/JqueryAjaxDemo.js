import { useEffect, useState } from "react"
import $ from 'jquery';
import { useFormik } from "formik";


export default function JqueryAjaxDemo() {
    const [users, setUsers] = useState();
    const [userError,setUserError] = useState('');

    const formik = useFormik({
        initialValues: {
            userId: '',
            userName: '',
            password: '',
            Age: 0,
            Mobile: '',
            subscribe: false
        },
        onSubmit: values => {
            $.ajax({
                method: "POST",
                url: "http://localhost:4000/registeruser",
                data: values
            })
            alert("Registered Successfully..")
        }
    })

    useEffect(()=>{
        $.ajax({
            method:"GET",
            url:"http://localhost:4000/getusers",
            success:function(response){
                setUsers(response);
            }
        })
    })
    function verifyUserId(e){
        for(var user of users){
            if(user.userId === e.target.value){
                setUserError('User Id taken - Try another')
            }else{
                setUserError('User Id available.')
            }
        }
    }
    return (
        <div className="container-fluid">
            <h2>UserDetails</h2>
            <h2>Register User</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" onKeyUp={verifyUserId} value={formik.values.userId} onChange={formik.handleChange} name="userId"></input></dd>
                    <dd>{userError}</dd>
                    <dt>User Name</dt>
                    <dd><input type="text" value={formik.values.userName} onChange={formik.handleChange} name="userName"></input></dd>
                    <dt>Password</dt>
                    <dd><input type="password" value={formik.values.password} onChange={formik.handleChange} name="password"></input></dd>
                    <dt>Age</dt>
                    <dd><input type="number" value={formik.values.Age} onChange={formik.handleChange} name="Age"></input></dd>
                    <dt>Mobile</dt>
                    <dd><input type="text" value={formik.values.Mobile} onChange={formik.handleChange} name="Mobile"></input></dd>
                    <dt>subscription</dt>
                    <dd className="form-switch"><input type="checkbox" className="form-check-input" checked={formik.values.subscribe} onChange={formik.handleChange} name="subscribe"></input> yes</dd>
                </dl>
                <button className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}