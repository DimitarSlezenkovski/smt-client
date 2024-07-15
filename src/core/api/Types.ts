import { type AuthToken } from '../../types/LoginResponse'

export interface IApiClient {
  getToken: () => AuthToken | undefined
  updateToken: (token?: AuthToken) => void

  get: <TResponse>(
    path: string) => Promise<TResponse | undefined>
  post: <TRequest, TResponse>(
    path: string,
    body: TRequest) => Promise<TResponse | undefined>
  postWithHeaders: <TRequest, TResponse>(
    path: string,
    body: TRequest,
    headers?: AxiosConfiguration) => Promise<TResponse | undefined>
  put: <TRequest, TResponse>(
    path: string,
    body: TRequest) => Promise<TResponse | undefined>
  patch: <TRequest, TResponse>(
    path: string,
    body: TRequest) => Promise<TResponse | undefined>
  delete: <TResponse>(
    path: string) => Promise<TResponse | undefined>
}

export type IApiClientToken = Pick<IApiClient, 'getToken' | 'updateToken'>

export interface AxiosConfiguration {
  headers: any
}

export class ApiResponse<T> {
  data?: T
  succeeded?: boolean
  errors: any
}
