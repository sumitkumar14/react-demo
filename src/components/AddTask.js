import React, {useRef}  from "react";
import { useDispatch, useSelector } from "react-redux";
import TaskComponent from './TaskComponent.js'
import { addTask, clearTask, updateTaskDescription, updateTaskTitle } from "../store/taskActions.js";

const styles = {
    taskContainer: {
        display: "flex",
        flexDirection: "column",
        width: "350px"
    },
    mainContainer: {
        textAlign: '-webkit-center',
        height: "100vh"
    }
}

function AddTasks() {
    const titleRef = useRef(null);
    const descRef = useRef(null);
    const dispatch = useDispatch();
    const taskTitle = useSelector(state => state.task.taskTitle)
    const taskDescription = useSelector(state => state.task.taskDescription)
    const tasks = useSelector(state => state.task.tasks)

    const onAddTask = () => {
        const task = {
            title: taskTitle,
            description: taskDescription,
            id: Date.now(),
        }
        titleRef.current.value = "";
        descRef.current.value = "";

        dispatch(addTask(task))
    };
    const onClearTask = (id) => {
       window.alert(id);
        dispatch(clearTask(id))
    };
    const onTaskTitleChange = (e) => dispatch(updateTaskTitle(e.target.value))
    const onTaskDescriptionChange = (e) => dispatch(updateTaskDescription(e.target.value))

    return (
        <div className="d-flex justify-content-center mt-4" style={styles.mainContainer}>
            <div style={styles.taskContainer}>
                <input type="text" ref={titleRef} className="border" placeholder="Task Title" onChange={onTaskTitleChange} />
                <input type="text" ref={descRef} className="border mt-2" placeholder="Task Description" onChange={onTaskDescriptionChange}
                />
                <button className="mt-2 text-white bg-primary" onClick={onAddTask}>Add Task</button>
                <div className="row mt-2">
                <div className="font-weight-bold col-3 pr-2">Task Title</div>
                    <div className="font-weight-bold col-6 pr-2">Task description</div>
                    <div className="font-weight-bold col-3 pr-2">Action</div>
                </div>
                {tasks.map(task => <TaskComponent task={task} id={task.id} onClear={onClearTask}/>
                )}
            </div>
        </div>
    );
}
export default AddTasks;