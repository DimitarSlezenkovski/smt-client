import store from "../../../config/store.config";
import { setTasks } from "../../../context/tasksSlice/actions";
import { Task, TaskRequest } from "../../../types/TasksResponse";
import { ApiClient } from "../../api/apiClient";
import uriObject from "../../uris/index.uri";

interface ITasksApiClient {
    getTasks(): Promise<Task[] | undefined>
    addTask(request: TaskRequest): Promise<Task[] | undefined>
}

export class TasksApiClient extends ApiClient implements ITasksApiClient {
    
    async addTask(request: TaskRequest): Promise<Task[] | undefined> {
        try {
            const response = await this.post<TaskRequest, Task[]>(`${this.apiBase}${uriObject.tasksUris.tasks}`, request)
      
            return response
        } catch (error) {
            console.error('ERR::LOGIN', error)
        }
    }

    async getTasks(): Promise<Task[] | undefined> {
        try {
            const response = await this.get<Task[]>(`${this.apiBase}${uriObject.tasksUris.tasks}`)
      
            return response
        } catch (error) {
            console.error('ERR::LOGIN', error)
        }
    }

}

export class TasksService {
    client: ITasksApiClient

    constructor(client: ITasksApiClient) {
        this.client = client
    }

    async getTasks(): Promise<Task[] | undefined> {
        const tasks: Task[] | undefined = await this.client.getTasks()
        if (tasks) {
            store.dispatch(setTasks(tasks))
        }
        return tasks
    }

    async addTask(request: TaskRequest): Promise<Task[] | undefined> {
        const tasks: Task[] | undefined = await this.client.addTask(request)
        // if (tasks) {
        //     store.dispatch(setTasks(tasks))
        // }
        return tasks
    }
}
