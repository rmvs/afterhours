import { Avatar, Col as AntdCol, List, Row } from "antd";
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
    }    
    
`

const AdvantageListContainer = styled.div`
    // display: inline-flex;
    // flex-direction: column;
    // align-items: flex-start;
    // gap: 25px;
    padding: 70px;
`

const iconSVG = (
    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M21.1294 25.9361L21.3697 25.7699C22.1217 25.25 22.4977 24.9899 22.8341 24.7112C24.6618 23.1964 25.8893 21.0849 26.2979 18.7533C26.3731 18.3242 26.4122 17.8703 26.4903 16.9624L26.5307 16.493C26.6601 14.9903 26.6472 13.4788 26.4922 11.9785L26.4443 11.5142C26.1731 8.88873 24.5613 6.58759 22.1796 5.42558C18.2636 3.51504 13.6796 3.51504 9.76363 5.42558C7.38193 6.58759 5.77013 8.88874 5.49893 11.5142L5.45097 11.9785C5.296 13.4788 5.2831 14.9903 5.41245 16.493L5.45286 16.9624C5.53101 17.8703 5.57008 18.3242 5.64528 18.7533C6.05385 21.0849 7.28141 23.1964 9.1091 24.7112C9.44544 24.9899 9.82154 25.25 10.5735 25.77L10.8138 25.9361C11.8361 26.643 12.3473 26.9965 12.8596 27.2422C14.8261 28.185 17.1171 28.185 19.0836 27.2422C19.5959 26.9965 20.1071 26.643 21.1294 25.9361Z" stroke="#164CA4" stroke-width="1.99638"/>
        <path d="M18.3247 13.6182L13.6191 18.3237M18.3247 18.3237L13.6191 13.6182" stroke="#164CA4" stroke-width="1.99638" stroke-linecap="round"/>
    </svg>
)


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
        // border-block-end: 0px;
    }
    .ant-list-item-meta-title {
        color: #164CA4 !important;
        leading-trim: both !important;
        text-edge: cap !important;
        font-family: Roc Grotesk;
        font-size: 21.295px !important;
        font-style: normal !important;
        font-weight: 350 !important;
        line-height: 26.618px !important;  /* 125% */
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

const MultiColumnList = styled(List)`
    column-count: 2; /* Set the number of columns you want */
    column-gap: 29px; /* Adjust the gap between columns as needed */
    padding-top: 250px;
    padding-bottom: 250px;
    padding-left: 298px;
    padding-right: 298px;
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
    padding-bottom: 100px;
`

const FAQGrid = styled(Row)`
    padding-top: 250px;
    padding-bottom: 250px;
    padding-left: 298px;
    padding-right: 298px;
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
    align-items: flex-end;

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
`

const FAQListItem = styled(Item)<{$header?: boolean}>`
    // padding-top: 29px;
    .faq-list-item-header {
        border-block-end: none !important;
    }    
`

const FAQListLink = styled.a`
    color: black;
`

const SlideContainer = styled(DefaultSlideContainer)`
    padding-top: 159.44px;
`

export default function FAQ(props: React.PropsWithChildren){
 
    const productProps = ['Strap free','100% Light Blocking','Stays in place','Conforms to your face'];

    const otherCons = [
        'Uncomfortable Straps',
        'Light seeps in',
        'Slips around',
        'One-size Uneven fit'
    ]

    const FAQTexts = [
        'What is the material of the sleep mask?',
        'What is the benefit of using silk?',
        'What are the benefits of using silicone?',
        'How does the sleep mask block out light?',
        'How does the sleep mask stay in place?',
        'Can I use the sleep mask if I am a side sleeper?',
        'Is the sleep mask suitable for all faces?',
        'What skin types is the sleep mask suitable for?',
        'How many uses is it good for?',
        'How do you know when the sleep mask is ready to be replaced?',
        'How do you clean the sleep mask?'
    ]

    return (
        <FAQContainer>
            <FAQComparision justify={"center"}>
                <FAQComparisionContent className="left" span={6}>
                    <Typography className="faq-header" fontSize="29.363px" $fontFamily="Laviossa" >Others</Typography>
                    <AdvantageListContainer>
                        <AdvantageList
                            itemLayout="horizontal"
                            bordered={false}
                            dataSource={otherCons}
                            renderItem={(text: any, index: any) => (
                            <List.Item>
                                <List.Item.Meta
                                avatar={<><Icon src="icons/cons-mark.svg" width="32px" height="32px" /></>}
                                title={text}                               
                                />
                            </List.Item>
                            )}
                        />
                    </AdvantageListContainer>
                </FAQComparisionContent>
                <FAQComparisionContent className="right" span={6}>
                    <div className="faq-header">
                        <Icon src="icons/white-logo.svg" width="192px" height="192px" style={{position: 'absolute', right: '-11%',top: '-16%'}} />
                       <Icon src={"logo.svg"} width="150px" height={"100%"}  />
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
                <Button icon={<><Icon color={"#164CA4"} src={"icons/stars.svg"} width="24px" height="24px" /></>} type="primary">Shop Now</Button>
            </ShopNowContainer>
            {/* <MultiColumnList dataSource={data} renderItem={(item: any, index: any) => <Item>dfdf</Item>} /> */}
            {/* {
                        data.map((value,index) => (<Col key={index} span={12}><List size="small"><List.Item>{value}</List.Item></List></Col>))
                    } */}
            <div style={{overflow: 'hidden'}}>
                <FAQGrid gutter={16}>
                    <Col span={12} className="first">                        
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
                            {
                                FAQTexts.slice(0,5).map((value,index) => (
                                    <FAQListItem key={index}>
                                        <div>
                                            <div><Typography fontSize="32px">{index < 10 ? String(index + 1).padStart(2,'0') : index + 1}</Typography></div>
                                            <div><FAQListLink href="#">{value}</FAQListLink></div>
                                            <div>+</div>
                                        </div>
                                    </FAQListItem>
                                ))
                            }
                            {/* <FAQListItem>
                                <div>
                                    <div>01</div>
                                    <div><a href="#">What is the material of the sleep mask?</a></div>
                                    <div>3</div>
                                </div>
                            </FAQListItem>
                            <FAQListItem>
                                <div>
                                    <div>01</div>
                                    <div>What is the material of the sleep mask?</div>
                                    <div>3</div>
                                </div>
                            </FAQListItem>
                            <FAQListItem>
                                <div>
                                    <div>01</div>
                                    <div>What is the material of the sleep mask?</div>
                                    <div>3</div>
                                </div>
                            </FAQListItem> */}
                        </FAQList>
                    </Col>
                    <Col span={12}>
                        <FAQList>
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
                        </FAQList>
                    </Col>                    
                </FAQGrid>
            </div>
            <SlideContainer $rotate="rotate(1.594deg)">
                <Slide>
                    <>
                        <AfterHoursStamp strokeWidth="1" color="#D2EEF9" position="relative" />
                        <Logo width={'109.13px'} height={'52.86px'} />
                    </>
                </Slide>
            </SlideContainer>
        </FAQContainer>
    )
}