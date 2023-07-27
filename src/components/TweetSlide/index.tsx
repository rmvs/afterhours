import { Star } from "Icons"
import { Review } from "components/Product/ProductDescription"
import Typography from "components/Typography"
import { REVIEWS } from "../../constants"
import { motion, AnimatePresence, wrap } from "framer-motion"
import { Box, BoxContent, BoxContentAvatar, BoxContentUserInfo, BoxHeader, LastReview, ReviewDescription, ReviewInfo, ReviewerTag } from "pages/Reviews"
import { useState } from "react"
import SlickList from "components/SlickList"

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

export default function TweetSlide(props: React.PropsWithChildren){    

    const [[page, direction], setPage] = useState([0, 0]);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };


    // style={{maxWidth: '32.8125rem'}}
    const cards = REVIEWS.map(({ name, isVerified, avatar, stars, date, review },index: number) => (
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
                            avatar ? <img src="avatar/avatar-1.png" alt={`avatar-${name}`} /> : (<Typography color="#FFF" fontSize="24px" letterSpacing="0px" lineheight="28px">SL</Typography>)
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

    const cardIndex = wrap(0, cards.length, page);

    return (
        <div className="animation-slide-container">            
            <div className="inner-container"> 
                <AnimatePresence initial={false}>
                    <motion.div dragElastic={1} 
                    custom={direction} 
                    exit={"exit"} 
                    animate={"center"}
                    initial={"enter"} 
                    drag={"x"} 
                    variants={variants}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
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
            <SlickList length={2} page={ direction >= 0 ? 0 : 1 } setPage={(key: number) => {
                key === 0 ?  paginate(1) : paginate(-1)
            } } />
        </div>
    )
}