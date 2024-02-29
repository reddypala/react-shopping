import axios from "axios"
import { useFormik } from "formik"
import { Link, useNavigate } from "react-router-dom"

export default function IShopRegister() {

     let navigate = useNavigate();
    const formik = useFormik(({
        initialValues: {
            userId: '',
            userName: '',
            password: '',
            Age: 0,
            Mobile: '',
            subscribe: false
        },
        onSubmit: values => {
            axios.post("http://localhost:4000/registeruser", values);
            navigate("/login")

        }
    }))
    return (
        <div>
            <h2>Register New User</h2>
            {/* <button onClick={HandleButtonClick}>Goto Login</button> */}
            <form onSubmit={formik.handleSubmit}>
                <dl>
                    <dt>UserId</dt>
                    <dd><input type="text" value={formik.values.userId} onChange={formik.handleChange} name="userId"></input></dd>

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
                <br />
                <Link to="/login">Already Have account?</Link>
            </form>
        </div>

    )
}