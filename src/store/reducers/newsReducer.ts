export type idArr = Array<Number>
export type newsPayload = idArr | null

export const SET_NEWS_ID = 'SET_NEWS_ID'

export interface INews {
    newsId: idArr | null
}
export interface INewsAction {
    type: string,
    payload: newsPayload
}
const initialState = {
    newsId: null
}

const newsReducer = (state: INews = initialState, action: INewsAction): INews => {
    switch(action.type) {
        case SET_NEWS_ID:
            return { ...state, newsId: action.payload }
            break
        default:
            return state
        
    }  
}

export default newsReducer