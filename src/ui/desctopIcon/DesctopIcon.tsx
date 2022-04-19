import React from "react";
import './DescktopIcon.scss'

interface IPros {
    url: string,
    description: string,
    alt: string,
    clickHandle?: Function
}

const DescktopIcon: React.FC<IPros> = ({ url, description, alt, clickHandle }) => {
    const clickFunc = () => { if(clickHandle) { clickHandle() } }
    return (
        <>
            <figure onClick={clickFunc} className="icon">
                <img src={url} alt={alt} />
                <figcaption>{ description }</figcaption>
            </figure>
        </>
    )
}

export default DescktopIcon