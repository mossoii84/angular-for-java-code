import { createReducer, on } from "@ngrx/store";
import { Task } from "../modules/task.model";
import { TasksActions, TasksListActions } from "./tasks.actions";

export const initialState: ReadonlyArray<Task> = [];
//извлекаем(читаем) состояние task
export const tasksListReducer = createReducer(
  initialState,
  on(TasksListActions.retrievedTaskList, (_state, { tasks }) => tasks), //выводим весь массив
  on(TasksActions.removeTask, (state, { taskId }) => 
    state.filter((task) => task.id !== taskId) // Удаляем задачу с данным ID
  ),
  on(TasksActions.addTask, (state, { task }) => {
    // if (state.indexOf(task) > -1) {
    //    return state;
    // }
    return [...state, task];
  }),
);
