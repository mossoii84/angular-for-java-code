import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { Task } from '../modules/task.model';
import { Store } from '@ngrx/store';
import { TasksActions, TasksListActions } from '../state/tasks.actions';
import { TasksListService } from '../services/tasks-list.service';
import { Observable, map } from 'rxjs';
import { selectTaskList } from '../state/tasks.selectors';
import { FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { SelectModule } from 'primeng/select';
import { FormAddTaskBlockComponent } from "../form-add-task-block/form-add-task-block.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule,
    ButtonModule,
    TableModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    SelectModule,
    FormAddTaskBlockComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  @ViewChild('FormAddTaskBlockComponent') formAddTaskBlockComponent!: FormAddTaskBlockComponent;

  serviceTasksList = inject(TasksListService);
  store = inject(Store);

  tasks$: Observable<any> | undefined;
  taskslist: Task[] = [];
  searchQuery: string = '';
  // taskPriority = TaskPriority;
  // taskStatus = TaskStatus;

  toggleTaskForm() {
    this.formAddTaskBlockComponent.openDialogAddTask()
  }


  onRemove(taskId: number) {
    this.store.dispatch(TasksActions.removeTask({ taskId }));
  }

 
  ngOnInit(): void {
    this.serviceTasksList
      .getTasks()
      .subscribe((tasks: Task[]) =>
        this.store.dispatch(TasksListActions.retrievedTaskList({ tasks }))
      );

    this.tasks$ = this.store
      .select(selectTaskList)
      .pipe(map((tasks) => [...tasks]));

    // this.tasks$?.subscribe(tasks => {
    //   console.log('Текущие Store:', tasks);
    // });
  }
}
