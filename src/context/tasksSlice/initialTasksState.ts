import { Task } from '../../types/TasksResponse'

export interface InitialTasksState {
  tasks: Task[]
}

export const initialTasksState: InitialTasksState = {
  tasks: []
}
