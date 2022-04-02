import React, { useEffect, useState } from "react"
import { useActions } from "../../hooks/typedAction"
import { useTypeSelector } from "../../hooks/typedSelector"
import Loading from "../../ui/whiteLink/loading/Loading"

const Content: React.FC = () => {
    
    const { getNewsId } = useActions()
    const [isLoading, setIsLoading] = useState(useTypeSelector(state => state.news.isNewsLoading))

    useEffect(() => { getNewsId() }, [])


    return (
        <>
            <div className="container">
                { isLoading && <Loading /> }
            </div>
        </>
    )
}

export default Content