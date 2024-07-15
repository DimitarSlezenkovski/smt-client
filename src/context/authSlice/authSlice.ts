import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialAuthState } from './initialAuthState'
import type { AuthToken } from '../../types/LoginResponse'
import { User } from '../../types/User'

export const AuthSlice = createSlice({
  name: 'authSlice',
  initialState: initialAuthState,
  reducers: {
    setToken: (state, action: PayloadAction<AuthToken | undefined>) => {
      state.token = action.payload
      if (action.payload) {
        localStorage.setItem('token', JSON.stringify(action.payload))
      } else {
        localStorage.removeItem('token')
      }
    },
    setUser: (state, action: PayloadAction<User | undefined>) => {
      state.user = action.payload
    }
  }
})

export default AuthSlice.reducer
