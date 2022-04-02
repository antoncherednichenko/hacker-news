import React from "react";
import { Link } from "react-router-dom";
import './WhiteLink.scss'

interface IWL {
    path: string,
    children: React.ReactNode
}
const WhiteLink: React.FC<IWL> = ({ path, children }) => {

    return (
        <Link className="white-link" to={path}>{ children }</Link>
    )
}

export default WhiteLink
