import React from "react";
import './NewsItem.scss'
import { dateParser } from '../../helpers/helpers'

interface IProps {
    autor: string,
    score: number,
    date: number,
    title: string,
    url: string
}

const NewsItem: React.FC<IProps> = ({ autor, score, date, title, url }) => {
    return (
        <>
            <li className="item">
                <a href={url} target="_blank">{ title }</a>
                <div className="item__autor">
                    <span className="underline">Author:</span>
                    <span> { autor }</span> 
                </div>
                <div className="item__info">
                    <span className="underline">Rating:</span><span> { score }</span>
                    <br />
                    <span>{dateParser(date)}</span>
                </div>
            </li>
        </>
    )
}

export default NewsItem