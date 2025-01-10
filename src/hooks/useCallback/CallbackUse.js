
import { useCallback, useState } from "react";

const CallbackUse = () => {
    const [count, setCount] = useState(0);

    const incrementCount = useCallback(() => {
        console.log("incrementCount called")
        setCount((prev) => prev + 1)
    }, [])

    // Dependencies are empty, so `increment` remains the same between renders.
    // Here, the increment function is memoized and won’t be re-created on every render.


    return (<div>
        <h1>Count:  {count}</h1>
        <button onClick={incrementCount}>Increment</button>
    </div>)
}

export default CallbackUse;