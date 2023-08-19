// import { Menu } from "antd";
import { Eyelash } from "Icons"
import { Switch } from "antd"
import AfterHoursBar, { AfterHoursSlideStrapContainer, SlideContainer } from "components/AfterHoursSlideStrap"
import Benefits from "components/Benefits"
import { MobileButton } from "components/Button"
import { Layout, StyledHeader, Content } from "components/Header"
import {Logo} from 'components/Logo'
import Marquee from "components/Marquee"
import { Menu, TopFrame, TopFrameBlock, TopFrameContainer, TopFrameLabel } from "components/Nav"
import { ProductDescription } from "components/Product"
import AfterHoursStamp from "components/Stamp"
import Trivia from "components/Trivia"
import React from "react"
import { Route, Router, Routes } from "react-router-dom"
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