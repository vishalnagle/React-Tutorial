
import React,{useMemo,useState} from 'react'

const ReCreationFunc = () => {
    const [count, setCount] = useState(0);

    const handleClick = useMemo(()=>()=>{
        console.log(`Clicked count is ${count}`)
    },[count])

// The handleClick function is only recreated when count changes, which can help avoid unnecessary re-renders when passing it as a prop to child components.

  return (
    <div>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <button onClick={handleClick}>Log Count</button>
    </div>
  )
}

export default ReCreationFunc