import React, { useRef, useEffect, useState } from 'react';

function PreviousStateRef() {
  const [count, setCount] = useState(0);
  const prevCount = useRef(count);

  useEffect(() => {
    prevCount.current = count; // Update the previous count on each render
  }, [count]);

//   useRef can hold the previous state or props for comparison purposes.


  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {prevCount.current}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default PreviousStateRef;
