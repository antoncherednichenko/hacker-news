import React, { useEffect } from "react";
import './News.scss'
import NewsItem from "./NewsItem";
import { useTypeSelector } from "../../hooks/typedSelector";
import { useDispatch } from "react-redux";
import { useActions } from "../../hooks/typedAction";
import Loading from "../../ui/loading/Loading";


const News: React.FC = () => {
    const dispatch = useDispatch()
    const { fetchHacherNews } = useActions()
    const newsList = useTypeSelector(state => state.news.newsList.slice(0, 100))
    const isLoading = useTypeSelector(state => state.news.isNewsLoading)
    useEffect(() => { dispatch(fetchHacherNews) }, [])
    return (
        <>
            { !isLoading &&
                <ul className="news">
                    { newsList.map(e => (
                        <NewsItem
                            key={e.id}
                            autor={e.by}
                            score={e.score}
                            date={e.time}
                            title={e.title}
                            url={e.url} 
                        />
                    )) }
                </ul>
            }
            { isLoading && <Loading /> }
        </>
    )
}

export default News