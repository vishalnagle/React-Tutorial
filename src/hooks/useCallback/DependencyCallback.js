
import React,{useState,useCallback} from "react";

const DependencyCallback = ()=>{
    const [count,setCount] = useState(0);
    const [step,setStep] = useState(1);


    const increment = useCallback(()=>{
        setCount(count+Number(step))
    },[step])

    // `increment` is re-created whenever `step` changes. 
    // In this case, the increment function depends on step. Changing step will update the function reference.


    return (<div>
        <h1>Count: {count}</h1>
        <button onClick={increment}>Increment</button>
        <input type="number" value={step} onChange={(e)=>setStep(e.target.value)}/>
    </div>)
}


export default DependencyCallback;