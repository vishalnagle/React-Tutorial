
import { useReducer } from "react";

const initialState = 0;

const reducer = (state, action) => {
    switch (action.type) {
        case "increment":
            return state + 1;
        case "decrement":
            return state - 1;
        case "reset":
            return initialState
        default:
            throw new Error("Unknown action type")
    }
}

const ReducerCounter = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    return (<div>
        <h1>{state}</h1>
        <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
        <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </div>)

}

export default ReducerCounter;