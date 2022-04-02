import { Dispatch } from "react";
import { hacker } from "../../../API/api";
import { INewsAction, SET_NEWS_ID } from "../newsReducer";

export const getNewsId = () => {

    return async (dispatch: Dispatch<INewsAction>) => {
        const response = await hacker.get('topstories.json?print=pretty')
        const newsArr = await Promise.all(response.data.map((d: Number) => hacker.get(`item/${d}.json?print=pretty`)))
        console.log(newsArr, 'NEWS')
        dispatch({ type: SET_NEWS_ID, payload: response.data })
    }
}