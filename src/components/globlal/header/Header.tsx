import React from "react"
import './Header.scss'
import WhiteLink from "../../../ui/whiteLink/WhiteLink"
import Logo from "./logo/Logo"
import PuskButton from "./puskButton/PuskButton"
import Clock from "./clock/Clock"

const Header: React.FC = () => {

    return (
        <>
            <header className='header'>
                <div className="container flex">
                    <PuskButton />
                    <Clock />
                </div>
            </header>
        </>
    )
}

export default Header