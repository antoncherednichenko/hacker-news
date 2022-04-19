import React from "react";
import Button from "../button/Button";
import './Modal.scss'

interface IProps {
    children: React.ReactNode,
    closeHandle: Function,
    title: string
}
const Modal: React.FC<IProps> = ({ children, closeHandle, title }) => {

    return (
        <>
            <div className="modal">
                <div className="modal__header">
                    <h3 className="header__title">{ title }</h3>
                    <Button clickHandle={closeHandle}>X</Button>
                </div> 
                <div className="modal__content">
                    { children }
                </div>
            </div>
        </>
    )
}

export default Modal