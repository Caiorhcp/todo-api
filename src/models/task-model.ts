export interface Task {
    id: number;
    title: string;
    description: string | null;
    projectId: number;
    done: boolean;
    createdAt: Date;
    updatedAt: Date;
}