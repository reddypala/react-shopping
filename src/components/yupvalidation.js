import * as yup from 'yup';
import { useFormik } from 'formik';
export default function YupValidation() {

    const formik = useFormik({
        initialValues: {
            UserName: '',
            Email: '',
            Age: 0
        },
        validationSchema: yup.object({
            UserName: yup.string().required('User name required').min(4, 'Name too short')
                .max(10, 'Name too long'),
            Email: yup.string()
                .required('Email Required')
                .email('Invalid Email'),
            Age: yup.number('Age must be number').required('Age required')
        })
    })

    return (
        <div className="container-fluid">
            <form onSubmit={formik.handleSubmit}>
                <h2>Register</h2>
                <dl>
                    <dt>User Name</dt>
                    <dd>
                        <input {...formik.getFieldProps("UserName")} type="text"></input>
                    </dd>
                    <dd className='txt-danger'>{formik.errors.UserName}</dd>
                    <dt>Email</dt>
                    <dd>
                        <input {...formik.getFieldProps("Email")} type="email"></input>
                    </dd>
                    <dd className='txt-danger'>{formik.errors.Email}</dd>
                    <dt>Age</dt>
                    <dd><input {...formik.getFieldProps("Age")} type="text"></input></dd>
                    <dd className='txt-danger'>{formik.errors.Age}</dd>
                </dl>
                <button>Register</button>
            </form>
        </div>
    )
}