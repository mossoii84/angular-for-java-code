import { createActionGroup, props } from "@ngrx/store";
import { Task } from "../modules/task.model";

//сервис для получения списка task
export const TasksListActions = createActionGroup({
  source: 'Task API',
  events: {
    'Retrieved Task List': props<{ tasks: ReadonlyArray<Task> }>(),
  },
});

//сервис для создание/удаление task
export const TasksActions = createActionGroup({
    source: 'Tasks',
    events: {
      'Add Task': props<{ task: Task }>(), //добавляем всю задачу
      'Remove Task': props<{ taskId: number }>(), //удаляем задачу по id
    },
  });




  