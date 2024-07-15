import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialTasksState } from './initialTasksState'
import { Task } from '../../types/TasksResponse'

export const TasksSlice = createSlice({
  name: 'tasksSlice',
  initialState: initialTasksState,
  reducers: {
    setTasks: (state, action: PayloadAction<Task[]>) => {
      state.tasks = action.payload
    }
  }
})

export default TasksSlice.reducer
