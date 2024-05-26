import { PrismaClient } from '@prisma/client';
import { Task } from '../models/task-model';

export class TasksRepository {
    private prisma: PrismaClient;

    constructor() {
        this.prisma = new PrismaClient();
    }

    public async listAll(): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany();
        return tasks;
    }

    public async getById(id: number): Promise<Task | null> {
        const task = await this.prisma.task.findUnique({
            where: { id }
        });
        return task;
    }

    public async create(title: string, description: string | null, projectId: number): Promise<Task> {
        const now = new Date();
        const task = await this.prisma.task.create({
            data: {
                title,
                description,
                projectId,
                done: false,
                createdAt: now, 
                updatedAt: now, 
            }
        });

        return task;
    }

    public async update(id: number, data: Partial<Task>): Promise<Task | null> {
        const now = new Date();
        const task = await this.prisma.task.update({
            where: { id },
            data: {
                ...data,
                updatedAt: now 
            }
        });

        return task;
    }

    public async delete(id: number): Promise<void> {
        await this.prisma.task.delete({
            where: { id }
        });
    }

    public async findByName(name: string): Promise<Task[]> {
        const tasks = await this.prisma.task.findMany({
            where: { name }
        });

        return tasks;
    }
}
