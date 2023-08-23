import { Star } from "Icons"
import { Review } from "components/Product/ProductDescription"
import Typography from "components/Typography"
import { REVIEWS } from "../../constants"
import { motion, AnimatePresence, wrap } from "framer-motion"
import { Box, BoxContent, BoxContentAvatar, BoxContentUserInfo, BoxHeader, LastReview, ReviewDescription, ReviewInfo, ReviewerTag } from "pages/Reviews"
import React, { useState } from "react"
import SlickList from "components/SlickList"
import { Col, Row } from "antd"

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 100 : -100,
        opacity: 0
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 100 : -100,
        opacity: 0
      };
    }
  };


export const GenericSlide  = ({ cards, xs, sm, md }: React.PropsWithChildren<{ cards: any[], xs?: number, sm?: number, md?: number }>) => {

    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };

    const cardIndex = wrap(0, cards.length, page);

    return (
        <Row justify={"center"}>
            <Col xs={xs || 22} sm={sm || 14} md={md || 10} lg={8} xl={8} xxl={6}>
                <div className="animation-slide-container">            
                    <div className="inner-container"> 
                        <AnimatePresence initial={false} mode="wait">
                            <motion.div dragElastic={1} 
                            custom={direction} 
                            exit={"exit"} 
                            animate={"center"}
                            initial={"enter"} 
                            drag={"x"} 
                            variants={variants}
                            transition={{
                                x: { type: "tween", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 },
                            }}
                            onDragEnd={(e, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);            
                                if (swipe < -swipeConfidenceThreshold) {
                                    paginate(1);
                                } else if (swipe > swipeConfidenceThreshold) {
                                    paginate(-1);
                                }
                            }}
                            dragConstraints={{ left: 0, right: 0 }}
                            key={page}>
                                {cards[cardIndex]}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                    <SlickList length={2} page={ direction >= 0 ? 0 : 1 } changePage={(key: number) => {
                        key === 0 ?  paginate(1) : paginate(-1)
                    } } />
                </div>
            </Col>
        </Row>
    )
}

export default function TweetSlide(props: React.PropsWithChildren){

    const cards = REVIEWS.map(({ name, age, social, isVerified, avatar, stars, date, review },index: number) => (
        <Box key={index} $color={index % 2 === 0 ? '#D2EEF9' :'#FAF1E8'} style={{padding: '1.88rem'}}>
            <BoxContent>
                <BoxHeader>
                    <BoxContentUserInfo>
                        <Typography fontSize="14px" lineheight="24px" $type="Bold" letterSpacing="0px">{ name } { age && `, ${age}`  } { social && `| ${social}` }</Typography>
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
                    <BoxContentAvatar>
                        {
                            avatar ? <img src={avatar} alt={`avatar-${name}`} /> : (<img className="review-avatar" src={`https://ui-avatars.com/api/?background=0D8ABC&color=fff&name=${name}`} alt={`avatar-${name}`} />)
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

    return <GenericSlide cards={cards} />
}