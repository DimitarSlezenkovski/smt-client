export interface LoginResponse {
  data: AuthData;
}

export interface AuthData {
  authToken: string;
}

export type AuthToken = Pick<AuthData, "authToken">;
