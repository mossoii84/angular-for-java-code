import { TaskPriority } from "../enum/taskpriority.enum";
import { TaskStatus } from "../enum/taskstatus.enum";
import { InterfaceTask } from "../interfaces/task";


export class Task implements InterfaceTask {
    id:number;
    title: string | undefined;
    discription? : string | undefined;
    datelimite: number | undefined;
    priority: TaskPriority | undefined;
    status: TaskStatus | undefined;
    user: string | undefined;


  constructor(date: InterfaceTask) {
    this.id = date.id;
    this.title = date.title;
    this.discription = date.discription;
    this.datelimite = date.datelimite;
    this.priority = date.priority;
    this.status = date.status;
    this.user = date.user;
  }


}