import { combineReducers } from "redux";
import newsReducer from "./reducers/newsReducer";

export const rootReducer = combineReducers({
    news: newsReducer
})

export type rootState = ReturnType<typeof rootReducer>