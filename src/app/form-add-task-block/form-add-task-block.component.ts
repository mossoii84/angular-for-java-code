import { CommonModule } from '@angular/common';
import { Component, Input, inject, signal } from '@angular/core';
import { ReactiveFormsModule, FormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { DialogModule } from 'primeng/dialog';
import { SelectModule } from 'primeng/select';
import { TaskPriority } from '../enum/taskpriority.enum';
import { TaskStatus } from '../enum/taskstatus.enum';
import { Task } from '../modules/task.model';
import { TasksActions } from '../state/tasks.actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-form-add-task-block',
  imports: [
    CommonModule,
    ButtonModule,
    DialogModule,
    ReactiveFormsModule,
    FormsModule,
    DatePickerModule,
    SelectModule,],
  templateUrl: './form-add-task-block.component.html',
  styleUrl: './form-add-task-block.component.scss'
})
export class FormAddTaskBlockComponent {

  store = inject(Store);

  //from parent
  isVisible = signal(false);
  openDialogAddTask() {
    this.isVisible.update(value => !value);
  }

  taskPriority = TaskPriority;
  taskStatus = TaskStatus;


  onAdd(form: FormGroup) {
    const task: Task = form.value;
    console.log('Task:', task);
    this.store.dispatch(TasksActions.addTask({ task }));
    form.reset();
    this.isVisible.update(value => !value);

  }


    //form 
  profileForm = new FormGroup({
    id: new FormControl('', [
      Validators.required,
      Validators.minLength(1),
      Validators.pattern(/^[0-9]+$/),
    ]),
    title: new FormControl('', [Validators.required, Validators.minLength(3)]),
    discription: new FormControl('', [Validators.minLength(5)]),
    datelimite: new FormControl<any>('',[Validators.required]),
    priority: new FormControl('', [Validators.required]),
    status: new FormControl('', [Validators.required]),
    user: new FormControl('', [Validators.required, Validators.minLength(3)]),
  });

}
