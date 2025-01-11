// CounterComponent.js
import React from 'react';
import { useSyncExternalStore } from 'react';
import { getSnapshot, subscribe, increment } from './externalStore';

function StoreCounterComponent() {
  const count = useSyncExternalStore(subscribe, getSnapshot);

  return (
    <div>
      <h1>StoreCounterComponent: {count}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
}

export default StoreCounterComponent;
