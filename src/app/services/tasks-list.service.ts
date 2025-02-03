import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Task } from '../modules/task.model';

@Injectable({
  providedIn: 'root'
})
export class TasksListService {
  private jsonUrl = '/assets/taskList.json';

  http = inject(HttpClient);

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.jsonUrl).pipe(map((tasks)=> tasks || []));
  }


}
