// externalStore.js
let currentState = 0;
const listeners = new Set();

export function increment() {
  currentState++;
  listeners.forEach(listener => listener());
}

export function getSnapshot() {
  return currentState;
}

export function subscribe(listener) {
  listeners.add(listener);
  return () => listeners.delete(listener);
}
