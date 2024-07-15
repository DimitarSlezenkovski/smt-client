import { RegisterRequest } from "../../types/RegisterRequest";
import { authService } from "../services";

export const register = async (registerRequest: RegisterRequest) => {
    return await authService.register(registerRequest)
}