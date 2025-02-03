import { TaskPriority } from "../enum/taskpriority.enum";
import { TaskStatus } from "../enum/taskstatus.enum";

export interface InterfaceTask {
    id: number;
    title: string | undefined;
    discription? : string | undefined;
    datelimite: number | undefined;
    priority: TaskPriority | undefined;
    status: TaskStatus | undefined;
    user: string | undefined;
}
