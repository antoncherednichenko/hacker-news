import React from "react";
import './Descktop.scss'
import DescktopIcon from "../../ui/desctopIcon/DesctopIcon";

const Descktop: React.FC = () => {

    return (
        <>
            <div className="container">
                <div className="descktop">
                    <DescktopIcon
                        alt="desctop icon"
                        description="Мой компьютер"
                        url="./icons/my-pc.png"
                    />
                    <DescktopIcon
                        alt="cart icon"
                        description="Корзина"
                        url="./icons/cart.png"
                    />
                    <DescktopIcon
                        alt="folder icon"
                        description="Море 2007"
                        url="./icons/folder.png"
                    />
                    <DescktopIcon
                        alt="internet explorer icon"
                        description="Internet Explorer"
                        url="./icons/internet-explorer.png"
                    />
                    <DescktopIcon
                        alt="news icon"
                        description="Hacker News"
                        url="./icons/news.png"
                    />
                </div>
            </div>
        </>
    )
}

export default Descktop