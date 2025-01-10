import React,{useState,useMemo} from "react";


const MemoBasicUsage = ()=>{
    const [count,setCount] = useState(0);
    const [text,setText] = useState("")

    const expensiveCalculation = (num)=>{
        console.log("calculating...")
        for(let i=0;i<100;i++){} //heavy computation
        return num * 2
    }
    // I set the loop till 1000000000 but the system got hanged so setted to 100
    // The expensiveCalculation function only runs when count changes, not when text changes.

    const memoizedValue = useMemo(()=>expensiveCalculation(count),[count])



    return (<div>
        <h1>Count: {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <h1>Memoized value: {memoizedValue}</h1>
        <input type="text" value={text} onChange={(e)=>setText(e.target.value)}/>
    </div>)
}

export default MemoBasicUsage;