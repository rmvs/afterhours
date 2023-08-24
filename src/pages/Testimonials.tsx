import { Icon, Star } from "Icons"
import { Col as AntdCol, Row as AntdRow, Button as ArrowButton } from "antd"
import Typography from "components/Typography"
import styled from "styled-components"
import { Box as DefaultBox, BoxContent as DefaultBoxContent, BoxContentUserInfo, BoxHeader, LastReview, ReviewDescription as DefaultReviewDescription, ReviewInfo, ReviewerTag } from "./Reviews"
import { Review } from "components/Product/ProductDescription"
import { REVIEWS } from '../constants/index'
import { useState } from "react"
import { Button } from "components/Button"

const TestimoniesContainer = styled.div`
    padding-top: 100px;
    @media(max-width: 480px), (max-width: 575px){
        padding-top: 4.44rem;
        padding-bottom: 4.31rem;
        
    }

    .reviews-logo {
        position: absolute;
        margin-left: calc(85%  - 8rem);
        margin-top: calc(-4% - 8rem * 0.5);
        transform: rotate(24.446deg);
        width: 8rem;
        height: 8rem;

        @media(max-width: 480px),(max-width: 575px) {
            top: 0;
            left: 0;
            margin-left: 60%;
            margin-top: -15%;
            width: 6rem;
            height: 6rem;
        }
    }
`

const Row = styled(AntdRow)`
    gap: 50px;
`

const Col = styled(AntdCol)`

`

const SleepMaskLabel = styled.div`
    display: inline-flex;
    // height: 28.137px;
    align-items: flex-start;
    gap: 17px;
    flex-shrink: 0;
`

const OptionsContainer = styled.div`
    display: inline-flex;
    flex-direction: column;
    gap: 7px;
`

const Options = styled.div`
    display: inline-flex;
    flex-direction: column;
    // gap: 100px;
    gap: 6.25rem;

    @media (max-width: 480px){
        gap: 2rem;
    }
`

const OptionsControls = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 12px;

    button {
        display: flex;
        align-items: center;
        justify-content: center;
        background: var(--cream);
        border-radius: 40%;
        border: 2px solid var(--main-blue);
    }
`

const Box = styled(DefaultBox)`
    padding: 57px;
    // height: 508px;
    height: 100%;
    flex-direction: inherit;

    @media (max-width: 480px), (max-width: 575px){
        padding: 1.94rem;
        height: 100%;
    }
`

const BoxContent = styled(DefaultBoxContent)`
    gap: 50px;
    width: 616px;
    // height: 100%;
    // padding: 57px;
    // height: 231px;
`

const ReviewDescription = styled(DefaultReviewDescription)`
    gap: 30px;
    & > div:nth-child(2) {
        -webkit-line-clamp: 20;
    }    
`
const ShopNowSection = styled.div`
    padding-top: 104px;
    @media (max-width: 480px),(max-width: 575px){
        padding-top: 40px;
    }
    // padding-bottom: 182px;
`

const ShopNow = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-content: center;
    gap: 17px;
    width: 100%;
    align-items: center;
`

export default function Testimonies({ openModal }: React.PropsWithChildren<{ openModal: any }>){

    const reviewPredicate = (review: any) => review.name.startsWith('Ryan')
    const [ index, setIndex ] = useState(REVIEWS.findIndex(reviewPredicate))

    const changeReview = (type: 'prev' | 'next') => {
        const idx = type === 'prev' ? (index - 1 < 0 ? REVIEWS.length - 1 : index - 1) : index + 1  >= REVIEWS.length ? 0 : index + 1;
        setIndex(prev => idx)
    }

    return (
        <TestimoniesContainer>
            <Row justify={"center"}>
                <Col xs={20} sm={18} md={18} lg={12} xl={12} xxl={6}>
                  <OptionsContainer>
                    <SleepMaskLabel>
                        <Icon src="icons/moon.svg" width="21px" height="21px" />
                        <Typography fontSize="16px" lineheight="24px" $type="Bold" letterSpacing="4.8px">SLEEP MASK</Typography>                    
                    </SleepMaskLabel>
                    <Options>
                        <Typography fontSize="55px" lineheight="55px" letterSpacing="-1.65px">More reviews</Typography>
                        <OptionsControls>
                            <ArrowButton onClick={() => changeReview('prev')} shape="circle" icon={<Icon src="icons/arrow-left.svg" width="16px" height="16px" />}  />
                            <ArrowButton onClick={() => changeReview('next')} shape="circle" icon={<Icon src="icons/arrow-right.svg" width="16px" height="16px" />}  />
                        </OptionsControls>
                    </Options>                     
                  </OptionsContainer>             
                </Col>
                <Col xs={20} sm={18} md={18} lg={12} xl={12} xxl={6}>
                    <Box $color="#FFFBF8">
                        <Icon className="reviews-logo" src={"stamp-inverted.svg"} />
                        <BoxContent>
                            <BoxHeader>
                                <BoxContentUserInfo>
                                <Typography fontSize="14px" lineheight="24px" $type="Bold" letterSpacing="0px">{ REVIEWS?.[index]?.name }</Typography>
                                    <ReviewerTag>
                                        {
                                             REVIEWS?.[index]?.isVerified && (
                                                <>
                                                    <img src="icons/check.png" alt="Verified reviewer" />
                                                    <Typography fontSize="12px" letterSpacing="0px" lineheight="16px" $type="Light">Verified Reviewer</Typography>
                                                </>
                                            )
                                        }
                                    </ReviewerTag>
                                </BoxContentUserInfo>
                            </BoxHeader>
                            <ReviewDescription>
                                <ReviewInfo>
                                    <Review>
                                        { Array.from({ length:  REVIEWS?.[index]?.stars || 0 }).map((value,index) => (<Star key={index} />)) }                                 
                                    </Review>
                                    <LastReview date={ REVIEWS?.[index]?.date || 0} />
                                </ReviewInfo>
                                <Typography className="review" fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">
                                    {  REVIEWS?.[index]?.review }
                                </Typography>
                            </ReviewDescription>
                        </BoxContent>
                    </Box>                
                </Col>                
            </Row>
            <Row justify={"center"}>
                <Col xs={22} sm={12} md={8} lg={6}>
                    <ShopNowSection>
                        <ShopNow>
                            {/* <Button>Shop Now</Button> */}
                            <div>
                                <Button onClick={openModal} color="#164CA4" icon={<><Icon src={"icons/stars.svg"} width="24px" height="24px" /></>}>Shop Now</Button>
                            </div>
                            <div>
                                <Typography className="guarantee-label" fontSize="16px" $type="Light" letterSpacing="0px" color="#6C6C6C">100% Happiness Guaranteed</Typography>
                            </div>
                        </ShopNow>
                    </ShopNowSection>
                </Col>
            </Row>            
        </TestimoniesContainer>
    )
}