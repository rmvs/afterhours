import Carousel from 'components/Carousel'
import styled from 'styled-components'
import { Col, Row } from 'antd';
import { Icon, Moon, Star } from 'Icons';
import Collapse from 'components/Collapse';
import Button from 'components/Button/Button';
import Benefits from 'components/Benefits';
import AfterHoursStamp from 'components/Stamp';
import Typography from 'components/Typography';
import { ConfigProvider } from 'antd';

const Container = styled.div`
    /*background-image: linear-gradient(160.76deg, #FFFBF8 40.44%, rgba(210, 240, 242, 0) 75.47%),
                        linear-gradient(160.76deg, #D2EEF9 40.44%, rgba(210, 240, 242, 0) 75.47%);*/
                       
    /*background-image:   linear-gradient(149deg, #FFFBF8 0%, rgba(210, 240, 242, 0.00) 97.40%),
                        linear-gradient(160.76deg, #D2EEF9 40.44%, rgba(210, 240, 242, 0) 75.47%);*/
    /*background-image: linear-gradient(149deg, #FFFBF8 40.44%, rgba(210, 240, 242, 0.00) 97.40%),
                        linear-gradient(100deg, red 40.44%, rgba(210, 240, 242, 0.00) 10%);*/
    /*height: calc(100vh - 93px - 56px);*/
    // background: rgb(255,251,248);
    // background: linear-gradient(165deg, rgba(255,251,248,1) 32%, rgba(210,238,249,0.7540266106442577) 45%, rgba(255,251,248,1) 60%);
    // height: 200vh;
    background: rgb(255,251,248);
    background: linear-gradient(169deg, rgba(255,251,248,1) 39%, rgba(210,238,249,0.891281512605042) 61%, rgba(255,251,248,1) 82%);    
    
    @media (max-width: 480px){
        .product-information {
            // font-size: 40px;
            // line-height: 40px;
            // letter-spacing: -1.2px;
            // padding-left: 43px;
            // padding-right: 43px;
        }
    }    
`
const ProductHero = styled(Row)`
  padding-top: 141px;
  /*padding-left: 240px;
  padding-right: 218px;
  gap: 9px;*/

  gap: 130px;

  padding-bottom: 160px;

  @media(max-width: 480px) {
    padding-top: 10px;
    padding-left: 43px;
    padding-right: 43px;

    .product-information {
        margin-right: 0px;
    }

    .product-information-text{
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -1.2px;        
    }
    .product-information-text-description {
        font-size: 16px;
        line-height: 18px;        
    }

    gap: 30px;

  }
`

const ProductIntroduction = styled.div`
    display: flex;
    /*width: 629px;
    height: 269px;*/
    flex-direction: column;
    flex-shrink: 0;
    margin-right: -48px;
    gap: 15px;

    .product-highlight {
        border-radius: 50px;
        border: 1px solid #164CA4;
        // width: 300px;
        width: fit-content;
        height: auto;
        flex-shrink: 0;
        // font-weight: bold;
        padding: 5px 10px;
        @media(max-width: 480px){
            border-radius: 10px !important;
        }
    }
    
`

// const Typography = styled.div`
//     color: var(--main-blue);
//     font-family: Roc Grotesk;
//     font-size: 55px;
//     font-style: normal;
//     font-weight: lighter;
//     line-height: 60px;
//     letter-spacing: -1.65px;
//     @media(max-width: 480px){
//         font-size: 20px;
//     }
// `

const ProductHighlight = styled.span`
    border-radius: 50px;
    border: 1px solid #164CA4;
    width: 300px;
    height: auto;
    flex-shrink: 0;
    // font-weight: bold;
    padding: 5px 10px;
`

const BolderText = styled.span` 
    font-family: Roc Grotesk Bold;
`

export const Review = styled.div<{$hover?: boolean}>`
    display: flex;
    /*width: 116.391px;
    height: 21.764px;*/
    align-items: flex-start;
    gap: 2.839px;

    /*svg {
        cursor: pointer;
    }*/

    ${ props => props.$hover ?
        `
            svg:hover {
                path {
                    fill: #164CA4;
                }
            }
        ` : ``
    }
`

const ReviewContainer = styled.div`
    padding: 23px 0px;
    display: flex;
    align-items: center;
    gap: 10px;

    @media(max-width: 480px){
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        gap: 15px;
        
        :nth-child(2) {
            border-left: none;
            padding-left: 0;
        }
    }
`

const SatisfactionLabel = styled.div`
    font-family: Roc Grotesk Light;
    font-size: 16px;
    font-style: normal;
    font-weight: 350;
    line-height: 20px;
    border-left: solid 1px var(--main-blue);
    padding-left: 0.5rem;
`

const PriceContainer = styled.div`
    display: flex;
    gap: 10px;
    align-items: baseline;
`

const PriceDiv = styled("div")``

const Price = styled( ({ bigger, strike, ...props }:any) => <PriceDiv {...props} /> )`
    color: black;
    font-size: ${ props => props.bigger ? '34px' : '24px' };
    text-decoration: ${ props => !!props.strike ? 'line-through' : 'inherit' };
    text-decoration-color: ${ props => !!props.strike ? 'red' : 'none' };
`

const Quantity = styled.div`
    color: black;
    font-size: 32px;
    margin-left: 9%;
`

const ProductInformationHeader = styled.div`
    display: flex;
    /*width: 260px;
    height: 24px;*/
    padding: 35.5px 0px;
    align-items: flex-start;
    gap: 17px;
    flex-shrink: 0;
    border-bottom: solid 1px #164CA4;
`

const ProductInformationLabel = styled.div`
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: 4.8px;
    text-transform: uppercase;
`

const ProductInformationDescription = styled.div`
    color: var(--grey, #6C6C6C);
    leading-trim: both;
    text-edge: cap;
    font-family: Roc Grotesk Light;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    margin-bottom: 20px;
`

const HighlightText = styled.span`
    color: inherit;
    font-weight: 900;
`

const TryNowButton = styled.button`
    display: flex;
    padding: 16px 32px 16px 16px;
    align-items: center;
    gap: 16px;
    border-radius: 16px;
    background: var(--main-blue, #164CA4);
    box-shadow: 4px 4px 0px 0px #D2F0F2;
    cursor: pointer;
`

const TryNowButtonInnerText = styled.div`
    color: var(--cream);
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 32px;
`

const ShopNowButtonContainer = styled.div`
    position: absolute;
    top: 65%;

    @media(max-width: 480px){
        top: 100%;
    }
`


export default function ProductDescription({ children, openModal }: React.PropsWithChildren<{openModal: any}>){

    const cards = [
        {
            src: 'img/carousel/1.png',
            href: '#'
        },
        {
            src: 'img/carousel/2.png',
            href: '#'
        }
        ,{
            src: 'img/carousel/4.png',
            href: '#'
        }
    ]


    const collapseItems = [
        {
            key: 'product-information',
            label: (
                <div id="information-container">
                    <Moon />
                    <div>Product Information</div>
                </div>
            ),
            children: (
                <>
                    <ProductInformationDescription>
                        <HighlightText>We all deserve a peaceful sleep.</HighlightText> When light intrudes your sleep –  a sleep mask works to block out light 
                        – but it can also obstruct your comfort.
                    </ProductInformationDescription>
                    <ProductInformationDescription>
                        <HighlightText>Say goodbye to uncomfortable sleep masks</HighlightText> with scratchy fabric, odd shapes, and tight straps that restrict, leave you with a headache, and place pressure where it isn’t needed. 
                        <HighlightText>Our 100% light-blocking sleep mask patches,</HighlightText> crafted with bio-adhesive silicone and soft silk, reawakens what it means to have a good night sleep. 
                        The unique shape conforms to the contours of the eyes without the need for straps or bands.
                    </ProductInformationDescription>
                </>
            )
        },
        {
            key: 'how-to',
            label: (
                <div id="information-container">
                    <Moon />
                    <div>HOW TO:</div>
                </div>
            ),
            children: (
                <>
                    <ProductInformationDescription>
                        <HighlightText>Peel the patches from their protective liner,</HighlightText>
                        place on each eye and gently tap around the eye area to create a vacuum like seal. Return to their tin for storage after each use. 
                        Wash the patches with light soap and water. For best results, let air dry sticky side up.
                    </ProductInformationDescription>
                </>
            )
        }
    ]
    

    return (
        <Container id="product-description">                 
            {/* 96     */}
            <ProductHero className="product-hero" justify={"center"}>                   
                <Col xs={24} md={8} flex={"auto"}>                    
                    <Carousel cards={cards} />
                </Col>
                <Col xs={24} md={8}>                    
                    {/* <div style={{height: '100%',display: 'flex',flexDirection: 'column'}}> */}
                        <ProductIntroduction className="product-information">
                            <Typography className="product-information-text" fontSize="55px" lineheight="60px" letterSpacing="-1.65px">
                                <BolderText>Finally</BolderText>, a sleep mask with no strings attached.                             
                            </Typography>
                            <Typography className="product-information-text-description product-highlight" fontSize="24px" lineheight="25px" letterSpacing="0px">
                                {/* <ProductHighlight>Introducing <BolderText>afterhours</BolderText>, the first strapless sleep mask.</ProductHighlight> */}
                                Introducing <BolderText>afterhours</BolderText>, the first strapless sleep mask.
                            </Typography>
                        </ProductIntroduction>
                        <ReviewContainer className="reviewContainer">
                            <Review $hover>
                                { Array.from({ length: 5 }).map((value,index) => <Star key={index} />) }
                            </Review>
                            <SatisfactionLabel>
                                100% satisfaction guarantee
                            </SatisfactionLabel>
                        </ReviewContainer>
                        <PriceContainer>
                            <Price strike={true}>
                                $29
                            </Price>
                            <Price bigger={true}>
                                $19                          
                            </Price>                        
                        </PriceContainer>
                        <Collapse items={collapseItems} activeKeys={collapseItems.map(({ key }) => key)} />
                        <ShopNowButtonContainer>
                            <Button type="primary" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />} onClick={openModal}>Try Now</Button>
                        </ShopNowButtonContainer>
                    {/* </div> */}
                </Col>
            </ProductHero>
            <Benefits />
        </Container>
    )
}