import { createActionGroup, props } from "@ngrx/store";
import { Task } from "../modules/task.model";

//service for get tasks list
export const TasksListActions = createActionGroup({
  source: 'Task API',
  events: {
    'Retrieved Task List': props<{ tasks: ReadonlyArray<Task> }>(),
  },
});

//service for add/delete task
export const TasksActions = createActionGroup({
    source: 'Tasks',
    events: {
      'Add Task': props<{ task: Task }>(), 
      'Remove Task': props<{ taskId: number }>(),
    },
  });




  