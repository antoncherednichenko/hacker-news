import React from "react"
import Main from './components/main/Main'

interface IRoute {
    path: string,
    component: React.FC
}
export const routes: Array<IRoute> = [
    {
        path: '/',
        component: Main
    },
]