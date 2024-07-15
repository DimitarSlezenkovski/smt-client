import { LoginRequest } from "../../types/LoginRequest";
import { authService } from "../services";

export const login = async (loginRequest: LoginRequest) => {
    return await authService.login(loginRequest)
}