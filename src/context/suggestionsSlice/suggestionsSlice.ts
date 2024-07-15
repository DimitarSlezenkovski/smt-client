import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import { initialSuggestionsState } from './initialSuggestionsState'
import { Suggestion } from '../../types/SuggesionsResponse'

export const SuggestionsSlice = createSlice({
  name: 'suggestionsSlice',
  initialState: initialSuggestionsState,
  reducers: {
    setSuggestions: (state, action: PayloadAction<string>) => {
      state.suggestions = action.payload
    }
  }
})

export default SuggestionsSlice.reducer
