import { useEffect } from "react";
import { useState } from "react"

export default function CounterApp(){
    const [count,setCount] = useState(0);

    useEffect(()=>{
        setTimeout(()=>{
            setCount(count+1)
        },2000)
    })
    return(
        <div className="container-fluid">
            <h2>count is called {count} times</h2>
        </div>
    )
} 