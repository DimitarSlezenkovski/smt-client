import { AuthApiClient, AuthService } from "./auth/authService"
import { SuggestionsApiClient, SuggestionsService } from "./suggestions/suggestionsService"
import { TasksApiClient, TasksService } from "./tasks/tasksService"

/**
 * @description This is the auth service default export and initialization
 */
const authApiClient = new AuthApiClient()
export const authService = new AuthService(authApiClient)

/**
 * @description This is the auth service default export and initialization
 */
const tasksApiClient = new TasksApiClient()
export const tasksService = new TasksService(tasksApiClient)

/**
 * @description This is the auth service default export and initialization
 */
const suggestionsApiClient = new SuggestionsApiClient()
export const suggestionsService = new SuggestionsService(suggestionsApiClient)
