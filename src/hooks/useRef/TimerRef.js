import React, { useRef, useState, useEffect } from 'react';

function TimerRef() {
  const timerId = useRef(null);
  const [count, setCount] = useState(0);

  useEffect(() => {
    timerId.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerId.current); // Cleanup on unmount
  }, []);

//   If you need to persist values (like timers or previous states) across renders without triggering updates, useRef is useful.

  return (
    <div>
      <h1>Timer: {count}</h1>
      <button onClick={() => clearInterval(timerId.current)}>Stop Timer</button>
    </div>
  );
}

export default TimerRef;
