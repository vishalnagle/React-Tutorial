
import React, { useCallback,useState } from "react";


const ChildComponent = ({compute})=>{

    console.log("Child rendered")    
    return <h1>{compute()}</h1>

}

const MemoizedChildComponent = React.memo(ChildComponent)

const ExpensiveOperation = ()=>{
    const [count,setCount] = useState(0);


    const computeExpensiveValue = useCallback(()=>{
        console.log("computing...")
        return count * 2
    },[count])

    // computeExpensiveValue is memoized and only re-created when count changes.
    // This prevents ChildComponent from re-rendering unnecessarily.


    return (<div>
        <button onClick={()=>setCount((prev)=>prev+1)}>Increment</button>
        <MemoizedChildComponent compute={computeExpensiveValue}/>
    </div>)

}

export default ExpensiveOperation;