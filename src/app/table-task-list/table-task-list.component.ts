import { Component, OnInit, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { Task } from '../modules/task.model';
import { TasksListService } from '../services/tasks-list.service';
import { TasksListActions, TasksActions } from '../state/tasks.actions';
import { selectTaskList } from '../state/tasks.selectors';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-table-task-list',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    SelectModule,],
  templateUrl: './table-task-list.component.html',
  styleUrl: './table-task-list.component.scss'
})
export class TableTaskListComponent implements OnInit{


  serviceTasksList = inject(TasksListService);
  store = inject(Store);

  tasks$: Observable<any> | undefined;
  taskslist: Task[] = [];
  searchQuery: string = '';


  ngOnInit(): void {

    this.serviceTasksList
    .getTasks()
    .subscribe((tasks: Task[]) =>
      this.store.dispatch(TasksListActions.retrievedTaskList({ tasks }))
    );

    this.tasks$ = this.store
      .select(selectTaskList)
      .pipe(map((tasks) => [...tasks]));
  }

  onRemove(taskId: number) {
    this.store.dispatch(TasksActions.removeTask({ taskId }));
  }


  //   // this.tasks$?.subscribe(tasks => {
  //   //   console.log('Текущие Store:', tasks);
  //   // });
  // }


}
