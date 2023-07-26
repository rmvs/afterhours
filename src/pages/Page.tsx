// import { Menu } from "antd";
import { Eyelash } from "Icons"
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
import React, { createRef, useEffect, useRef, useState } from "react"

import { useWindowSize } from "@react-hook/window-size";
import Slide from "components/Slide"
import ProductVideo from "./ProductVideo"
import ProductIntro from "./ProductIntro"
import ProductDetails from "./ProductDetails"
import BannerAdvertisement from "./BannerAdvertisement"
import FAQ from "./FAQ"
import ContactUs from "components/ContactUs"
import Reviews from "./Reviews"
import Testimonies from "./Testimonials"
import Footer from "components/Footer"
import Contact from "components/Contact"


export default function Page<T extends React.PropsWithChildren<{}>>(props: T){

    const frameLabels = ['100% Light Blocking','100% Silk','No Straps','No Fuss','Rest Easy',];

    const [ contactUsOpen, setContactUsOpen ] = useState(false)

    const scrollToView = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
        // setTimeout(() => {
        //     window.scrollTo({
        //         top: window.scrollY - 1,
        //         behavior: 'smooth'
        //     })
        // },300)
    }

    const menuItems = [
        {
            key: 1,
            label: 'Product',
            onClick: (ev: any) => scrollToView('product-description')
        },
        {
            key: 2,
            label: 'Did you know?',
            onClick: (ev: any) => scrollToView('did-you-know')
        },
        {
            key: 3,
            label: 'Contact Us',
            onClick: (ev: any) => setContactUsOpen(prev => !prev)
        },
        {
            key: 4,
            label: 'Benefits',
            onClick: (ev: any) => scrollToView('product-container')
        },
        {
            key: 5,
            label: 'Comparison',
            onClick: (ev: any) => scrollToView('comparison')
        },
        {
            key: 6,
            label: 'FAQs',
            onClick: (ev: any) => scrollToView('faq')
        },
        {
            key: 7,
            label: 'Reviews'
        },                        
    ];

    const [ width, height ] = useWindowSize()

    const SlideUnitSection = (
        <div ref={createRef()} style={{width:'100%'}}>
            <AfterHoursStamp ref={createRef()} strokeWidth="1" color="#D2EEF9" position="relative" inverted />
            <Logo ref={createRef()} inverted width={'109.13px'} height={'52.86px'} />
        </div>
    )

    const slideContainerRef = useRef<HTMLDivElement>(null)    
    
    return (
        <Layout>
            <ContactUs open={contactUsOpen} setClose={setContactUsOpen} />
            <TopFrame>
                <Marquee>
                    <TopFrameContainer> 
                        <TopFrameBlock>
                            <Eyelash />
                        </TopFrameBlock>
                        {
                            frameLabels.map((lbl,index) => (
                                <TopFrameBlock key={index} $borderRight $paddingRight>
                                    <TopFrameLabel>
                                        {lbl}
                                    </TopFrameLabel>
                                </TopFrameBlock>
                            ))
                        }
                    </TopFrameContainer>
                </Marquee>
            </TopFrame>
            <StyledHeader>
                <Logo />
                {/* <Nav/> */}
                <MobileButton items={menuItems} />
                <Menu
                    mode="horizontal"
                    defaultSelectedKeys={['1']}                
                    items={menuItems}
                />
            </StyledHeader>
            <Content>
                {/* <ProductDescription />
                <Trivia />
                <AfterHoursSlideStrapContainer>
                <SlideContainer id="slide-container">
                    <Slide>
                        <>
                            <AfterHoursStamp strokeWidth="1" color="#D2EEF9" position="relative" inverted />
                            <Logo inverted width={'109.13px'} height={'52.86px'} />
                        </>
                    </Slide>
                </SlideContainer> 
                </AfterHoursSlideStrapContainer> */}
                <ProductIntro openModal={setContactUsOpen} slideContainerRef={slideContainerRef} />
                <ProductVideo slideContainerRef={slideContainerRef} />
                <ProductDetails openModal={setContactUsOpen} /> 
                <BannerAdvertisement paddingTop={"200px"} src="img/banner1.png" />
                <FAQ openModal={setContactUsOpen} />
                <Reviews />
                <Testimonies openModal={setContactUsOpen} />
                <Contact />
                <Footer openModal={setContactUsOpen} />           
            </Content>
        </Layout>
    )
}