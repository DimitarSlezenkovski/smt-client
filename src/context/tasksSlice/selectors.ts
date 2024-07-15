import { RootState } from "../../config/reducers";

export const getMyTasks = (state: RootState) => state.tasksReducer.tasks
