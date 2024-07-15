import type { AuthToken } from '../../types/LoginResponse'
import { User } from '../../types/User'

export interface InitialAuthState {
  token: AuthToken | undefined
  user: User | undefined
}

const initialToken = localStorage.getItem('token')
export const initialAuthState: InitialAuthState = {
  token: initialToken ? JSON.parse(initialToken) : undefined,
  user: undefined
}
