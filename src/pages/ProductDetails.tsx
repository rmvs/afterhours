import { Icon } from "Icons"
import { Col, Row } from "antd"
import { Button } from "components/Button"
import styled from "styled-components"


const ProductDetailsContainer = styled.div`
    // text-align: center;
    // display: inline-flex;
    // justify-content: center;
    position: relative;
    padding-top: 307.8px;
    // padding-bottom: 308px;
    padding-bottom: 168px;
    background: #FFF;

    .shop-now-container {
        // display: none;
        padding-top: 76px;
    }

    @media(max-width: 480px){
        padding-top: 79px;
        padding-bottom: 92.43px;        
        .shop-button {
            display: none;
        }

        flex-direction: column;
        align-items: center;        
    }

    @media(max-width: 575px){
        padding-top: 79px;
        padding-bottom: 92.43px;
        .shop-now-container {
            display: inherit;
            padding-top: 61px;
        }        
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
    // margin-top: 650px;
    // margin-left: 491px;

    @media(max-width: 480px){
        margin: 0;
        padding-top: 24px;
        padding-bottom: 24px;
        padding-left: 16px;
        padding-right: 32px;
        border-radius: 16px;
    }
`

// const ProductBanner = styled.div`
//     // background-image: url('img/product-banner.png');
//     // // background-size: cover;
//     // background-size: contain;
//     // background-repeat: no-repeat;
//     // // box-sizing: border-box;
//     // background-position: center;
//     // max-height: 836px;
//     // max-width: 1127px;

//     display: none;    

//     @media(max-width: 575px){
//         background-image: url('img/product-anatomy-mobile.png');
//         height: 943px;
//         width: 300px;
//         display: block;
//     }
// `



const ProductBanner = styled.img`
    width: 100%;
    height: auto;
    @media(max-width: 767px){
        display: none;
    }
`

const ProductBannerMobile = styled.img`
    width: 100%;
    height: auto;
    display: none;
    @media(max-width: 767px){
        display: inherit;
    }
`

export default function ProductDetails({ openModal }: React.PropsWithChildren<{openModal: any}>){
    return (
        <ProductDetailsContainer className="product-details-section">
            <Row justify={"center"}>
                <Col xs={20} sm={12} md={22} lg={22} xl={18} xxl={18}>                    
                        <ProductBanner src="img/group-106-4x.png" alt="Product Afterhours" />               
                        <ProductBannerMobile src="img/group-116.png" alt="Product Afterhours" />
                </Col>
            </Row>
            <Row className="shop-now-container" justify={"center"}>
                <Col xs={24} sm={24} md={24} lg={24} xl={24} xxl={24}>
                    <div style={{width: '100%',textAlign: 'center'}}>
                        <ShopNowButton onClick={openModal} className="shop-button-mobile" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton> 
                    </div>
                </Col>
            </Row>
        </ProductDetailsContainer>
    )
}