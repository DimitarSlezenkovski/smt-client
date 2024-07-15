import { RootState } from "../../config/reducers";

export const getTokens = (state: RootState) => state.authReducer.token
export const getUser = (state: RootState) => state.authReducer.user
