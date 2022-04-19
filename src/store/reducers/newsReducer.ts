import { typeNewsAction, typeLoadingNewsAction } from "../actionCreators/actionCreators"

export const SET_NEWS = 'SET_NEWS'
export const TOGGLE_LOADING_STATE = 'TOGGLE_LOADING_STATE' 

type numberArray = Array<number>

export interface INew {
    by: string,
    descendants: number,
    kids: numberArray,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string,
    id: number
}

export type newsListType = INew[]

export interface newsState {
    newsList: newsListType,
    isNewsLoading: boolean
}

export type newsActionType = typeNewsAction | typeLoadingNewsAction

const initialState: newsState = {
    newsList: [],
    isNewsLoading: true
}

const newsReducer = (state = initialState, action: newsActionType): newsState => {
    switch(action.type) {
        case SET_NEWS:
            return { ...state,  newsList: action.payload}
        case TOGGLE_LOADING_STATE:
            return { ...state, isNewsLoading: action.payload }
        default: return state
    }
}



export default newsReducer