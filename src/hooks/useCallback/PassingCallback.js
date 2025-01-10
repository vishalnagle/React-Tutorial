
import React, { useState,useCallback } from "react"

const Child = ({onClick})=>{

    console.log("child rendered!")

    return <button onClick={onClick}>Click Me</button>

}


const MemoizedChild = React.memo(Child)

const PassingCallback = ()=>{
    const [count,setCount] = useState(0);

    console.log("parent rendered")

    const handleClick = useCallback(()=>{
        setCount((prev)=>prev+1)
    },[])


    // The Child component is wrapped with React.memo, meaning it will only re-render if its props change.
    // Since handleClick is memoized, the Child component doesn’t re-render unnecessarily.


    return (<div>
        <h1>Count: {count}</h1>
        <MemoizedChild onClick={handleClick}/>
    </div>)
}

export default PassingCallback;