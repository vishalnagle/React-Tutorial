import React, { useRef, useState } from 'react';

function CounterRef() {
  const count = useRef(0);

  console.log("component rendered")

  const increment = () => {
    count.current += 1;
    console.log(`Current Count: ${count.current}`); // Logs the updated count
  };

  // You can use useRef to store mutable values that don't require re-rendering when updated.

  return (
    <div>
      <p>Check the console for the count value!</p>
      <button onClick={increment}>Increment Count</button>
    </div>
  );
}

export default CounterRef;
