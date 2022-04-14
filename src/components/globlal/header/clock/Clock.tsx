import React, { useEffect, useState } from "react";
import './Clock.scss'

const Clock: React.FC = () => {

    const [time, setTime] = useState('')
    const getNow = () => {
        const now: Date = new Date()
        setTime(now.toLocaleTimeString())
    }

    useEffect(() => { setInterval(getNow, 1000) }, [])

    return (
        <>
            <div className="clock">
                {time}
            </div>
        </>
    )
}

export default Clock