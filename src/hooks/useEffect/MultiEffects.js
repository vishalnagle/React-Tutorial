import { useState, useEffect } from "react";

const MultiEffects = () => {
    const [count, setCount] = useState(0)
    const [color, setColor] = useState("red")

    useEffect(() => {
        console.log("first useEffect")
    }, [count])

    useEffect(() => {
        console.log("second useEffect")
    }, [color])

    return (<div>
        <h1>{count}</h1>
        <h1>{color}</h1>
        <button onClick={() => setCount(count + 1)}>Increase count</button>
        <button onClick={() => setColor(color === "red" ? "blue" : "red")}>Change color</button>
    </div>)
}

export default MultiEffects;