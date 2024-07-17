import store from '../../../config/store.config'
import { ApiClient } from '../../api/apiClient'
import { AuthToken, type LoginResponse } from '../../../types/LoginResponse'
import uriObject from '../../uris/index.uri'
import { type IApiClientToken } from '../../api/Types'
import { User } from '../../../types/User'
import { LoginRequest } from '../../../types/LoginRequest'
import { RegisterRequest } from '../../../types/RegisterRequest'
import { setToken, setUser } from '../../../context/authSlice/actions'

export interface IAuthApiClient extends IApiClientToken {
  login: (loginRequest: LoginRequest) => Promise<LoginResponse | undefined>
  register: (registerRequest: RegisterRequest) => Promise<boolean | undefined>
  getMyAccount: () => Promise<User | undefined>
}

export class AuthApiClient extends ApiClient implements IAuthApiClient {
  async register (registerRequest: RegisterRequest): Promise<boolean | undefined> {
    try {
        const response = await this.postWithHeaders<any, boolean>(`${this.apiBase}${uriObject.authUris.login}`, registerRequest, {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
  
        return response
      } catch (error) {
        console.error('ERR::LOGIN', error)
      }
  }

  async login (loginRequest: LoginRequest): Promise<LoginResponse | undefined> {
    try {
      const response = await this.post<any, LoginResponse>(`${this.apiBase}${uriObject.authUris.login}`, loginRequest)

      return response
    } catch (error) {
      console.error('ERR::LOGIN', error)
    }
  }

  async getMyAccount (): Promise<User | undefined> {
    try {
      const response = await this.get<User>(`${this.apiBase}${uriObject.authUris.account}`)
      return response
    } catch (error) {
      console.error('ERR::GETMYACC', error)
      throw error
    }
  }
}

export class AuthService {
  readonly client: IAuthApiClient

  constructor (client: IAuthApiClient) {
    this.client = client
  }

  async login (loginRequest: LoginRequest): Promise<LoginResponse | undefined> {
    const response = await this.client.login(loginRequest)
    const tokens = response?.data as AuthToken
    store.dispatch(setToken(tokens))
    const user = await this.client.getMyAccount()
    store.dispatch(setUser(user))
    return response
  }

  async register (registerRequest: RegisterRequest): Promise<boolean | undefined> {
    return await this.client.register(registerRequest)
  }

  async getMyAccount (): Promise<User | undefined> {
    const token = this.client.getToken()
    // Check if token is undefined or null
    if (!token?.authToken) {
      const emptyObject: User = {
        id: 0,
        name: '',
        email: '',
        email_verified: false
      }
      return emptyObject
    }
    
    const user = await this.client.getMyAccount()

    store.dispatch(setUser(user))

    return user
  }
}
