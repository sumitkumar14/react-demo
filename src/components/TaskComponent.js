function TaskComponent({ task, onClear }) {
    return <>
        <div className="row">
            <div className="font-weight-bold col-3 pr-2">{task.title}</div>
            <div className="font-weight-bold col-6 pr-2">{task.description}</div>
            <button className="mt-2 text-white bg-danger col-3" onClick={() => onClear(task)}>clear</button>
        </div></>
}
export default TaskComponent;