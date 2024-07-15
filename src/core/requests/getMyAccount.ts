import { authService } from "../services"

export const getMyAccount = async () => {
    return await authService.getMyAccount()
}