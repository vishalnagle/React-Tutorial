
import { useState,useDebugValue } from "react";

const useCounter = (initialValue=0)=>{
    const [count,setCount] = useState(initialValue)

    // Adding a debug label
    useDebugValue(count,(value)=>`Count is ${value}`)

    return [count,setCount]
}


const DebugCounter = ()=>{
    const [count,setCount] = useCounter(5)


    return (<div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>)

}

export default DebugCounter;