import Carousel, { CarouselThumbnail } from 'components/Carousel'
import styled from 'styled-components'
import { Col, Row } from 'antd';
import { Icon, Moon, Star } from 'Icons';
import Collapse from 'components/Collapse';
import Button from 'components/Button/Button';
import Benefits from 'components/Benefits';
import AfterHoursStamp from 'components/Stamp';
import Typography from 'components/Typography';

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

    .button-try-now-mobile{
        display: none;
    }

    @media (max-width: 480px),(max-width: 575px){
        .button-try-now-mobile {
            display: inherit;
        }
    }

`
const ProductHero = styled(Row)`
  padding-top: 141px;
  /*padding-left: 240px;
  padding-right: 218px;
  gap: 9px;*/

  gap: 130px;

  .button-try-now-desktop {
    padding-top: 40px;
  }

  @media(max-width: 480px) {
    padding-top: 10px;
    // padding-left: 43px;
    // padding-right: 43px;

    .button-try-now-desktop {
        display: none;
    }

    .product-information {
        margin-right: 0px;
    }

    .product-information-text{
        font-size: 35px;
        line-height: 40px;
        letter-spacing: -1.2px;        
    }
    .product-information-text-description {
        font-size: 13px;
        line-height: 18px;
    }

    .product-highlight {
        padding: 4px 4px !important;
    }

    gap: 30px;   
  }

  @media only screen and (min-width: 481px) and (max-width: 575px){
    .button-try-now-desktop {
        display: none;
    }

    .product-information-text-description {
        font-size: 15px;
    }
  }

  @media only screen and (min-width: 576px) and (max-width: 767px) {    
    .product-information-text-description {
        font-size: 15px;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .product-information-text-description {
        font-size: 16px;
        line-height: 18px;
    }
  }

  /* 1366px*/
  @media only screen and (min-width: 1025px) and (max-width: 1440px) {
    .product-information-text-description {
        font-size: 16px;
        line-height: 18px;
    }
  }

  @media only screen and (min-width: 1441px){
    .product-information-text-description {
        font-size: 18px;
        line-height: 18px;
    }
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


const BolderText = styled.span` 
    font-family: Roc Grotesk Bold;
`

export const Review = styled.div<{$hover?: boolean}>`
    display: flex;
    /*width: 116.391px;
    height: 21.764px;*/
    align-items: flex-start;
    gap: 2.839px;

    svg {
        path {
            fill: #ffdf00;
        }
    }

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


const ProductInformationDescription = styled.div`
    color: var(--grey, #6C6C6C);
    leading-trim: both;
    text-edge: cap;
    font-family: Roc Grotesk Light;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;

    // margin-bottom: 20px;
`

const HighlightText = styled.span`
    color: inherit;
    font-weight: 900;
`

export default function ProductDescription({ children, openModal }: React.PropsWithChildren<{openModal: any}>){

    const cards = [
        <CarouselThumbnail src={'img/carousel/1.png'} />,
        <CarouselThumbnail src={'img/carousel/2.png'} />,
        <CarouselThumbnail src={'img/carousel/3.png'} />,
        <CarouselThumbnail src={'img/carousel/4.png'} />,
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
                        <HighlightText>Say goodbye to uncomfortable sleep masks</HighlightText> with scratchy fabric, odd shapes, and tight straps that restrict, leave you with a headache, and place pressure where it isn’t needed.                         
                    </ProductInformationDescription>
                    <ProductInformationDescription>
                    <HighlightText>Our 100% light-blocking sleep mask patches,</HighlightText> crafted with bio-adhesive silicone and soft silk, reawakens what it means to have a good night sleep. 
                        The unique shape conforms to the contours of your eyes without the need for straps or bands.
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
                        Peel the patches from their protective liner,place on each eye and gently tap around the eye area to create a vacuum like seal. Return to tin for storage after each use. 
                        Wash the patches with light soap and water. For best results, let air dry sticky side up.
                    </ProductInformationDescription>
                </>
            )
        }
    ]

    const productIntroductionStyle: any = {
        display: 'flex',
        flexDirection: 'column',
        gap: '1px'
    }
    
    // xs={24} sm={18} md={18} lg={12} xl={12} xxl={4}
    // xs={24} md={8}
    return (
        <Container id="product-description">                 
            {/* 96     */}
            <ProductHero className="product-hero" justify={"center"}>                   
                <Col xs={20} sm={18} md={18} lg={10} xl={10} xxl={8}>
                    <AfterHoursStamp position="absolute" />                     
                    <Carousel cards={cards} />
                </Col>
                <Col style={productIntroductionStyle} xs={20} sm={18} md={18} lg={10} xl={10} xxl={8}>                    
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
                            <Review>
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
                        <Collapse className="product-collapse" items={collapseItems} activeKeys={collapseItems.map(({ key }) => key)} />
                        <Row className="button-try-now-desktop">
                            <Col lg={24}>
                                <Button color="#164CA4" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />} onClick={openModal}>Try Now</Button>
                            </Col>
                        </Row>
                </Col>
                <Col className="button-try-now-mobile" xs={20} sm={20}>
                    <Button color="#164CA4" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />} onClick={openModal}>Try Now</Button>                    
                </Col>
            </ProductHero>            
            <Benefits />
        </Container>
    )
}