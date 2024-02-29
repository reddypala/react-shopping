import axios from "axios";
import { useState, useEffect } from "react";

export default function AxiosDemo() {
    const [users, setUsers] = useState([]);
    useEffect(()=>{
        axios.get("http://localhost:4000/getusers")
        .then(function(response){
            setUsers(response.data);
        }).catch((ex)=>console.log(ex))
        
    },[])
    return (
        <div className="container-fluid">
            <h2>Users</h2>
            <ol>
                {
                    users.map(user=>
                        <li key={user.userId}>{user.userId}</li>    
                    )
                }
            </ol>
        </div>
    )
}