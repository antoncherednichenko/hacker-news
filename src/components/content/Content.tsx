import React, { useEffect, useState } from "react"
import { useDispatch, useStore } from "react-redux"
import { useActions } from "../../hooks/typedAction"
import { useTypeSelector } from "../../hooks/typedSelector"
import Loading from "../../ui/loading/Loading"
import News from "../news/News"

const Content: React.FC = () => {
    
    const dispatch = useDispatch()
    const { fetchHacherNews } = useActions()
    const [isLoading, setIsLoading] = useState(useTypeSelector(state => state.news.isNewsLoading))
    const [newsList, setNewsList] = useState(useTypeSelector(state => state.news.newsList.slice(0, 100)))
    const [state, setState] = useState(useTypeSelector(state => state))
    useEffect( () => { dispatch(fetchHacherNews) } , [])



    return (
        <>
            <div className="container">
                <button onClick={() => console.log(newsList)}>Click</button>
                { isLoading ? <Loading /> : <News newsList={newsList} /> }
            </div>
        </>
    )
}

export default Content