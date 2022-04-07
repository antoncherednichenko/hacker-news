import { Dispatch } from "react";
import { hacker } from "../../../API/api";
import { setNewsAction, loadingNewsAction } from "../../actionCreators/actionCreators";
import { INewsAction, newsListType } from "../newsReducer";

export const getNewsId = () => {

    return async (dispatch: Dispatch<INewsAction>) => {
        const response = await hacker.get('topstories.json?print=pretty')
        const newsArr = await Promise.all(response.data.map((d: Number) => hacker.get(`item/${d}.json?print=pretty`)))
        const newsList: newsListType = newsArr.map(e => e.data)
        
        await dispatch(setNewsAction(newsList))
        dispatch(loadingNewsAction(false))
        console.log(newsArr)
        
    }
}