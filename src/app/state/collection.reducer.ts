import { createReducer, on } from '@ngrx/store';
import { TasksActions, TasksListActions } from './tasks.actions';

export const initialState: ReadonlyArray<number> = [];

//добавляем удаляем таски
// export const collectionReducer = createReducer(
//   initialState,
//   on(TasksActions.removeTask, (state, { taskId }) =>
//     state.filter((id) => id !== taskId)
//   ),
//   on(TasksActions.addTask, (state, { taskId }) => {
//     if (state.indexOf(taskId) > -1) return state;
//     return [...state, taskId];
//   }),




// );
