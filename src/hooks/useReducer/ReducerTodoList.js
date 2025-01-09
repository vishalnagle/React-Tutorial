
import { useReducer } from "react";

const initialState = {
    todos: [],
    inputText: ""
}

const reducer = (state, action) => {
    switch (action.type) {
        case "addTodo":
            return { ...state, todos: [...state.todos, { id: Date.now(), text: action.text }], inputText: "" }
        case "removeTodo":
            return { ...state, todos: state.todos.filter((todo) => todo.id !== action.id) }
        case "clearTodos":
            return { ...state, todos: [] }
        case "todoText":
            return { ...state, inputText: action.value }
        default:
            new Error("Unknown action type")
    }
}

const ReducerTodoList = () => {
    const [todoState, dispatch] = useReducer(reducer, initialState)


    const handleAddTodo = () => {
        dispatch({
            type: "addTodo",
            text: todoState.inputText
        })
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: "removeTodo",
            id
        })
    }

    const handleClearTodos = () => {
        dispatch({
            type: "clearTodos"
        })
    }

    console.log("todoState", todoState)

    return (<div>
        <h1>Todo List</h1>
        <input type="text" value={todoState.inputText} onChange={(e) => dispatch({ type: "todoText", value: e.target.value })} />
        <button onClick={handleAddTodo}>Add todo</button>
        <button onClick={handleClearTodos}>Clear Todos</button>

        {todoState.todos.map((todo, index) => {
            return <h1 key={index} onClick={() => handleDeleteTodo(todo.id)}>
                {todo.text}
            </h1>
        })}

    </div>)
}

export default ReducerTodoList;