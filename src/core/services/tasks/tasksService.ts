import store from "../../../config/store.config";
import { setTasks } from "../../../context/tasksSlice/actions";
import { Task } from "../../../types/TasksResponse";
import { ApiClient } from "../../api/apiClient";
import uriObject from "../../uris/index.uri";

interface ITasksApiClient {
    getTasks(): Promise<Task[] | undefined>
}

export class TasksApiClient extends ApiClient implements ITasksApiClient {

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
}
