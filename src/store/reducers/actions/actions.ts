import { hacker } from "../../../API/api";
import { setNewsAction, loadingNewsAction } from "../../actionCreators/actionCreators";
import { newsListType } from "../newsReducer";
import { appDispatch } from "../../store";


export const getNewsId = () => {

    return async (dispatch: appDispatch) => {
        const response = await hacker.get('topstories.json?print=pretty')
        const newsArr = await Promise.all(response.data.map((d: number) => hacker.get(`item/${d}.json?print=pretty`)))
        const newsList: newsListType = newsArr.map(e => e.data)
        
        dispatch(loadingNewsAction(false))
        dispatch(setNewsAction(newsList))
        console.log(newsList)
    }
}