import { Icon, Star } from "Icons";
import { SlideContainer } from "components/AfterHoursSlideStrap";
import { Review } from "components/Product/ProductDescription";
import Slide from "components/Slide";
import Typography from "components/Typography";
import styled from "styled-components";
import { REVIEWS } from '../constants/index'
import React from "react";
import Carousel from "components/Carousel";
import TweetSlide from "components/TweetSlide";
import { Col, Row } from "antd";

const ReviewContainer = styled.div`
    
    .review-avatar {
        border-radius: 10px;
        border: solid 1px white;
        max-width: 57px;
        max-height: 59px;
    }

`

const DreamsLabel = styled.div`
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    @media (max-width: 480px){
        :nth-child(2){
            font-size: 2.5rem;
            line-height: 2.5rem;
            letter-spacing: -0.075rem;
        }
    }
    :nth-child(2){
        text-align: center;
    }
`

const DreamsLabelContainer = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 154px;
    padding-bottom: 104px;    
`

const ReviewsSection = styled.div`
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    gap: 23px;
    overflow: hidden !important;
`

export const Box = styled.div<{ $color: string }>`
    display: flex;
    height: 300px;
    // height: 350px;
    padding: 50px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
    border-radius: 50px;
    background: ${ props => props.$color };
`

export const BoxContent = styled.div`
    display: flex;
    // width: 425px;
    flex-direction: column;
    align-items: flex-start;
    gap: 20px;
    // padding: 50px;

    @media(max-width: 480px){
        width: 100%;
    }
`

export const BoxHeader = styled.div`
    display: flex;
    // justify-content: flex-end;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    // gap: 206px;
`


export const BoxContentAvatar  = styled.div<{ $hasAvatar?: boolean }>`
    ${ props => props.$hasAvatar ?
     `
        border-radius: 12px;
        border: 2px solid #FFF;
        background: #1B1B1B;
        padding: 14px;
        display: flex;
     ` : ''
    }
    // justify-content: center;
    // align-items: center;    
`

export const BoxContentUserInfo = styled.div`
    display: flex;
    height: 55px;
    padding: 2px 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    div:nth-child(1) {
        // word-break: break-all;
        text-overflow: ellipsis;
        overflow: hidden;
        whitespace: nowrap;
        max-width: 200px;
    }
`


export const ReviewDescription = styled.div`
    display: flex;
    // width: 423px;
    padding-right: 0px;
    flex-direction: column;
    align-items: flex-start;
    gap: 13.5px;
    flex-shrink: 0;
    text-align: justify;

    & > div:nth-child(2) {
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 4;
        -webkit-box-orient: vertical;
        // max-width: 425px;
        // max-height: 80px;
    }
    
    @media(max-width: 480px){
        .review {
            font-size: 1rem;
            font-style: normal;
            font-weight: 350;
            line-height: 1.25rem;
        }
    }

`

export const ReviewInfo = styled.div`
    display: flex;
    gap: 15px;
    // align-items: center;
`

export const ReviewerTag = styled.div`
    display: flex;
    // center
    align-items: end;
    gap: 7px;
`

const ReviewSectionContainer = styled.div`
    overflow-x: hidden;
`

// const now = new Date();

// const reviews = [
//     {
//         name: 'Jessica, 28',
//         isVerified: true,
//         avatar: null,
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 2).getTime(),
//         review: `
//             I’ve got to admit, sleep mask patches were a new phenomena for me, but I’m glad I tried them. 
//             These are so much more comfortable than regular sleep masks (and not as pricey as other silk sleep masks either!)
//         `
//     },
//     {
//         name: 'Laura B. | @bermu_u',
//         isVerified: true,
//         avatar: null,
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
//         review: `
//         The fabric and the shape is gentle and the way this mask conforms 
//         around my eyes doesn't disturb any of my under-eye creams or serums, 
//         which is a huge plus for my skincare routine.
//         `
//     },
//     {
//         name: 'Sofia, 32',
//         isVerified: true,
//         avatar: 'avatar/avatar-1.png',
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 3).getTime(),
//         review: `
//             I’m like a human tornado, but this mask stays put without those 
//             pesky tight straps making me feel like a captive in my own bed.
//         `
//     },
//     {
//         name: 'Laura B. | @bermu_u',
//         isVerified: true,
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 2).getTime(),
//         review: `
//             Perfect for side sleepers like myself because 
//             it stays in place even if I’m sleeping on my side.
//         `
//     },
//     {
//         name: 'Luis, 29',
//         isVerified: true,
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
//         review: `
//             This sleep mask is pure genius, my friends. 
//             It's a simple design that's like a hug for your eyes, without the awkwardness. 
//             Who knew a little mask could make such a colossal difference in your sleep?
//         `
//     },
//     {
//         name: 'Ryan, 27',
//         isVerified: true,
//         stars: 5,
//         date: new Date(now.getFullYear(),now.getMonth(), now.getDate() - 1).getTime(),
//         review: `
//         I am not a big fan of regular sleep masks and the way they look and wrap around my head, but these sleep mask 
//         patches conform perfectly to the shape of my eyes, allowing me to move around freely without worrying about the mask shifting or falling off during the night and without having 
//         a headband wrapped around my head. It blocks out all the light and the sleep mask is incredibly versatile not just for nightly use but it is compact and portable, making it a perfect travel companion for long flights or hotel stays. Overall, this is an excellent investment for anyone who values their sleep. 😴
//         `
//     }
// ]

export const LastReview = ({ date }: React.PropsWithChildren<{ date: number }>) => {
    const now = new Date()
    return (
        <Typography $type="Light" fontSize="14px" lineheight="24px" letterSpacing="0px">
            { date && Math.ceil(Math.abs(now.getTime() - date)/(1000 * 60 * 60 * 24)) } days ago
        </Typography>
    )
}

{/* <BoxContainer>                 */}
{/* style={{overflow: 'hidden'}} */}
{/* <SlideContainer>
                            <Slide> */}
{/* </Slide>
                        </SlideContainer> */}
// <Typography color="#FFF" fontSize="24px" letterSpacing="0px" lineheight="28px">SL</Typography>
export default function Reviews(props: React.PropsWithChildren){

    const cards = REVIEWS.map(({ name, isVerified, avatar, stars, date, review },index) => (
        <Box key={index} $color={index % 2 === 0 ? '#D2EEF9' :'#FAF1E8'}>
            <BoxContent>
                <BoxHeader>
                    <BoxContentUserInfo>
                        <Typography fontSize="14px" lineheight="24px" $type="Bold" letterSpacing="0px">{ name }</Typography>
                        <ReviewerTag>
                            {
                                isVerified && (
                                    <>
                                        <img src="icons/check.png" alt="Verified reviewer" />
                                        <Typography fontSize="12px" letterSpacing="0px" lineheight="16px" $type="Light">Verified Reviewer</Typography>
                                    </>
                                )
                            }
                        </ReviewerTag>
                    </BoxContentUserInfo>
                    <BoxContentAvatar $hasAvatar={!avatar}>
                        {
                            avatar ? <img src="avatar/avatar-1.png" alt={`avatar-${name}`} /> : (<img src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`} alt={`avatar-${name}`} />)
                        }
                    </BoxContentAvatar>
                </BoxHeader>
                <ReviewDescription>
                    <ReviewInfo>
                        <Review>
                            { Array.from({ length: stars!! }).map((value,index) => (<Star key={index} />)) }                                 
                        </Review>
                        <LastReview date={date} />
                    </ReviewInfo>
                    <Typography className="review" fontSize="16px" lineheight="20px" letterSpacing="0px" $type="Light" color="#6C6C6C">
                        {review}
                    </Typography>
                </ReviewDescription>
            </BoxContent>
        </Box>
    ))

    return (
        <>
            <ReviewContainer id="review">
                <Row justify={"center"}>
                    <Col xs={18} sm={18} md={18} lg={18}>
                        <DreamsLabelContainer>
                            <DreamsLabel>
                                <Review>
                                    { Array.from({ length: 5 }).map((value,index) => (<Star key={index} />)) }                
                                </Review>
                                <Typography className="dreams-label" fontSize="55px" lineheight="55px" letterSpacing="-1.65px">
                                    The best of dreams
                                </Typography>
                            </DreamsLabel>
                        </DreamsLabelContainer> 
                    </Col>
                </Row>
            <TweetSlide />
        </ReviewContainer>
        </>
    )
}