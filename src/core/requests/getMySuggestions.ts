import { SuggesionsRequest } from "../../types/SuggestionsRequest"
import { suggestionsService } from "../services"

export const getMySuggestions = async (details: SuggesionsRequest) => {
    return await suggestionsService.getSuggestions(details)
}