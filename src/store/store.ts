import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { rootReducer } from "./rootreducer";

export const store = createStore(rootReducer, applyMiddleware(thunk))

export type appDispatch = typeof store.dispatch
export type RootState =  ReturnType<typeof store.getState>