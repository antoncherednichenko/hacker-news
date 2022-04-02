import React from "react";
import './Loading.scss'

const Loading: React.FC = () => {

    return (
        <>
        <div className="loading">
            <div className="loading__road">
                <div className="loading__runner"></div>
            </div>
            <p>Loading...</p>
        </div>
        </>
    )
}

export default Loading