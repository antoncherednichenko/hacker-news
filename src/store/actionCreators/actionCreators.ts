import { SET_NEWS, TOGGLE_LOADING_STATE, newsListType } from "../reducers/newsReducer"

export const setNewsAction = (value: newsListType) => { return { type: SET_NEWS, payload: value } as const }
export const loadingNewsAction = (value: boolean) => { return { type: TOGGLE_LOADING_STATE, payload: value } as const }

export type typeNewsAction = ReturnType<typeof setNewsAction>
export type typeLoadingNewsAction = ReturnType<typeof loadingNewsAction>