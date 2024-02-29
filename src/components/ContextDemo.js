import React, { useContext, useState } from 'react';

var userDetailsContext = React.createContext(null);
export default function ContextDemo() {
   
    const [userDetails, setDetails] = useState({
        userName: '',
        Email: ''
    })

    function handleUserDetails(e){
        setDetails({
            userName:e.target.value,
            Email:userDetails.Email
        })
    }
    function handleEmail(e){
        setDetails({
            userName:userDetails.userName,
            Email:e.target.value
        })
    }
    function handleSet(e){
        setDetails({
            userName:userDetails.userName,
            Email:userDetails.Email
        })
    }

    return (

        <userDetailsContext.Provider value={userDetails}>
            <div className="container-fluid">
                <h1>Site Index - {userDetails.userName}</h1>
                <dl>
                    <dt>User Name</dt>
                    <dd><input onChange={handleUserDetails} type='text'></input></dd>
                    <dt>Email</dt>
                    <dd><input onChange={handleEmail} type='email'></input></dd>
                </dl>
                <button onClick={handleSet}>SetData</button>
                <HeaderComponent />
            </div>
        </userDetailsContext.Provider>

    )
}


function HeaderComponent() {
   const userdetails = useContext(userDetailsContext);
    return (
        <div className="bg-info text-white" style={{ height: '150px', padding: '10px' }}>
            <h2>Home - {userdetails.userName}</h2>
            <NavBarComponent />
        </div>
    )
}

function NavBarComponent() {
    const userdetails = useContext(userDetailsContext);

    return (
        <div className="btn-toolbar bg-dark text-white justify-content-between">
            <div className="btn-group">
                <button className="btn btn-dark">Amazon</button>
            </div>
            <div className="btn-group">
                <button className="btn btn-dark">{userdetails.Email}</button>
            </div>

        </div>
    )
}