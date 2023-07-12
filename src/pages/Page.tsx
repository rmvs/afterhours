// import { Menu } from "antd";
import { Eyelash } from "Icons"
import Benefits from "components/Benefits"
import { MobileButton } from "components/Button"
import { Layout, StyledHeader, Content } from "components/Header"
import {Logo} from 'components/Logo'
import Marquee from "components/Marquee"
import { Menu, TopFrame, TopFrameBlock, TopFrameContainer, TopFrameLabel } from "components/Nav"
import { ProductDescription } from "components/Product"
import React from "react"


export default function Page<T extends React.PropsWithChildren<{}>>(props: T){

    // <TopFrameBlock>
    //                     <TopFrameLabel>
    //                         100% light blocking
    //                     </TopFrameLabel>
    //                 </TopFrameBlock>
    //                 <TopFrameBlock>
    //                     <TopFrameLabel>
    //                         100% silk
    //                     </TopFrameLabel>
    //                 </TopFrameBlock>
    const frameLabels = ['100% Light Blocking','100% Silk','No Straps','No Fuss','Rest Easy',];

    const menuItems = [
        {
            key: 1,
            label: 'Product'
        },
        {
            key: 2,
            label: 'Did you know?'
        },
        {
            key: 3,
            label: 'Contact us'
        },
        {
            key: 4,
            label: 'Benefits'
        },
        {
            key: 5,
            label: 'FAQs'
        },
        {
            key: 6,
            label: 'Reviews'
        },                        
    ];

    return (
        <Layout>
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
                    items={[
                        {
                            key: 1,
                            label: 'Product'
                        },
                        {
                            key: 2,
                            label: 'Did you know?'
                        },
                        {
                            key: 3,
                            label: 'Contact us'
                        },
                        {
                            key: 4,
                            label: 'Benefits'
                        },
                        {
                            key: 5,
                            label: 'FAQs'
                        },
                        {
                            key: 6,
                            label: 'Reviews'
                        },                        
                    ]}
                />
            </StyledHeader>
            <Content>
                <ProductDescription />                
            </Content>
        </Layout>
    )
}