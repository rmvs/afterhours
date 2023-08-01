import { Icon } from "Icons"
import { Col, Row } from "antd"
import { Button } from "components/Button"
import Typography from "components/Typography"
import styled from "styled-components"


const ProductDetailsContainer = styled.div`
    // text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 307.8px;
    padding-bottom: 308px;
    background: #FFF;

    .shop-now-container {
        display: none;
    }

    @media(max-width: 480px){
        padding-top: 79px;
        .shop-now-container {
            display: inherit;
        }
        .shop-button {
            display: none;
        }

        flex-direction: column;
        align-items: center;
        gap: 61px;
    }
    
`

// const ProductType = styled.div`
//     display: flex;
//     align-items: center;    
//     justify-content: center;
//     gap: 17px;    
//     flex-shrink: 0;      
// `

// const ProductTitle = styled.div`
//     text-align: center;
// `

const ShopNowButton = styled(Button)`
    // position: absolute;
    // top: 77%;
    // left: 46.4%;
    padding: 32px 32px 32px 16px;
    margin-inline-end: 0px;
    background: #164CA4;
    margin-top: 650px;
    margin-left: 491px;

    @media(max-width: 480px){
        margin: 0;
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 32px;
        border-radius: 16px;
    }
`

const ProductBanner = styled.div`
    background-image: url('img/product-banner.png');
    // background-size: cover;
    background-size: contain;
    background-repeat: no-repeat;
    // box-sizing: border-box;
    background-position: center;
    // height: 836px;
    // width: 1127px;

    @media(max-width: 480px){
        background-image: url('img/product-anatomy-mobile.png');
        height: 943px;
        width: 300px
    }
`

export default function ProductDetails({ openModal }: React.PropsWithChildren<{openModal: any}>){
    return (
        <ProductDetailsContainer className="product-details-section">
            {/* <ProductType>
                <div>
                    <Icon src="icons/moon.svg" width="21px" height="21px" />
                </div>
                <Typography fontSize="16px" color="#164CA4" fontWeight="24px" letterSpacing="4.8px" $textTransform="uppercase" $type="Bold">
                    SLEEP MASK
                </Typography>
            </ProductType>
            <ProductTitle>
                <Typography fontSize="55px" lineheight="55px" letter-spacing="-1.65px">
                    afterhours
                </Typography>
            </ProductTitle> */}
            {/* <img id="bust" src="img/product-anatomy.png" alt="bust" /> */}
            {/* <ProductBanner>
                <ShopNowButton onClick={openModal} className="shop-button" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton>                
            </ProductBanner>
            <div className="shop-now-container">
                <ShopNowButton onClick={openModal} className="shop-button-mobile" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton> 
            </div>  */}
            <Row justify={"center"}>
                <Col xs={20} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    {/* <ProductBanner>
                        <ShopNowButton onClick={openModal} className="shop-button" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton>                
                    </ProductBanner> */}
                        <img src="img/product-banner.png" alt="Product Afterhours" style={{ width: '100%', height: 'auto' }} />
                    <div className="shop-now-container">
                        <ShopNowButton onClick={openModal} className="shop-button-mobile" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton> 
                    </div>
                </Col>
            </Row>
            {/* <Row justify={"center"}>
                <Col>
                    <div className="shop-now-container">
                        <ShopNowButton onClick={openModal} className="shop-button-mobile" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton> 
                    </div>
                </Col>
            </Row> */}
        </ProductDetailsContainer>
    )
}