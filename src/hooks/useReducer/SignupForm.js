
import { useReducer } from "react";

const initialState = {
    username: "",
    email: "",
    password: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "updateField":
            return { ...state, [action.field]: action.value }
        case "reset":
            return initialState
        default:
            throw new Error("Unknown action type")
    }
}

const SignupForm = () => {
    const [formState, dispatch] = useReducer(reducer, initialState);

    const handleChange = (e) => {
        dispatch({
            type: "updateField",
            field: e.target.name,
            value: e.target.value
        })
    }

    const handleReset = () => {
        dispatch({
            type: "reset"
        })
    }

    console.log("form", formState)


    return (<div>
        <form>
            <label>
                Username:
                <input
                    type="text"
                    name="username"
                    value={formState.username}
                    onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Email:
                <input
                    type="text"
                    name="email"
                    value={formState.email}
                    onChange={handleChange}
                />
            </label>
            <br />

            <label>
                Password:
                <input
                    type="text"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                />
            </label>
            <br />
        </form>
        <button onClick={handleReset}>Reset</button>
    </div>)

}

export default SignupForm;