import React, { useEffect, useState } from "react"
import { useActions } from "../../hooks/typedAction"
import { useTypeSelector } from "../../hooks/typedSelector"
import Loading from "../../ui/loading/Loading"
import News from "../news/News"
import { dispatch } from "../../store/store"

const Content: React.FC = () => {
    
    const { getNewsId } = useActions()
    const [isLoading, setIsLoading] = useState(useTypeSelector(state => state.news.isNewsLoading))
    const [newsList, setNewsList] = useState(useTypeSelector(state => state.news.newsList.slice(0, 100)))
    const [state, setState] = useState(useTypeSelector(state => state))

    useEffect(() => { getNewsId() }, [])


    return (
        <>
            <div className="container">
                <button onClick={() => console.log(state)}>state</button>
                { isLoading ? <Loading /> : <News newsList={newsList} /> }
            </div>
        </>
    )
}

export default Content