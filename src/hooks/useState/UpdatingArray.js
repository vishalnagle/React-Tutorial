import { useState } from "react";

const UpdatingArray = () => {
    const [tasks, setTasks] = useState([])

    const addNewTask = () => {
        setTasks([...tasks, `new_task_${tasks.length + 1}`])
    }


    return <div>
        <button onClick={addNewTask}>Add task</button>
        {tasks.map((task, index) => (
            <h1 key={index}>{task}</h1>
        ))}
    </div>

}

export default UpdatingArray;