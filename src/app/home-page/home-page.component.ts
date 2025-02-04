import { Component, OnInit, ViewChild, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormAddTaskBlockComponent } from "../form-add-task-block/form-add-task-block.component";
import { ButtonModule } from 'primeng/button';
import { TableTaskListComponent } from "../table-task-list/table-task-list.component";

@Component({
  selector: 'app-home-page',
  imports: [
    CommonModule, ButtonModule,
    FormAddTaskBlockComponent,
    TableTaskListComponent
],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent implements OnInit {
  @ViewChild('FormAddTaskBlockComponent') formAddTaskBlockComponent!: FormAddTaskBlockComponent;


  toggleTaskForm() {
    this.formAddTaskBlockComponent.openDialogAddTask()
  }



  ngOnInit(): void {

  }
}