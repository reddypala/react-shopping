import { useRef, useState } from "react"

export default function FormComponent() {
    const [userMsg, setUserMsg] = useState('');
    const [isUserValid, setUserValid] = useState(false);
    const [pwdMsg, setPwdMsg] = useState('');
    const [capStatus, setCapsStatus] = useState(false);
    const [cityMsg, setCityMsg] = useState('');
    const [userDetails, setUserDetails] = useState(
        { UserId: '', password: '', city: '' }
    );
    const [users] = useState([
        { UserId: 'John' },
        { UserId: 'John12' },
        { UserId: 'david' },
        { UserId: 'John_nit' },
    ]);

    function verifyUserId(e) {
        for (var user of users) {
            if (user.UserId === e.target.value) {
                setUserMsg('User Id Taken ~ Try another');
                setUserValid(false);
                break;
            } else {
                setUserMsg('User Id Available');
                setUserValid(true);
            }
        }

    }
    function hideUserMsg(e) {
        if (e.target.value === '') {
            setUserMsg('User Id Required')
        } else {
            setUserMsg('');
        }


    }
    function hidePwdMsg() {
        setPwdMsg('');
        setCapsStatus(false);
    }
    function verifyPassword(e) {
        if (e.target.value.match(/(?=.*[A-Z])\w{4,10}/)) {
            setPwdMsg('Strong Password');
        } else {
            if (e.target.value.length < 4) {
                setPwdMsg('Poor Password');
            } else {
                setPwdMsg('Weak Password');
            }
        }
    }
    function verifyCaps(e) {
        if ((e.keyCode >= 65 && e.keyCode <= 90) || (e.which >= 65 && e.which <= 90)) {
            setCapsStatus(true);
        } else {
            setCapsStatus(false);
        }
    }
    function verifyCity(e) {
        if (e.target.value === "notCity") {
            setCityMsg('Please select a City')
        } else {
            setUserDetails({
                UserId:userDetails.UserId,
                password: userDetails.password,
                city: e.target.value,
            })
            setCityMsg('')
        }
    }
    function handleUserChange(e) {
        setUserDetails({
            UserId: e.target.value,
            password: userDetails.password,
            city: userDetails.city
        })
    }
    function handlePwdChange(e) {
        setUserDetails({
            UserId: userDetails.UserId,
            password: e.target.value,
            city: userDetails.city
        })
    }
    function RegisterClick(){
        alert(JSON.stringify(userDetails));
    }
    return (
        <div className="container-fluid">
            <h2>Register User</h2>
            <dl>
                <dt>User Id</dt>
                <dd><input type="text" onChange={handleUserChange} onBlur={hideUserMsg} onKeyUp={verifyUserId}></input></dd>
                <dd className={(isUserValid === true) ? 'text-success' : 'text-danger'}>
                    {userMsg}
                </dd>
                <dt>Password</dt>
                <dd>
                    <input type="password" onChange={handlePwdChange} onKeyDown={verifyCaps} onKeyUp={verifyPassword} onBlur={hidePwdMsg}></input>
                </dd>
                <dd>
                    {pwdMsg}
                </dd>
                <dd className={(capStatus === true) ? 'd-block' : 'd-none'}>
                    <span className="text-warning">
                        <span className="bi bi-exclamation-triangle"></span> Caps ON
                    </span>
                </dd>
                <dt>Your City</dt>
                <dd>
                    <select onChange={verifyCity}>
                        <option value="notCity"> Select Your City</option>
                        <option value="Delhi">Delhi</option>
                        <option value="vizag">Vizag</option>
                    </select>
                </dd>
                <dd className="text-danger">
                    {cityMsg}
                </dd>
            </dl>
            <button onClick={RegisterClick}>Register</button>
        </div>
    )
}