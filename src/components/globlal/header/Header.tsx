import React from "react"
import './Header.scss'
import WhiteLink from "../../../ui/whiteLink/WhiteLink"
import Logo from "./logo/Logo"

const Header: React.FC = () => {

    return (
        <>
            <header className='header'>
                <div className="container header__container">
                    <Logo />
                    <nav className="header__nav nav">
                        <ul>
                            <li><WhiteLink path="/">Example</WhiteLink></li>
                            <li><WhiteLink path="/">Example</WhiteLink></li>
                            <li><WhiteLink path="/">Example</WhiteLink></li>
                            <li><WhiteLink path="/">Example</WhiteLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Header