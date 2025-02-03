import { createReducer, on } from "@ngrx/store";
import { Task } from "../modules/task.model";
import { TasksActions, TasksListActions } from "./tasks.actions";

export const initialState: ReadonlyArray<Task> = [];
//read task state
export const tasksListReducer = createReducer(
  initialState,
  on(TasksListActions.retrievedTaskList, (_state, { tasks }) => tasks), //get all tasks list
  on(TasksActions.removeTask, (state, { taskId }) => 
    state.filter((task) => task.id !== taskId) // delete task byId
  ),
  on(TasksActions.addTask, (state, { task }) => {
    return [...state, task];
  }),
);
