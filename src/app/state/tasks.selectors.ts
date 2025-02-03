import { createFeatureSelector, createSelector } from "@ngrx/store";
import { Task } from "../modules/task.model";

export const getSelectTasks = createFeatureSelector<ReadonlyArray<Task>>('tasksListReducer'); //- taskReduce - ключ из app.config
export const selectTaskList = createSelector(
    getSelectTasks,
     (tasks) => { return tasks}
);

export const selectCollectionState = createFeatureSelector<ReadonlyArray<number>>('tasksListReducer');
export const selectTaskCollection = createSelector(
  getSelectTasks,
  selectCollectionState,
  (tasklist, collection) => {
    return collection.map((id) => tasklist.find((task) =>  task.id === id)!); 
  }
);

