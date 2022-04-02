export const SET_NEWS = 'SET_NEWS'
export const TOGGLE_LOADING_STATE = 'TOGGLE_LOADING_STATE'  

export type numArr = Array<number>

export interface INew {
    by: string,
    descendants: number,
    id: number,
    kids: numArr,
    score: number,
    time: number,
    title: string,
    type: string,
    url: string

}
export type TNewsArr = Array<INew>

export interface INews {
    newsArr: TNewsArr,
    isNewsLoading: boolean
}

export type newsPayload =   boolean | TNewsArr 

export interface INewsAction {
    type: string,
    payload: newsPayload,
}

const initialState: INews = {
    newsArr: [],
    isNewsLoading: true
}


const newsReducer = (state: INews = initialState, action: INewsAction): INews => {
    switch(action.type) {
        case SET_NEWS:
            //@ts-ignore
            return { ...state, newsArr: action.payload }
        case TOGGLE_LOADING_STATE:
            //@ts-ignore
            return { ...state, isNewsLoading: action.payload }
        default:
            return state
        
    }  
}

export default newsReducer