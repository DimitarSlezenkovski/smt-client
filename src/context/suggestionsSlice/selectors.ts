import { RootState } from "../../config/reducers";

export const getSuggestions = (state: RootState) => state.suggestionsReducer.suggestions
