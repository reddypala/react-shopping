import { useState, useEffect } from "react";

export default function EventBindingComponent(){
    //state to track the input value
    const [inputValue, setInputValue] = useState('John');

    function handleUserName(e){
        setInputValue(e.target.value);
    }

    return(

        <div className="container-fluid">
            <dl>
                <dt>UserName</dt>
                <dd><input type="text" value={inputValue} onChange={handleUserName}></input></dd>
            </dl>

            <h3>Hello!{inputValue}</h3>

        </div>







    )
}