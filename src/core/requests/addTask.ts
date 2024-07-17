import { TaskRequest } from "../../types/TasksResponse";
import { tasksService } from "../services";

export const addTask = async (request: TaskRequest) => {
    return await tasksService.addTask(request)
}