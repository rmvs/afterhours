import { Star } from "Icons";
import { Review } from "components/Product/ProductDescription";
import Typography from "components/Typography";
import styled from "styled-components";
import React from "react";
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


export const LastReview = ({ date }: React.PropsWithChildren<{ date: number }>) => {
    const now = new Date()
    return (
        <Typography $type="Light" fontSize="14px" lineheight="24px" letterSpacing="0px">
            { date && Math.ceil(Math.abs(now.getTime() - date)/(1000 * 60 * 60 * 24)) } days ago
        </Typography>
    )
}

export default function Reviews(props: React.PropsWithChildren){   

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