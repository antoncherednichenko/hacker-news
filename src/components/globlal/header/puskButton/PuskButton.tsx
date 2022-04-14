import React from "react";
import './PuskButton.scss'

const PuskButton: React.FC = () => {

    return (
        <>
        <button className="pusk">
            <img src={require('../../../../assets/windows.png')} alt="windows logo" />
            <span>Пуск</span>
        </button>
        </>
    )
}

export default PuskButton