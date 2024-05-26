import { TasksRepository } from '../repositories/tasks-repository';

export class DeleteTaskService {
    private readonly tasksRepository: TasksRepository;

    constructor() {
        this.tasksRepository = new TasksRepository();
    }

    public async exec(id: number): Promise<void> {
        await this.tasksRepository.delete(id);
    }
}
