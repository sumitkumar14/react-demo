import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTask, updateTaskDescription, updateTaskTitle} from "../store/taskActions.js";

const styles = {
    taskContainer: {
        display: "flex",
        flexDirection: "column",
        width: "350px"
    },
    mainContainer: {
        textAlign: '-webkit-center'
    }
}

function AddTasks() {
    const dispatch = useDispatch();
    const taskTitle = useSelector(state => state.task.taskTitle)
    const taskDescription = useSelector(state => state.task.taskDescription)
    const tasks = useSelector(state => state.task.tasks)

    const onAddTask = () => {
        const task = {
            title: taskTitle,
            description: taskDescription,
        }
        dispatch(addTask(task))
    };
    const onTaskTitleChange = (e) => dispatch(updateTaskTitle(e.target.value))
    const onTaskDescriptionChange = (e) => dispatch(updateTaskDescription(e.target.value))

    return (
        <div style={styles.mainContainer}>
            <div style={styles.taskContainer}>
                <input type="text" placeholder="Task Title" onChange={onTaskTitleChange}  />
                <input type="text" placeholder="Task Description" onChange={onTaskDescriptionChange}
                        />
                <button onClick={onAddTask}>Add Task</button>
                {tasks.map(task => <><div>{task.title}</div><div>{task.description}</div></>)}
            </div>
        </div>
    );
}
export default AddTasks;