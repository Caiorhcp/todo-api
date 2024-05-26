
import { Task } from "../models/task-model";
import { TasksRepository } from "../repositories/tasks-repository";

interface UpdateTaskInput {
    title?: string;
    description?: string;
    done?: boolean;
}

export class UpdateTaskService {
    private readonly tasksRepository: TasksRepository;

    constructor() {
        this.tasksRepository = new TasksRepository();
    }

    public async exec(id: number, data: UpdateTaskInput): Promise<Task | null> {
        const task = await this.tasksRepository.update(id, data);
        return task;
    }
}
