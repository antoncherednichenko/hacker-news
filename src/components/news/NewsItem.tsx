import React from "react";

interface IProps {
    autor: string,
    score: number,
    date: number,
    title: string,
    url: string
}

const NewsItem: React.FC<IProps> = ({ autor, score, date, title, url }) => {
    console.log(autor)
    return (
        <>
            <li>
                {autor}
            </li>
        </>
    )
}

export default NewsItem