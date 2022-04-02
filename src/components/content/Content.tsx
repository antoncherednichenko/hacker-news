import React, { useEffect } from "react"
import { useActions } from "../../hooks/typedAction"

const Content: React.FC = () => {
    
    const { getNewsId } = useActions()
    useEffect(() => { getNewsId() }, [])

    
    return (
        <>

        </>
    )
}

export default Content