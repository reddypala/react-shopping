import { useState } from "react";

export default function CounterApp() {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1);
    }
    const Decrement = () => {
        setCount(count - 1);
    }

    return (
        <div className="container-fluid mt-4">
            <button onClick={Increment}>Increment</button>
            <button onClick={Decrement}>Decrement</button>
            <p>count:{count}</p>
        </div>
    )
}
