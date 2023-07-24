import { Icon } from "Icons"
import { Button } from "components/Button"
import Typography from "components/Typography"
import styled from "styled-components"


const ProductDetailsContainer = styled.div`
    // text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
    padding-top: 307.8px;
    background: #FFF;
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
`

const ProductBanner = styled.div`
    background-image: url('img/product-banner.png');
    background-size: cover;
    background-repeat: no-repeat;
    // box-sizing: border-box;
    background-position: center;
    height: 836px;
    width: 1127px;
`

export default function ProductDetails(props: React.PropsWithChildren){
    return (
        <ProductDetailsContainer>
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
            <ProductBanner>
                <ShopNowButton icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton>                
            </ProductBanner>            
        </ProductDetailsContainer>
    )
}