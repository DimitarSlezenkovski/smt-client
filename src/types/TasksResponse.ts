export interface Task {
    id: number
    created_at: string;
    user_id: number;
    title: string;
    description: string;
    due_date: Date;
    status: string;
}

export interface TaskRequest {
    user_id: number;
    title: string;
    description: string;
    due_date: Date;
    status: string;
}
