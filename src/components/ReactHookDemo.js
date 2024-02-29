import { useEffect, useState } from "react"

export default function ReactHookDemo(){

    //Define useState Hook
    const[msg,setMsg] = useState();

    function handleSuccessClick(){
        setMsg(<SuccessComponent/>)
    }
    function handleErrorClick(){
        setMsg(<ErrorComponent/>)
    }

    return(
        <div className="container-fluid">
            <button onClick={handleSuccessClick}>Success</button>
            <button onClick={handleErrorClick}>Invalid</button>
            <hr/>
            <div>
                {msg}
            </div>
        </div>
    )
}

function SuccessComponent(){

    useEffect(()=>{
        alert('Success Component will Mount');
        return(()=>{
            alert('Success component will unmount');
        })
    })

    return(
        <div>
            <h2>Login Success</h2>
        </div>
    )
}

function ErrorComponent(){

    useEffect(()=>{
        alert('Error Component will Mount');
        return(()=>{
            alert('Error component will unmount');
        })
    })

    return(
        <div>
            <h2>Invalid Login Credentials</h2>
        </div>
    )
    
}