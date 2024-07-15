/* eslint-disable @typescript-eslint/prefer-nullish-coalescing */
/* eslint-disable  no-unneeded-ternary */
import store from '../../config/store.config'
import { type AuthToken } from '../../types/LoginResponse'
import type { AxiosConfiguration, IApiClient } from './Types'
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosRequestHeaders } from 'axios'

export abstract class ApiClient implements IApiClient {
  private readonly axiosInstance: AxiosInstance
  apiBase?: string
  platform?: string

  private interceptorId?: number
  private token?: AuthToken

  constructor () {
    this.apiBase = process.env.REACT_APP_BASE_URL ?? ''
    this.axiosInstance = axios.create({
      baseURL: this.apiBase,
      headers: {
        'Content-Type': 'application/json'
      }
    })

    store.subscribe(this.updateToken.bind(this))
    this.updateToken()
  }

  getToken () {
    return this.token
  }

  updateToken () {
    const newToken = store.getState().authReducer.token
    if (this.token === newToken) {
      return
    }

    this.token = newToken

    if (this.interceptorId !== undefined) {
      this.axiosInstance.interceptors.request.eject(this.interceptorId)
    }

    this.interceptorId = this.axiosInstance.interceptors.request.use(
      (config) => {
        if (newToken?.authToken) {
          console.log('newToken.authToken', newToken.authToken)
          config.headers.Authorization = `Bearer ${newToken.authToken}`
        } else {
          delete config.headers.Authorization
        }
        return config
      },
      async (error) => await Promise.reject(error)
    )
  }

  async postWithHeaders<TRequest, TResponse>(path: string, body: TRequest, headers?: AxiosConfiguration): Promise<TResponse | undefined> {
    try {
      if (headers) {
        const axiosHeaders = {
          ...this.axiosInstance.defaults.headers,
          ...headers
        } as unknown as AxiosRequestHeaders
        const config: AxiosRequestConfig<any> = {
          headers: {
            ...axiosHeaders,
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }

        const response = await this.axiosInstance.post<TResponse>(path, body, config)
        return response.data
      }
    } catch (error) {
      console.error('ERR::POST::WITH::HEADERS::', error)
      throw error
    }
  }

  async get<TResponse>(path: string): Promise<TResponse | undefined> {
    try {
      const response = (await this.axiosInstance.get<TResponse>(path)).data
      return response
    } catch (error) {
      console.error('ERR::GET::', error)
      throw error
    }
  }

  async post<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse | undefined> {
    try {
      const response = (await this.axiosInstance.post<TRequest, TResponse>(path, body))
      return response
    } catch (error) {
      console.error('ERR::POST::', error)
      throw error
    }
  }

  async put<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse | undefined> {
    try {
      const response = (await this.axiosInstance.put<TRequest, TResponse>(path, body))
      return response
    } catch (error) {
      console.error('ERR::PUT::', error)
      throw error
    }
  }

  async patch<TRequest, TResponse>(path: string, body: TRequest): Promise<TResponse | undefined> {
    try {
      const response = (await this.axiosInstance.patch<TRequest, TResponse>(path, body))
      return response
    } catch (error) {
      console.error('ERR::PATCH::', error)
      throw error
    }
  }

  async delete<TResponse>(path: string): Promise<TResponse | undefined> {
    try {
      const response = (await this.axiosInstance.delete<TResponse>(path)).data
      return response
    } catch (error) {
      console.error('ERR::DELETE::', error)
      throw error
    }
  }
}
