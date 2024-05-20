import { ADD_TASK, CLEAR_TASK, UPDATE_TASK_DESCRIPTION, UPDATE_TASK_TITLE } from "./taskActionTypes";

const initialState = {
    tasks: [],
    taskTitle: "",
    taskDescription: ""
};

const taskReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TASK:
            return {
                ...state,
                tasks: [...state.tasks, action.payload],
                taskTitle: "",
                taskDescription: ""
            };
        case CLEAR_TASK:
            return {
                ...state,
                tasks: [...state.tasks.filter(x => x.id !== action.payload)],
            };
        case UPDATE_TASK_TITLE:
            return {
                ...state,
                taskTitle: action.payload,
            }
        case UPDATE_TASK_DESCRIPTION:
            return {
                ...state,
                taskDescription: action.payload,
            }
        default:
            return state;
    }
};

export default taskReducer;
