import { Col as AntdCol, List, Row, Collapse as AntdCollapse } from "antd";
import Typography from "components/Typography";
import styled from "styled-components";
import { Icon } from "Icons";
import { Button as DefaultButton } from "components/Button";
import { SlideContainer as DefaultSlideContainer } from "components/AfterHoursSlideStrap";
import Slide from "components/Slide";
import AfterHoursStamp from "components/Stamp";
import { Logo } from "components/Logo";

const FAQContainer = styled.div`
    // background: rgb(255,251,248);
    padding-top: 333px;
    background: linear-gradient(169deg, rgba(255,251,248,1) 25%, rgba(210,238,249,0.891281512605042) 49%, rgba(255,251,248,1) 70%);
    overflow: hidden;
    // padding-bottom: 250px;

    @media (max-width: 480px),(max-width: 757px) {
        padding-top: 91px;        
    }
`

const FAQComparision = styled(Row)`
    // height: 527.045px;    
    flex-shrink: 0;
    div.left {
        border-top-right-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    div.right {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-right-width: 8px;
    }

    .left > div:first-child {
        border-top-right-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    .right > div:first-child {
        border-top-left-radius: 0px;
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;

        display: flex;
        justify-content: center;
    }
    

    @media(max-width: 480px){
        .right > .faq-header {
            height: 87px;
        }

        .left{
            border-right: none;
        }

        .logo-stamp {
            width: 4.4375rem;
            height: 4.4375rem;
            margin-top: -10%;
        }
    }

    .ant-list .ant-list-item .ant-list-item-meta {
        align-items: center !important;
    }
`

const FAQComparisionContent = styled(AntdCol)`
    border-radius: 15.971px;    
    border: 1.331px solid #164CA4;
    border-bottom-width: 8px;    
    background: var(--white, #FFF);
    display: grid;
    grid-gap: 30px;

    div.faq-header {
        background: #D2EEF9;
        padding: 60px;
        border-radius: 15.971px; 
        text-align: center;
        max-height: 175px;

        .logo-stamp {
            position: absolute;
            // left: -80%;
            z-index: 99;
            // margin-left: 30%;
            // margin-top: -3.5%
            top: -6rem;
            right: -3.5rem;

            @media(max-width: 480px){ 
                top: calc(-4.4375rem * 0.2);
                left: calc(-4.4375rem * 0.5);
            }
        }
    }    

    @media(max-width: 480px){
        .faq-header {
            padding: 1rem 2.5rem !important;
        }
        grid-gap: 0.9375rem !important;

        .ant-list-item-meta {
            align-items: center !important;
        }
    }    
`

const AdvantageListContainer = styled.div`
    // display: inline-flex;
    // flex-direction: column;
    // align-items: flex-start;
    // gap: 25px;
    // padding: 70px;
    padding: 4.375rem;
    // @media (max-width: 480px){
    //     padding: 0.72rem;
    // }

    @media(max-width: 575px){
        // padding: 1.5rem;
        padding: 0.72rem;
    }

    @media (min-width: 576px) and (max-width: 767px) {
        padding: 0.72rem;
      }

    @media (min-width: 768px) and (max-width: 991px) {
        padding: 0.72rem;
    }

    @media (min-width: 992px) and max(max-width: 1200px) {
        padding: 0.72rem;
    }

    @media(min-width: 1600px) {
        padding: 2rem; 
    }
`

// const iconSVG = (
//     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
//         <path d="M21.1294 25.9361L21.3697 25.7699C22.1217 25.25 22.4977 24.9899 22.8341 24.7112C24.6618 23.1964 25.8893 21.0849 26.2979 18.7533C26.3731 18.3242 26.4122 17.8703 26.4903 16.9624L26.5307 16.493C26.6601 14.9903 26.6472 13.4788 26.4922 11.9785L26.4443 11.5142C26.1731 8.88873 24.5613 6.58759 22.1796 5.42558C18.2636 3.51504 13.6796 3.51504 9.76363 5.42558C7.38193 6.58759 5.77013 8.88874 5.49893 11.5142L5.45097 11.9785C5.296 13.4788 5.2831 14.9903 5.41245 16.493L5.45286 16.9624C5.53101 17.8703 5.57008 18.3242 5.64528 18.7533C6.05385 21.0849 7.28141 23.1964 9.1091 24.7112C9.44544 24.9899 9.82154 25.25 10.5735 25.77L10.8138 25.9361C11.8361 26.643 12.3473 26.9965 12.8596 27.2422C14.8261 28.185 17.1171 28.185 19.0836 27.2422C19.5959 26.9965 20.1071 26.643 21.1294 25.9361Z" stroke="#164CA4" stroke-width="1.99638"/>
//         <path d="M18.3247 13.6182L13.6191 18.3237M18.3247 18.3237L13.6191 13.6182" stroke="#164CA4" stroke-width="1.99638" stroke-linecap="round"/>
//     </svg>
// )


const Collapse = styled(AntdCollapse)`
    width: 100%;

    .ant-collapse-header-text {
        display: flex;
        align-items: center;
        gap: 30px;
    }

    .ant-collapse-header-text > div:nth-child(2) {
        font-size: 18px !important;
    }

    .ant-collapse-header.ant-collapse-icon-collapsible-only {
        align-items: center;
    }

    .ant-collapse-item {
        border-block-end: 1px solid #164CA4;
        padding-bottom: 20px;
        padding-top: 20px;
    }

    .ant-collapse-item:last-child {
        border-bottom-left-radius: 0px;
        border-bottom-right-radius: 0px;
    }
    
`


const AdvantageList= styled(List)`
    .ant-list-item-meta {
        // display: flex;
        align-items: end !important;
    }

    .ant-list-item-meta-title {
        margin: 0 !important;
    }
    .ant-list-item {
        // padding: 8px 0;
        border-block-end: none;
    }
    .ant-list-item-meta-title {
        color: #164CA4 !important;
        leading-trim: both !important;
        text-edge: cap !important;
        font-family: Roc Grotesk;
        // font-size: 21.295px !important;
        font-size: 20px !important;
        font-style: normal !important;
        font-weight: 350 !important;
        line-height: 26.618px !important;  /* 125% */
    }

    @media(max-width: 480px){
        .ant-list-item-meta-title {
            font-family: Roc Grotesk Light !important;
            font-size: 0.7rem !important;
            font-style: normal !important;
            font-weight: 350 !important;
            line-height: 1rem !important;
        }
        .ant-list-item-meta-avatar {
            margin-inline-end: 0.625rem !important;
        }
    }
`

const Button = styled(DefaultButton)`
    background: #D2EEF9;
    box-shadow: 4px 4px 0px 0px #164CA4;  
    span {
        color: #164CA4;
        line-height: 32px
        font-weight: 700;
        font-family: Roc Grotesk Bold;
    }  
`

const ShopNowContainer = styled.div`
    padding-top: 70px;
    display: flex;
    justify-content: center;
`

const { Item } = List

const FAQTitle = styled.div`
    color: var(--main-blue, #164CA4);
    /* H1 - Title */
    font-family: Roc Grotesk;
    font-size: 55px;
    font-style: normal;
    font-weight: 400;
    line-height: 55px; /* 100% */
    letter-spacing: -1.65px;
    white-space: pre;
    // padding-bottom: 100px;
`

const FAQGrid = styled(Row)`
    // padding-top: 250px;
    // padding-bottom: 250px;
    // padding-left: 298px;
    // padding-right: 298px;

    padding-bottom: 160px;

    // .first {
    //     display: flex;
    //     flex-direction: column;
    //     align-self: end;
    // }

    .more-link-button{
        display: none;
        transition: opacity 0.4s ease 0s;
    }

    .collapse-benefits-second {
        transition: opacity 0.4s ease 0s;
    }

    @media (max-width: 480px){
        .collapse-benefits-second {
            display: none;
        }
        .more-link-button {
            display: flex;
            margin-top: 3.12rem;
            justify-content: center;
            width: 100%;
            text-decoration-line: underline;
        }
    }
    
`

const FAQTitleSection = styled(Row)`
    padding-top: 250px;
    // padding-bottom: 250px;
    // padding-left: 298px;
    // padding-right: 298px;

`

const FAQList = styled(List)` 
    .faq-list-item-header {
        border-block-end: none !important;
        display: inline-flex;
        height: 32.583px;
        // align-items: flex-start;
        gap: 17px;
        flex-shrink: 0;
    }
`

const Col = styled(AntdCol)`
    display: flex;
    // align-items: flex-end;
    // align-items:flex-start;

    .ant-list {
        flex: 1;
    }
    .ant-list-item {
        padding: 29px 10px 10px 10px;     
        border-block-end: 1px solid #164CA4;   
    }
    .ant-list-item:last-child {
        border-block-end: 1px solid #164CA4; 
    }

    .ant-list-item:not(.faq-list-item-header) > div {
        display: inline-flex;
        align-items: center;
        gap: 49px;
        width: 100%;
    }

    .ant-list-item > div > div:nth-child(2) {
        width: 100%;
    }
    .ant-list-item > div > div:nth-child(3) {
        color: rgba(108, 108, 108, 0.20);
        font-family: Roc Grotesk;
        font-size: 40px;
        font-style: normal;
        font-weight: 350;
    }

    // .leftAccordion > .ant-collapse-item:nth-child(1) {
    //     height: 119.8px !important;
    //     .ant-collapse-expand-icon {
    //         display: none;            
    //     }
    //     border-block-end: none;
    // }    
`

const FAQListItem = styled(Item)<{$header?: boolean}>`
    // padding-top: 29px;
    .faq-list-item-header {
        border-block-end: none !important;
    }    
`
const SlideContainer = styled(DefaultSlideContainer)`
    padding-top: 20px;
    padding-bottom: 20px;
    overflow: hidden;

    & .slide-container .motion-container {
        gap: 80.55px;
        div {
            gap: 80.55px;
        }
    }
    
    @media (max-width: 480px), (max-width: 575px){
        & .slide-container .motion-container {
            gap: 45.2px;
            div {
                gap: 45.2px;
            }
        }
    }
`

const SlideSection = styled.div`
    // overflow: hidden;
    // padding-top: 160px;
    // height: 500px;
`


const FAQTexts = [
    // {
    //     key: 'start',
    //     label: (
    //         <>
    //             {/* <FAQList>
    //                 <FAQListItem className="faq-list-item-header" id="faq">
    //                     <div>
    //                         <Icon src="icons/moon.svg" width="21px" height="21px" />
    //                     </div>
    //                     <div>
    //                         <Typography fontSize="16px" lineheight="24px" $type="Bold" letterSpacing="4.8px">SLEEP MASK</Typography>
    //                     </div>
    //                 </FAQListItem>
    //                 <FAQListItem style={{borderBlockEnd: 'none'}}>                                
    //                     <FAQTitle>
    //                         Frequently <br/>
    //                         Asked <br/>
    //                         Questions.
    //                     </FAQTitle>                               
    //                 </FAQListItem>
    //             </FAQList> */}
    //         </>
    //     ),
    //     children: <></>
    // },
    {
        key: 0,
        label: <>
                <Typography fontSize="32px" $type="Bold">01</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">What is the material of the sleep mask?</Typography>
            </>,
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Our sleep mask is comfortable, thin (yet effective in blocking out light) and crafted with 100% silicone and 100% soft silk (known for its anti-wrinkle benefits!).</Typography>
    },
    {
        key: 1,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">02</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">What is the benefit of using silk?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Silk is an excellent material for a sleep mask due to its soft and gentle texture, and ability to regulate temperature, creating a comfortable and soothing sleep environment. With its soft and silky texture, silk doesn’t drag or imprint on skin making it fantastic for anti-aging and anti-wrinkle benefits. As an organic fabric it outshines synthetic materials by being environmentally friendly and free from toxic chemicals.</Typography>
    },
    {
        key: 2,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">03</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">What are the benefits of using silicone?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Our bio-adhesive silicone allows for the sleep mask patches to conform around the shape of the eyes. Silicone is a natural material which offers numerous benefits such as being hypoallergenic, non-toxic, and easily washable, making it an ideal choice for individuals with sensitive skin.</Typography>
    },
    {
        key: 3,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">04</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">How does the sleep mask block out light?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Our sleep mask is designed to conform to the contours of your eyes, creating a vacuum like seal that blocks out light from reaching your eyes while prioritizing comfort and without leaving impressions on your face and around your nose.</Typography>
    },
    {
        key: 4,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">05</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">How does the sleep mask stay in place?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Eliminating the need for straps, the individual sleep patches have a conforming shape with bio-adhesive silicone that sticks to the eye contour area. Each patch has a concave shape that avoids contact with the eyebrows and eyelashes entirely – allowing for total comfort.</Typography>
    },
    {
        key:5,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">06</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">Can I use the sleep mask if I am a side sleeper?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Yes, the sleep mask patches are suitable for side sleepers. The conforming design ensures a snug fit that stays in place, even if you change your sleeping position.</Typography>
    },
    {
        key: 6,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">07</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">Is the sleep mask suitable for all faces?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Yes, our sleep mask is designed to be one-size-fits-all with its conforming shape and strap-free design, allowing it to comfortably fit most faces. Our mask is crafted as 2 separate sleep mask patches, which conform around the eyes to block out light.</Typography>
    },
    {
        key: 7,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">08</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">What skin types is the sleep mask suitable for?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Our sleep mask works on all skin types, including oily skin types, and is safe to be used on sensitive skin.</Typography>
    },
    {
        key: 8,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">09</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">How many uses is it good for?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">It will depend on how you care for your sleep patches. We say 10 or more uses but it depends on how often you wash them.</Typography>
    },
    {
        key: 9,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">10</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">How do you know when the sleep mask is ready to be replaced?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">When the mask loses its stickiness and even washing with light soap and water won’t make it sticky again, then it might be ready to be replaced. But even a light stickiness does the trick so don’t give up your mask too early.</Typography>
    },
    {
        key: 10,
        label: (
            <>
                <Typography fontSize="32px" $type="Bold">11</Typography>
                <Typography color="black" fontSize="22px" lineheight="25px" letterSpacing="0px">How do you clean the sleep mask?</Typography>
            </>
        ),
        children: <Typography fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">Our sleep mask should be washed with warm water and a gentle facial wash or soap and allowed to dry sticky side up. (Our sleep mask features quick dry material!).</Typography>
    }
]


export default function FAQ({ openModal }: React.PropsWithChildren<{ openModal: any }>){
 
    const productProps = ['Strap free','100% Light Blocking','Stays in place','Conforms to your face'];

    const otherCons = [
        'Uncomfortable Straps',
        'Light seeps in',
        'Slips around',
        'One-size uneven fit'
    ]

    const expandCollapse = (collapseName: string) => {
        (document.querySelector(collapseName) as HTMLElement).style.display = 'block';
        (document.querySelector('.more-link-button') as HTMLElement).style.display = 'none';
    }

    return (
        <>
            <FAQContainer>
            <FAQComparision id="comparison" justify={"center"}>                    
                <FAQComparisionContent className="left" xs={11} sm={10} md={8} lg={8} xl={8} xxl={4}>
                    <Typography className="faq-header" fontSize="29.363px" $type="Bold" letterSpacing="0px" >Others</Typography>
                    <AdvantageListContainer>
                        <AdvantageList
                            itemLayout="horizontal"
                            bordered={false}
                            dataSource={otherCons}
                            renderItem={(text: any, index: any) => (
                            <List.Item>
                                <List.Item.Meta
                                className="meta-comparison"
                                avatar={<><Icon src="icons/cons-mark.svg" width="32px" height="32px" /></>}
                                title={text}                               
                                />
                            </List.Item>
                            )}
                        />
                    </AdvantageListContainer>
                </FAQComparisionContent>
                <FAQComparisionContent className="right" xs={11} sm={10} md={8} lg={8} xl={8} xxl={4}>
                    <div className="faq-header">                            
                        <Icon src={"logo.svg"} width="100%" height={"100%"}  />
                        <Icon className="logo-stamp" src="icons/white-logo.svg" width="12rem" height="12rem" />
                    </div>
                    <AdvantageListContainer>
                        {/* <div>asdasd</div>
                        <div>asdasd</div>
                        <div>asdasd</div> */}
                        <AdvantageList
                            itemLayout="horizontal"
                            bordered={false}
                            dataSource={productProps}
                            renderItem={(text: any, index: any) => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<><Icon src="icons/star2.svg" width="32px" height="32px" /></>}
                                title={text}                               
                                />
                            </List.Item>
                            )}
                        />
                    </AdvantageListContainer>                    
                </FAQComparisionContent>
            </FAQComparision>
                <ShopNowContainer>
                    <Button icon={<><Icon color={"#164CA4"} src={"icons/stars.svg"} width="24px" height="24px" /></>} onClick={openModal}>Shop Now</Button>
                </ShopNowContainer>
                {/* <MultiColumnList dataSource={data} renderItem={(item: any, index: any) => <Item>dfdf</Item>} /> */}
                {/* {
                            data.map((value,index) => (<Col key={index} span={12}><List size="small"><List.Item>{value}</List.Item></List></Col>))
                        } */}
                {/* <div style={{overflow: 'hidden'}}> */}
                {/* gutter={16} */}
                {/* xs={12} sm={10} md={8} lg={8} xl={8} xxl={4} */}
                    <FAQTitleSection gutter={32} justify={"center"}>
                        <AntdCol xs={20} sm={24} md={24} lg={24} xl={17} xxl={16}>
                            <>
                                <FAQList>
                                    <FAQListItem className="faq-list-item-header" id="faq">
                                        <div>
                                            <Icon src="icons/moon.svg" width="21px" height="21px" />
                                        </div>
                                        <div>
                                            <Typography fontSize="16px" lineheight="24px" $type="Bold" letterSpacing="4.8px">SLEEP MASK</Typography>
                                        </div>
                                    </FAQListItem>
                                    <FAQListItem style={{borderBlockEnd: 'none'}}>                                
                                        <FAQTitle>
                                            Frequently <br/>
                                            Asked <br/>
                                            Questions.
                                        </FAQTitle>                               
                                    </FAQListItem>
                                </FAQList>
                            </>                    
                        </AntdCol>
                    </FAQTitleSection>
                    <FAQGrid gutter={6} justify={"center"}>
                        <Col className="first" xs={20} sm={20} md={12} lg={12} xl={8} xxl={8}>                        
                          <Collapse
                                className="leftAccordion"
                                defaultActiveKey={[]}
                                ghost
                                expandIconPosition={'end'}
                                collapsible="icon"
                                items={FAQTexts.slice(0,6)}
                                expandIcon={({ isActive }: any) => <Icon src={`icons/${ !isActive ? 'plus-signal' : 'minus-signal' }.svg`} color="rgba(108, 108, 108, 0.60)" width="21px" height="21px" />}
                            />
                        </Col>
                        <Col className="second" xs={20} sm={20} md={12} lg={12} xl={8} xxl={8}>
                            {/* <FAQList>
                                {
                                    FAQTexts.slice(5).map((value,index) => (
                                        <FAQListItem key={index}>
                                            <div>
                                                <div><Typography fontSize="32px">{(index + 6) < 10 ? String(index + 6).padStart(2,'0') : index + 6}</Typography></div>
                                                <div><FAQListLink href="#">{value}</FAQListLink></div>
                                                <div>+</div>
                                            </div>
                                        </FAQListItem>
                                    ))
                                }
                            </FAQList> */}
                            <Collapse
                                className="collapse-benefits-second"
                                defaultActiveKey={[]}
                                ghost
                                expandIconPosition={'end'}
                                collapsible="icon"
                                items={FAQTexts.slice(6,FAQTexts.length)}
                                expandIcon={({ isActive }: any) => <Icon src={`icons/${ !isActive ? 'plus-signal' : 'minus-signal' }.svg`} color="rgba(108, 108, 108, 0.60)" width="21px" height="21px" />}
                            />
                            <Typography className="more-link-button" fontSize="1.5rem" $type="Bold" lineheight="2rem" onClick={() => expandCollapse('.collapse-benefits-second')}>more</Typography>
                        </Col>                    
                    </FAQGrid>
                {/* </div> */}
                {/* TODO: uncomment this */}
                <SlideSection>
                    <SlideContainer $rotate="1.706deg">
                            <Slide>
                                <>
                                    <AfterHoursStamp strokeWidth="1" color="#D2EEF9" position="relative" />
                                    <Logo className="logo-slide-white" width={'109.13px'} height={'52.86px'} />
                                </>
                            </Slide>
                    </SlideContainer>
                </SlideSection>      
            </FAQContainer>
            {/* style={{overflow: 'hidden'}} */}            
        </>
    )
}