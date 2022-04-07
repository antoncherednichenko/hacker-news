import React from "react";
import { Link } from "react-router-dom";
import './Logo.scss'

const Logo: React.FC = () => {

    return(
        <Link to={'/'} className="logo">
            <span>Hacker</span>
            <br />
            <span className="logo__second-word">News</span>
        </Link>
    )
}

export default Logo