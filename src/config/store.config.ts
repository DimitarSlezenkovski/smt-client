import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import { rootReducer } from './reducers'

const store = configureStore({
  reducer: rootReducer
})

export type AppSelector = ReturnType<typeof store.getState>
export const useAppSelector = useSelector.withTypes<AppSelector>()

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

export default store
