import { Dispatch } from "react";
import { hacker } from "../../../API/api";
import { INewsAction, SET_NEWS } from "../newsReducer";

export const getNewsId = () => {

    return async (dispatch: Dispatch<INewsAction>) => {
        const response = await hacker.get('topstories.json?print=pretty')
        const newsArr = await Promise.all(response.data.map((d: Number) => hacker.get(`item/${d}.json?print=pretty`)))
        dispatch({ type: SET_NEWS, payload: response.data })
    }
}