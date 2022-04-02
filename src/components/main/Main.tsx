import React from "react";
import Content from "../content/Content";
import Header from "../globlal/header/Header";
import './Main.scss'

const Main: React.FC = () => {

    return (
        <>
            <div className="main">
                <Header />
                <Content />
            </div>
        </>
    )
}

export default Main