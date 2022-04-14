import React from "react";
import './DescktopIcon.scss'

interface IPros {
    url: string,
    description: string,
    alt: string
}

const DescktopIcon: React.FC<IPros> = ({ url, description, alt }) => {
    return (
        <>
            <figure className="icon">
                <img src={url} alt={alt} />
                <figcaption>{ description }</figcaption>
            </figure>
        </>
    )
}

export default DescktopIcon