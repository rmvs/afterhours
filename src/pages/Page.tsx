// import { Menu } from "antd";
import React from "react"
import { Route, Routes } from "react-router-dom"
import Home from "./Home"
import Admin from "./Admin"


export default function Page<T extends React.PropsWithChildren<{}>>(props: T){

    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/admin" element={<Admin />}  />   
            </Routes>
        </>
    )
}