import React from "react";
import './News.scss'
import NewsItem from "./NewsItem";
import { newsListType } from '../../store/reducers/newsReducer'


interface INewsProps {
    newsList: newsListType
}

const News: React.FC<INewsProps> = ({ newsList }) => {
    return (
        <>
            <ul className="news">
                { newsList.map(e => (
                    <NewsItem
                        autor={e.by}
                        score={e.score}
                        date={e.time}
                        title={e.title}
                        url={e.url} 
                    />
                )) }
            </ul>
        </>
    )
}

export default News