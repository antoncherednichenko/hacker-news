import React, { useState } from "react";
import './Descktop.scss'
import DescktopIcon from "../../ui/desctopIcon/DesctopIcon";
import Modal from "../../ui/modal/Modal";
import News from "../news/News";

const Descktop: React.FC = () => {
    const [isModal, setIsModal] = useState(false)
    const closeModal = () => { setIsModal(false) }
    const openModal = () => { setIsModal(true) }

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
                        clickHandle={openModal}
                        alt="news icon"
                        description="Hacker News"
                        url="./icons/news.png"
                    />
                </div>
                { isModal && <Modal children={<News />} closeHandle={closeModal} title="Hacker news" /> }
            </div>
        </>
    )
}

export default Descktop