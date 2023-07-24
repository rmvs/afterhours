import { Row, Col} from "antd";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import React from 'react'
import { Eyelash } from "Icons";
import Typography from "components/Typography";
import { motion, useScroll, useSpring } from "framer-motion";
import useParallax from "utils/parallax";

const ProductContainer = styled.div`
    padding-top: 270.77px;
    padding-bottom: 300px;
    background: #FFF;
    // margin-bottom: 300px;
    position: relative;
    scroll-snap-type: y mandatory;
`

const ProductVideoSection = styled(Row)`
    gap: 99px;
    margin-left: 258px;
    margin-right: 258px;
`

const Video = styled(Col)`
  video {
    user-select: none;
    clip-path: inset(1px 1px);
    border-radius: 30px !important;
  }
`

const VideoDescription = styled(Col)`
    display: flex;
    align-items: center;
    -webkit-box-reflect: below -50px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));
`

const VideoDescriptionContainer = styled.div`
    height: 293.54px;
    overflow-y: scroll; 
    border-radius: 0px 27.081px 27.081px 27.081px;
    border: 1.354px solid var(--main-blue);

    &::-webkit-scrollbar {
      height: 0.5em;
      width: 0.5em;
      background: transparent;
    }
    
    &::-webkit-scrollbar-thumb {
      background: transparent;
      -webkit-border-radius: 1ex;
    }
    
    &::-webkit-scrollbar-corner {
      background: transparent;
    }
`

const VideoDescriptionItem = styled.div<{ $description?: boolean, $icon?: boolean }>`    
    ${ props => props.$description ?
      `
      display: grid;
      grid-gap: 13.54px;        
      ` : '' }
    ${ props => props.$icon ?
      `
      display: flex;
      flex-direction: column;
      height: 100%;
      ` : ''
    }
`

const DescriptionSection = styled.section`

    // width: 616.084px;
    padding: 60px;
    align-items: center;
    // gap: 21.665px;
    gap: 40.621px;

    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    scroll-snap-align: center;
    perspective: 500px;
`



export default function ProductVideo({ children, slideContainerRef  }: React.PropsWithChildren<{ slideContainerRef?: React.RefObject<HTMLDivElement> }>){

    const videoRef = useRef<HTMLVideoElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const btnVideo = useRef<HTMLButtonElement>(null)  
    const descriptionContainer = useRef<HTMLDivElement>(null)
    const [play, setPlay] = useState(false)

    const descriptionsBoxes = [
        {
            title: 'NO STRAPS',
            text:  `
                Designed to stay in place without a head strap or a nose bridge, our sleep mask patches 
                alleviate the discomfort and headaches often caused by wrap-around sleep masks.
            `
        },
        {
            title: '100% SILK',
            text: `
                Our sleep mask is made with 100% soft silk that feels soft and comfortable on the skin. 
                As an organic fabric, silk keeps skin hydrated, regulates body temperature, and prevents 
                wrinkles from forming.
            `
        },
        {
            title: 'FACE CONFORMING',
            text: `
            The unique shape of our sleep mask patches conform to the eye area 
            for a comfortable fit which blocks out 100% of light without the need for straps 
            which may cause headaches and pressure. Plus the unique concave shape allows you to sleep 
            easy without disturbing your eye creams and serums underneath.
            `
        },
        {
            title: 'SIDE-SLEEPER FRIENDLY',
            text: `
                Our sleep mask patches are a side sleeper’s best friend. 
                Just like how you rely on a side-sleeper pillow for total comfort – our sleep mask patches stay 
                in place on side sleepers and don’t add unnecessary pressure to the temples and forehead.
            `
        }
    ]

    const { scrollYProgress } = useScroll({ target: descriptionContainer })
    const y = useParallax(scrollYProgress, 500)
    
    
    useEffect(() => {
        if(btnVideo.current){
            btnVideo.current.click()
        }
    },[play])

    // const scaleX = useSpring(scrollYProgress, {
    //     stiffness: 100,
    //     damping: 30,
    //     restDelta: 0.001
    //   });

    return (
      <ProductContainer id={"product-container"} ref={containerRef}>
        <ProductVideoSection justify={"center"}>
          <Video span={10}>
            <video
              muted
              loop
              width={"100%"}
              height={"100%"}
              src="videos/product-animation.mp4"
              ref={videoRef}
            />
            <button
              ref={btnVideo}
              onClick={() => videoRef.current?.play()}
              hidden
            >
              play
            </button>
          </Video>
          <VideoDescription span={10}>
            <VideoDescriptionContainer className="description-container">
                {
                  descriptionsBoxes.map(({ title, text }, index) => (
                    <DescriptionSection className="description-section"key={index}>
                      <VideoDescriptionItem $icon>
                        <div>
                            <Eyelash width="58px" height="58px" />
                        </div>
                      </VideoDescriptionItem>
                      <VideoDescriptionItem id="desc" $description>                      
                            {/* <div className="description-container" ref={descriptionContainer}>                        
                                
                            </div> */}
                            <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
                                {title}
                            </Typography>
                            <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
                                {text}
                            </Typography>
                      </VideoDescriptionItem>                  
                    </DescriptionSection>
                  ))
                }
            </VideoDescriptionContainer>
          </VideoDescription>
        </ProductVideoSection>
      </ProductContainer>
    );
}


// {
//   descriptionsBoxes.map(({ title, text },index) => (
//       <React.Fragment key={index}>
//           <Typography fontSize="32px" lineheight="40px" fontWeight="700" $type="Bold" >
//               {title}
//           </Typography>
//           <Typography fontSize="20px" letterSpacing="0" color="#6C6C6C" lineheight="24px" fontWeight="350" $type="Light">
//               {text}
//           </Typography>                           
//       </React.Fragment>
//   ))
// }