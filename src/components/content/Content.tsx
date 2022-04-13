import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { useActions } from "../../hooks/typedAction"
import { useTypeSelector } from "../../hooks/typedSelector"
import Loading from "../../ui/loading/Loading"
import News from "../news/News"

const Content: React.FC = () => {
    
    const dispatch = useDispatch()
    const { fetchHacherNews } = useActions()
    const isLoading = useTypeSelector(state => state.news.isNewsLoading)
    const newsList = useTypeSelector(state => state.news.newsList.slice(0, 100))
    useEffect( () => { dispatch(fetchHacherNews) } , [])

    return (
        <>
            <div className="container">
                { isLoading ? <Loading /> : <News newsList={newsList} /> }
            </div>
        </>
    )
}

export default Content