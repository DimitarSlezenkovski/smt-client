import { tasksService } from "../services"

export const getTasks = async () => {
    return await tasksService.getTasks()
}