import { Suggestion } from '../../types/SuggesionsResponse'

export interface InitialSuggestionsState {
  suggestions: string | undefined
}

export const initialSuggestionsState: InitialSuggestionsState = {
  suggestions: undefined
}
