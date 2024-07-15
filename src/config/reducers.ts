import { combineReducers } from '@reduxjs/toolkit'
import authReducer from '../context/authSlice/authSlice'
import tasksReducer from '../context/tasksSlice/tasksSlice'
import suggestionsReducer from '../context/suggestionsSlice/suggestionsSlice'

export const rootReducer = combineReducers({
    authReducer,
    tasksReducer,
    suggestionsReducer
})

export type RootState = ReturnType<typeof rootReducer>
