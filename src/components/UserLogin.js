import { useEffect, useState } from "react"
import { useCookies } from "react-cookie"


export default function UserLogin() {
    const [cookie, setCookie, removeCookie] = useCookies(['userName']);
    const [userDetails, setUserDetails] = useState({
        UserName: '',
        Password: ''
    })

    function handleUserName(e) {
        setUserDetails({
            UserName: e.target.value,
            Password: userDetails.Password
        })
    }
    function handlePassword(e) {
        setUserDetails({
            UserName: userDetails.UserName,
            Password: e.target.value
        })
    }
    function handleLogin(e) {
        //setCookie after login click
        setCookie('userName', userDetails.UserName, { path: "/", expires: new Date('2024-02-01 14:30') });
        alert("Login success....");

    }
    function handleSignout() {
        removeCookie('userName');
        alert('signed out successfully..')
    }
    useEffect(() => {
        if (cookie.userName === undefined) {
            alert('Please Login');
        }
    })
    return (
        <div className="container-fluid">
            <h2>User Login</h2>
            <dl>
                <dt>User Name</dt>
                <dd><input onChange={handleUserName} type="text"></input></dd>
                <dt>Password</dt>
                <dd><input onChange={handlePassword} type="password"></input></dd>
                <dt>Verify Captcha</dt>
                <dd></dd>
            </dl>
            <button onClick={handleLogin}>Login</button>
            <hr />
            <h3>Home <button className="btn btn-link" onClick={handleSignout}>SignOut</button></h3>
            Hello! {cookie.userName}

        </div>
    )
}