import React from "react";
import Header from "../globlal/header/Header";
import Descktop from "../descktop/Descktop";

import './Main.scss'

const Main: React.FC = () => {

    return (
        <>
            <div className="main">
                <div className="main__container">
                    <Descktop />
                </div>
                <Header />
            </div>
        </>
    )
}

export default Main