import React from "react";
import Content from "../content/Content";
import Header from "../globlal/header/Header";
import './Main.scss'

const Main: React.FC = () => {

    return (
        <>
            <div className="main">
                <div className="main__container">
                {/* <Content /> */}
                </div>
                <Header />
            </div>
        </>
    )
}

export default Main