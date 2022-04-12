import React from "react";
import './NewsItem.scss'
import { dateParser } from '../../helpers/helpers'
import WhiteLink from "../../ui/whiteLink/WhiteLink";

interface IProps {
    autor: string,
    score: number,
    date: number,
    title: string,
    url: string
}

const NewsItem: React.FC<IProps> = ({ autor, score, date, title, url }) => {
    console.log(autor, score, date, title, url)
    return (
        <>
            <li className="item">
                <WhiteLink path={url ? url : '/'}>
                    { title }
                </WhiteLink>
                <div className="item__autor">
                    <span>Author: { autor }</span>
                </div>
                <div className="item__info">
                    <span>{score}</span>
                    <span>{date}</span>
                </div>
            </li>
        </>
    )
}

export default NewsItem