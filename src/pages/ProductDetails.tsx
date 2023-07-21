import { Icon } from "Icons"
import { Button } from "components/Button"
import Typography from "components/Typography"
import styled from "styled-components"


const ProductDetailsContainer = styled.div`
    // text-align: center;
    display: flex;
    justify-content: center;
    position: relative;
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
    position: absolute;
    top: 60%;
    left: 50%;
    padding: 32px 32px 32px 16px;
    margin-inline-end: 0px;
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
            <img id="bust" src="img/product-bust.png" alt="bust" />
            <ShopNowButton type="primary" icon={<Icon src={"icons/stars.svg"} width="24px" height="24px" />}>Shop Now</ShopNowButton>
        </ProductDetailsContainer>
    )
}