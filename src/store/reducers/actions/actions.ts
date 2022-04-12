import { hacker } from "../../../API/api";
import { setNewsAction, loadingNewsAction } from "../../actionCreators/actionCreators";
import { newsListType, newsActionType } from "../newsReducer";
import { appDispatch } from "../../store";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../../store";


export const fetchHacherNews = ():ThunkAction<Promise<void>, RootState, unknown, newsActionType> => {

    return async (dispatch, getState) => {
        const response = await hacker.get('topstories.json?print=pretty')
        const newsID = await Promise.all(response.data.map((d: number) => hacker.get(`item/${d}.json?print=pretty`)))
        const newsList: newsListType = newsID.map(e => e.data)
        dispatch(loadingNewsAction(false))
        dispatch(setNewsAction(newsList))
        console.log(newsList)
        console.log(getState(), 'STATE')
    }
}