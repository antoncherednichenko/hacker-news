import React from "react";
import './Button.scss'

interface IProps {
    children: React.ReactNode,
    clickHandle: Function
}

const Button: React.FC<IProps> = ({ children, clickHandle }) => {

    return (
        <>
            <button onClick={() => clickHandle()} className="ui-button">{ children }</button>
        </>
    )
}

export default Button