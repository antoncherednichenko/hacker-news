import React, { useEffect, useState } from "react"
import { useActions } from "../../hooks/typedAction"
import { useTypeSelector } from "../../hooks/typedSelector"
import Loading from "../../ui/whiteLink/loading/Loading"
import News from "../news/News"

const Content: React.FC = () => {
    
    const { getNewsId } = useActions()
    const [isLoading, setIsLoading] = useState(useTypeSelector(state => state.news.isNewsLoading))
    const [newsList, setNewsList] = useState(useTypeSelector(state => state.news.newsList.slice(0, 100)))

    useEffect(() => { getNewsId() }, [])


    return (
        <>
            <div className="container">
                { isLoading && <Loading /> }
                { !isLoading && <News newsList={newsList}/> }
            </div>
        </>
    )
}

export default Content