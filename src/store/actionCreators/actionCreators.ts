import { SET_NEWS, TOGGLE_LOADING_STATE, newsListType } from "../reducers/newsReducer"

export const setNewsAction = (value: newsListType) => { return { type: SET_NEWS, payload: value} }
export const loadingNewsAction = (value: boolean) => { return { type: TOGGLE_LOADING_STATE, payload: value } }

 export type newsAction = typeof setNewsAction
export type loadingNews = typeof loadingNewsAction