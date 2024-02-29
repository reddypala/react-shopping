import axios from "axios";
import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { Link, useNavigate } from "react-router-dom";



export default function IShopLogin() {

    let navigate = useNavigate();
    const [users, setUsers] = useState([]);
    const [cookie,setCookie,removeCookie] = useCookies();
    const formik = useFormik({
        initialValues: {
            userId: '',
            password: ''
        },
        onSubmit: values => {
            for (var user of users) {
                if (user.userId === values.userId && user.password === values.password) {
                    setCookie("userId",user.userId);
                    navigate("/dashboard");
                    break;
                } else {
                    navigate("/errorpage")
                }
            }
        }
    })

    useEffect(() => {
        axios.get("http://localhost:4000/getusers")
            .then(response => {
                setUsers(response.data);
            })
    }, [])
    return (
        <div>
            <h2>User Login</h2>
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" value={formik.values.userId} onChange={formik.handleChange} name="userId" /></dd>
                    <dt>password</dt>
                    <dd><input type="password" value={formik.values.password} onChange={formik.handleChange} name="password" /></dd>
                </dl>
                <button className="btn btn-primary">Login</button>
            </form>
            <br />
            <Link to="/register">New User?</Link>
        </div>

    )
}