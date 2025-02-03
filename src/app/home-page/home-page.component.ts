import { Component, OnInit, inject } from '@angular/core';
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
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import { DatePickerModule } from 'primeng/datepicker';
import { TaskPriority } from '../enum/taskpriority.enum';
import { SelectModule } from 'primeng/select';
import { TaskStatus } from '../enum/taskstatus.enum';

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
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  serviceTasksList = inject(TasksListService);
  store = inject(Store);

  tasks$: Observable<any> | undefined;
  taskslist: Task[] = [];
  visible: boolean = false;
  searchQuery: string = '';
  taskPriority = TaskPriority;
  taskStatus = TaskStatus;

  //form 
  profileForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[0-9]+$/),
    ]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    discription: new FormControl('', [Validators.minLength(5)]),
    datelimite: new FormControl<any>(''),
    priority: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

  onAdd(form: FormGroup) {
    const task: Task = form.value;
    console.log('Task:', task);
    this.store.dispatch(TasksActions.addTask({ task }));
    form.reset();
    this.visible = false;
  }

  onRemove(taskId: number) {
    this.store.dispatch(TasksActions.removeTask({ taskId }));
  }

  addNewTask() {
    this.visible = true;
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
