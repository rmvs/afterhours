// import { Menu } from "antd";
import { Eyelash } from "Icons"
import { MobileButton } from "components/Button"
import { Layout, StyledHeader, Content } from "components/Header"
import {Logo} from 'components/Logo'
import Marquee from "components/Marquee"
import { Menu, TopFrame, TopFrameBlock, TopFrameContainer, TopFrameLabel } from "components/Nav"
import React, { useRef, useState } from "react"
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
import { Modal } from "antd"
import ConfirmModal from "components/ConfirmDialog"


export default function Home<T extends React.PropsWithChildren<{}>>(props: T){

    const [alertModal, contextHolder] = Modal.useModal();

    const frameLabels = ['100% Light Blocking','100% Silk','No Straps','No Fuss','Rest Easy',];

    const [ contactUsOpen, setContactUsOpen ] = useState(false)
    const [ confirmOpen, setConfirmOpen ] = useState(false)

    const scrollToView = (elementId: string) => {
        document.getElementById(elementId)?.scrollIntoView({ behavior: 'smooth' })
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
            label: 'Benefits',
            onClick: (ev: any) => scrollToView('product-container')
        },
        {
            key: 4,
            label: 'Comparison',
            onClick: (ev: any) => scrollToView('comparison')
        },
        {
            key: 5,
            label: 'FAQs',
            onClick: (ev: any) => scrollToView('faq')
        },
        {
            key: 6,
            label: 'Reviews',
            onClick: (ev: any) => scrollToView('review')
        },                        
    ];

    const slideContainerRef = useRef<HTMLDivElement>(null)

    const closeModal = (openConfirm: boolean, hasAPIError?: boolean) => {
        setContactUsOpen(prev => !prev)
        if(hasAPIError){
            alertModal.error({
                title: <span style={{color: 'red'}}>Error</span>,
                content: (
                    <div style={{color: 'red'}}>
                        An error has occurred while processing your request.
                    </div>
                ),
                okType: "default",
                okButtonProps: {
                    style: {
                        color: 'red !important'
                    }
                }
            })
            return
        }
        if(openConfirm){
            setConfirmOpen(true)
        }       
    }        
    
    return (
        <Layout>
            {contextHolder}
            <ConfirmModal open={confirmOpen} close={() => setConfirmOpen(false)} />
            <ContactUs open={contactUsOpen} close={closeModal} />
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
                <Logo className="logo-nav-section" />
                <MobileButton items={menuItems} />
                <Menu
                    className="menu"
                    mode="horizontal"
                    defaultSelectedKeys={['1']}                
                    items={menuItems}
                    disabledOverflow={true}
                />
            </StyledHeader>
            <Content>
                <ProductIntro openModal={setContactUsOpen} slideContainerRef={slideContainerRef} />
                <ProductVideo slideContainerRef={slideContainerRef} />
                <ProductDetails openModal={setContactUsOpen} /> 
                <BannerAdvertisement src="img/banner1-large.png" />
                <FAQ openModal={setContactUsOpen} />
                <Reviews />
                <Testimonies openModal={setContactUsOpen} />
                <Contact />
                <Footer openModal={setContactUsOpen} />
            </Content>
        </Layout>
    )
}